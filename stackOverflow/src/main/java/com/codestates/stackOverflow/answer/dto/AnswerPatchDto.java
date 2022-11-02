package com.codestates.stackOverflow.answer.dto;


import com.codestates.stackOverflow.answer.entity.Answer;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AnswerPatchDto {

    private long answerId;

    // 답변 수정
    private String body;

    //답 삭제
    private Answer.AnswerStatus answerStatus;

}
