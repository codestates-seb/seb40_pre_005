package com.codestates.stackOverflow.question.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@AllArgsConstructor
public class QuestionResponseDto {
    private long questionId;
    private String title;
    private String content;
}
