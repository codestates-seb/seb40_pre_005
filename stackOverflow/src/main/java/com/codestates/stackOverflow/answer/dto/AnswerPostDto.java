package com.codestates.stackOverflow.answer.dto;

import lombok.Getter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;

@Getter
public class AnswerPostDto {

    @Positive
    @NotNull
    private Long questionId;

    // 답변 작성
    @NotBlank(message = "Post Your Answer" )
    private String body;
}
