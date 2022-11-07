package com.codestates.stackOverflow.answer.dto;


import com.codestates.stackOverflow.answer.entity.Answer;
import com.codestates.stackOverflow.user.dto.UserResponseDto;
import com.codestates.stackOverflow.user.entity.User;
import lombok.Getter;
import lombok.Setter;
import java.time.LocalDateTime;



@Getter
@Setter
public class AnswerResponseDto {

    /**
     *  user ResponseDto 필요
     */
    private long answerId;
    private Answer.AnswerStatus answerStatus;
    private String body;
   // private UserResponseDto user;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private String name;
    private long userId;

}
