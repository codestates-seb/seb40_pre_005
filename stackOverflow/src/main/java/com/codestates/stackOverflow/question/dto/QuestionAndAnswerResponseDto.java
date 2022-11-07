package com.codestates.stackOverflow.question.dto;

import com.codestates.stackOverflow.answer.dto.AnswerResponseDto;
import com.codestates.stackOverflow.question.entity.Question;
import com.codestates.stackOverflow.response.MultiResponseDto;
import com.codestates.stackOverflow.user.entity.User;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class QuestionAndAnswerResponseDto {
    private Long questionId;
    private Question.QuestionStatus questionStatus;
    private String title;
    private String body;
    private int view;
    private MultiResponseDto<AnswerResponseDto> answers;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private User user;
}
