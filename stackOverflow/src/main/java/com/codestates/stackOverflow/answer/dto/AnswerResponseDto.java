package com.codestates.stackOverflow.answer.dto;


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
    private String body;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
