package com.codestates.stackOverflow.answer.dto;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AnswerPatchDto {

    private long answerId;

    // 답변 수정
    private String body;


}
