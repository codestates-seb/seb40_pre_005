

package com.codestates.stackOverflow.answer.controller;

import com.codestates.stackOverflow.answer.dto.AnswerPatchDto;
import com.codestates.stackOverflow.answer.dto.AnswerPostDto;
import com.codestates.stackOverflow.answer.entity.Answer;
import com.codestates.stackOverflow.answer.mapper.AnswerMapper;
import com.codestates.stackOverflow.answer.service.AnswerService;
import com.codestates.stackOverflow.question.service.QuestionService;
import com.codestates.stackOverflow.user.mapper.UserMapper;
import com.codestates.stackOverflow.user.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
@Api(tags = {"Answer API"})
@RestController
@Validated
@Slf4j
@CrossOrigin(origins = "*", allowedHeaders = "*")
@AllArgsConstructor
@RequestMapping("/v1")
public class AnswerController {

    private AnswerService answerService;
    private AnswerMapper mapper;
    private UserService userService;
    private UserMapper userMapper;
    private QuestionService questionService;


    @GetMapping(value= "/answer")
    public String answer(){
    return "테스트입니다 !!";
    }



/**
     * answer 등록 API
     */


// localhost8080/v1/answer
    @ApiOperation(value = "Answer 등록", response = Answer.class)
    @PostMapping("/answer/")
    public ResponseEntity postAnswer(@Valid @RequestBody AnswerPostDto answerPostDto) {
        Answer question = answerService.createAnswer(
                mapper.answerPostDtoToAnswer(questionService, userService,answerPostDto));


        return new ResponseEntity<>(
                /** new SingleResponseDto<>/
                 *
                 */
                (mapper.answerToAnswerResponseDto(userMapper,question)), HttpStatus.CREATED);
    }


/**
     *  answer 수정
     */


    @ApiOperation(value = "Answer 수정", response = Answer.class)
    @PatchMapping("/answer/{answer-id}")
    public ResponseEntity patchAnswer(@PathVariable("answer-id") @Positive @NotNull long answerId,
                                          @Valid @RequestBody AnswerPatchDto answerPatchDto){
        /**
        answerPatchDto.setAnswerId(answerId);

        Answer response = answerService.updateAnswer(mapper.answerPatchDtoToAnswer(answerPatchDto));
        return new ResponseEntity<>(mapper.answerToAnswerResponseDto(response), HttpStatus.OK);
*/

        answerPatchDto.setAnswerId(answerId);
        Answer answer = mapper.answerPatchDtoToAnswer(answerService,userService,answerPatchDto);
        Answer updatedAnswer = answerService.updateAnswer(answer);

        return new ResponseEntity<>(
                /**
                new SingleResponseDto<>
                 */(mapper.answerToAnswerResponseDto(userMapper,updatedAnswer)),
                HttpStatus.OK);
    }

}



