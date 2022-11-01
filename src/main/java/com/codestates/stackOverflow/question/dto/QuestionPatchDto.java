package com.codestates.stackOverflow.question.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

public class QuestionPatchDto {
    private long questionId;
    @NotBlank(message = "The title must not be blank.")
    private String title;
    @NotBlank(message = "The content must not be blank.")
    private String content;

    public long getQuestionId() {
        return questionId;
    }

    public void setQuestionId(long questionId) {
        this.questionId = questionId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
