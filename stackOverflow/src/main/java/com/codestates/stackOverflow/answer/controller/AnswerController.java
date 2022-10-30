package com.codestates.stackOverflow.answer.controller;

import com.codestates.stackOverflow.answer.dto.AnswerPatchDto;
import com.codestates.stackOverflow.answer.dto.AnswerPostDto;
import com.codestates.stackOverflow.answer.entity.Answer;
import com.codestates.stackOverflow.answer.mapper.AnswerMapper;
import com.codestates.stackOverflow.answer.service.AnswerService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;

@RestController
@RequestMapping("/v1")
public class AnswerController {

    private AnswerService answerService;
    private AnswerMapper mapper;


    @GetMapping(value= "/answer")
    public String answer(){
    return "테스트입니다 !!";
    }



    /**
     * answer 등록 API
     */

// localhost8080/v1/answer
    @PostMapping("/answer/")
    public ResponseEntity postAnswer(@Valid @RequestBody AnswerPostDto answerPostDto) {
        Answer question = answerService.createAnswer(
                mapper.answerPostDtoToAnswer(questionService, userService,answerPostDto));

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.answerToAnswerResponseDto(userMapper,question)), HttpStatus.CREATED);
    }

    /**
     *  answer 수정
     */

    @PatchMapping("/answer/{answer-id}")
    public ResponseEntity patchAnswer(@PathVariable("answer-id") @Positive @NotNull long answerId,
                                          @Valid @RequestBody AnswerPatchDto answerPatchDto){

        return new ResponseEntity<>(answerPatchDto, HttpStatus.OK);
    }

}



