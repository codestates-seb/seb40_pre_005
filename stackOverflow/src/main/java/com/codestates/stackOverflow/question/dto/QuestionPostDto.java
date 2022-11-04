package com.codestates.stackOverflow.question.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

@Getter
@Setter
public class QuestionPostDto {

//    private long userId;
    @NotBlank(message = "The title must not be blank.")
    private String title;
    @NotBlank(message = "The content must not be blank.")
    private String body;

//    public String getTitle() {
//        return title;
//    }
//
//    public void setTitle(String title) {
//        this.title = title;
//    }
//
//    public String getBody() {
//        return body;
//    }
//
//    public void setBody(String body) {
//        this.body = body;
//    }
}
