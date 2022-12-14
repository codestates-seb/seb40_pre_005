

package com.codestates.stackOverflow.answer.controller;
import com.codestates.stackOverflow.question.dto.QuestionResponseDto;
import com.codestates.stackOverflow.question.entity.Question;
import com.codestates.stackOverflow.answer.dto.AnswerPatchDto;
import com.codestates.stackOverflow.answer.dto.AnswerPostDto;
import com.codestates.stackOverflow.answer.dto.AnswerResponseDto;
import com.codestates.stackOverflow.answer.entity.Answer;
import com.codestates.stackOverflow.answer.mapper.AnswerMapper;
import com.codestates.stackOverflow.answer.service.AnswerService;
import com.codestates.stackOverflow.question.entity.Question;
import com.codestates.stackOverflow.question.mapper.QuestionMapper;
import com.codestates.stackOverflow.question.service.QuestionService;
import com.codestates.stackOverflow.response.MultiResponseDto;
import com.codestates.stackOverflow.response.SingleResponseDto;
import com.codestates.stackOverflow.user.mapper.UserMapper;
import com.codestates.stackOverflow.user.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import java.util.List;
import java.util.stream.Collectors;

@Api(tags = {"Answer API"})
@RestController
@Validated
@Slf4j
@CrossOrigin(origins = "*", allowedHeaders = "*")
@AllArgsConstructor
@RequestMapping("/v1/answer")
public class AnswerController {

    private AnswerService answerService;
    private AnswerMapper mapper;
    private UserService userService;
    private UserMapper userMapper;
    private QuestionService questionService;


    /**
     * answer ?????? API
     */

// answer Id ??????
// localhost8080/v1/answer
    @ApiImplicitParams({
            @ApiImplicitParam(
                    name = "Bearer",
                    value = "????????? ?????? ??? AccessToken",
                    required = true, dataType = "String", paramType = "header")
    })
    @ApiOperation(value = "Answer ??????", response = Answer.class)
    @PostMapping
    public ResponseEntity postAnswer(@Valid @RequestBody AnswerPostDto answerPostDto) {
        Answer question = answerService.createAnswer(
                mapper.answerPostDtoToAnswer(questionService, userService,answerPostDto));

        return new ResponseEntity<>(
               (mapper.answerToAnswerResponseDto(userMapper,question)), HttpStatus.CREATED);
    }


/**
     *  answer ??????
     */




    @ApiImplicitParams({
            @ApiImplicitParam(
                    name = "Bearer",
                    value = "????????? ?????? ??? AccessToken",
                    required = true, dataType = "String", paramType = "header")
    })
    @ApiOperation(value = "Answer ??????", response = Answer.class)
    @PatchMapping("/{answer-id}")
    public ResponseEntity patchAnswer(@PathVariable("answer-id") @Positive @NotNull long answerId,
                                          @Valid @RequestBody AnswerPatchDto answerPatchDto) {
        /**
         answerPatchDto.setAnswerId(answerId);

         Answer response = answerService.updateAnswer(mapper.answerPatchDtoToAnswer(answerPatchDto));
         return new ResponseEntity<>(mapper.answerToAnswerResponseDto(response), HttpStatus.OK);
         */

        answerPatchDto.setAnswerId(answerId);
        Answer answer = mapper.answerPatchDtoToAnswer(answerService, userService, answerPatchDto);
        Answer updatedAnswer = answerService.updateAnswer(answer);

        return new ResponseEntity<>(
                /**
                 new SingleResponseDto<>
                 */(mapper.answerToAnswerResponseDto(userMapper, updatedAnswer)),
                HttpStatus.OK);
    }



    /**
     * answer ?????? API
     */



/**
    @ApiOperation(value = "Answer ??????", response = Answer.class)
    @GetMapping(value= "/answer")
    public ResponseEntity getAnswers(long answerId) {
        List<Answer> answers = answerService.findAnswerUser(answerId);

        List<AnswerResponseDto> response =
                answers.stream()
                        .map(answer -> mapper.answerToAnswerResponseDto(userMapper,answer).collect(Collectors.toList());
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
    */


/**
 *
 * GET ?????? ?????? ??????
 *
 *
 */

//@ApiOperation(value = "Answer ?????? ??????", response = Answer.class)
//@GetMapping(value= "/answer")
//public ResponseEntity getAnswers(@RequestParam("page") @Positive int page,
//                                 @RequestParam("size") @Positive int size) {
//    Page<Answer> allAnswer = answerService.findAnswers(page - 1, size);
//    List<Answer> content = allAnswer.getContent();
//
//    return new ResponseEntity(new MultiResponseDto<>(mapper.answersToAnswerResponseDtos(userMapper,content), allAnswer), HttpStatus.OK);
//}


/**
    @ApiOperation(value = "Answer ??????", response = Question.class)
    @GetMapping(value= "/answer")
    public ResponseEntity getAnswers(
                                      @RequestParam("page") @Positive int page,
                                      @RequestParam("size") @Positive int size){
            Page<Answer> pageAnswers = answerService.findAnswers(question, page - 1, size,"createdAt" );

            List<Answer> findAllAnswer = pageAnswers.getContent();

            return new ResponseEntity<>(new MultiResponseDto<>(
                    mapper.answersToAnswerResponseDtos(userMapper,findAllAnswer),pageAnswers),
                   HttpStatus.OK);
    }
*/
//    @ApiOperation(value = " ?????? Answer ??????", response = Answer.class)
//    @GetMapping("/{answer-id}")
//    public ResponseEntity getAnswer(@PathVariable("answer-id") @Positive long answerId) {
//        Answer answer = answerService.findAnswer(answerId);
//
//        return new ResponseEntity<>(mapper.answerToAnswerResponseDto(userMapper,answer), HttpStatus.OK);
//    }

        /**
        return new ResponseEntity<>(
                mapper.answersToAnswerResponseDtos(),HttpStatus.OK);

*/



    /**
     * answer ?????? API
     */
    @ApiImplicitParams({
            @ApiImplicitParam(
                    name = "Bearer",
                    value = "????????? ?????? ??? AccessToken",
                    required = true, dataType = "String", paramType = "header")
    })
    @ApiOperation(value = "Answer ??????", response = Answer.class)
    @DeleteMapping(value= "/{answer-id}")
    public ResponseEntity deleteAnswer(@PathVariable("answer-id") @Positive @NotNull long answerId){

        answerService.deleteAnswer(answerId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


    }





