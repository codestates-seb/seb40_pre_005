package com.codestates.stackOverflow.question.controller;

import com.codestates.stackOverflow.answer.mapper.AnswerMapper;
import com.codestates.stackOverflow.answer.service.AnswerService;
import com.codestates.stackOverflow.question.dto.QuestionGetDto;
import com.codestates.stackOverflow.question.dto.QuestionPatchDto;
import com.codestates.stackOverflow.question.dto.QuestionPostDto;

import com.codestates.stackOverflow.question.dto.QuestionResponseDto;
import com.codestates.stackOverflow.question.entity.Question;
import com.codestates.stackOverflow.question.mapper.QuestionMapper;
import com.codestates.stackOverflow.question.service.QuestionService;
import com.codestates.stackOverflow.response.MultiResponseDto;
import com.codestates.stackOverflow.response.SingleResponseDto;
import com.codestates.stackOverflow.user.entity.User;
import com.codestates.stackOverflow.user.mapper.UserMapper;
import com.codestates.stackOverflow.user.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "/question")
@Validated
@Slf4j
@CrossOrigin(origins = "*", allowedHeaders = "*")
@Api(tags = {"Question API"})
@AllArgsConstructor
public class QuestionController {
    private final QuestionService questionService;
    private final QuestionMapper questionMapper;
    private final UserService userService;
    private final UserMapper userMapper;
    private final AnswerMapper answerMapper;
    private final AnswerService answerService;

    //?????? ?????? ??????
    @ApiImplicitParams({
            @ApiImplicitParam(
                    name = "Bearer",
                    value = "????????? ?????? ??? AccessToken",
                    required = true, dataType = "String", paramType = "header")
    })
    @PostMapping("/write")
    @ApiOperation(value = "????????????", response = Question.class)
    public ResponseEntity postQuestion(@Valid @RequestBody QuestionPostDto questionPostDto){

        Question question = questionService.createQuestion(questionMapper.questionPostDtoToQuestion(userService,questionPostDto));

        return new ResponseEntity<>(new SingleResponseDto<>(questionMapper.questionToQuestionResponseDto(userMapper,question)), HttpStatus.CREATED);
    }
    //?????? ?????? ??????
//    @PatchMapping("/{question-id}")
//    @ApiOperation(value = "????????????", response = Question.class)
//    public ResponseEntity patchQuestion(@PathVariable("question-id") @Positive @NotNull long questionId,
//                                        @Valid @RequestBody QuestionPatchDto questionPatchDto) {
////        questionPatchDto.setQuestionId(questionId);
//        Question question = questionMapper.questionPatchDtoToQuestion(questionService,userService,questionPatchDto);
//        Question updatedQuestion = questionService.updateQuestion(question);
//
//        return new ResponseEntity<>(
//                new SingleResponseDto<>(questionMapper.questionToQuestionResponseDto(userMapper,updatedQuestion)),
//                HttpStatus.OK);
//    }
    @ApiImplicitParams({
            @ApiImplicitParam(
                    name = "Bearer",
                    value = "????????? ?????? ??? AccessToken",
                    required = true, dataType = "String", paramType = "header")
    })
    @PatchMapping("/{question-id}")
    @ApiOperation(value = "????????????", response = Question.class)
    public void patchQuestion(@PathVariable("question-id") @Positive long questionId, @RequestBody @Valid QuestionPatchDto request){
        questionService.updateQuestion(questionId, request);
    }

    //????????? ?????? ?????? ??????
    @GetMapping("find/{question-id}")
    @ApiOperation(value = "??????????????????", response = Question.class)
    public ResponseEntity getQuestion(@PathVariable("question-id") @Positive long questionId,
                                      @Positive @RequestParam("page") int answerPage,
                                      @Positive @RequestParam("size") int answerSize){
        Question question = questionService.findQuestion(questionId);
//        return new ResponseEntity<>(questionMapper.questionToQuestionResponseDto(), HttpStatus.OK);
        return new ResponseEntity<>(new SingleResponseDto<>(
                questionMapper.questionToQuestionAndAnswerResponseDtos(answerService,answerMapper,question,
                        answerPage,answerSize)), HttpStatus.OK);
    }
//    @GetMapping("/{question-id}")
//    @ApiOperation(value = "??????????????????", response = Question.class)
//    public QuestionGetDto getQuestion(@PathVariable("question-id") @Positive long questionId){
//
//        return questionService.findQuestion(questionId);
//    }
    // ?????? ?????? ?????? ??????
    @GetMapping
    @ApiOperation(value = "??????????????????", response = Question.class)
    public ResponseEntity getQuestions(@Positive @RequestParam("page") int page,
                                       @Positive @RequestParam("size") int size){
        Page<Question> pageQuestions = questionService.findQuestions(page-1,size);

        List<Question> questions = pageQuestions.getContent();

        return new ResponseEntity<>(new MultiResponseDto<>(
                questionMapper.questionsToQuestionResponseDtos(questions),
                pageQuestions),HttpStatus.OK);
    }
    //?????? ?????? ??????
    @ApiImplicitParams({
            @ApiImplicitParam(
                    name = "Bearer",
                    value = "????????? ?????? ??? AccessToken",
                    required = true, dataType = "String", paramType = "header")
    })
    @DeleteMapping("/{question-id}")
    @ApiOperation(value = "??????????????????", response = Question.class)
    public ResponseEntity deleteQuestion(@PathVariable("question-id") @Positive long questionId){
        System.out.println("delete question");
        questionService.deleteQuestion(questionId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
