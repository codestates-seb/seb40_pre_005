package com.codestates.stackOverflow.question.dto;

import com.codestates.stackOverflow.question.entity.Question;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class QuestionResponseDto {
    private long questionId;
    private Question.QuestionStatus questionStatus;
    private String title;
    private String body;
    private int view;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
