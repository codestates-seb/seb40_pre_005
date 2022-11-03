package com.codestates.stackOverflow.question.dto;

import com.codestates.stackOverflow.audit.Auditable;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;

@Getter
@NoArgsConstructor
@Builder //test
public class QuestionPatchDto {
//    @Setter
//    private long questionId;
    @NotBlank(message = "The title must not be blank.")
    private String title;
    @NotBlank(message = "The content must not be blank.")
    private String body;
    @Builder //test
    public QuestionPatchDto(String title, String body){
        this.title = title;
        this.body = body;
    }

//    public long getQuestionId() {
//        return questionId;
//    }
//
//    public void setQuestionId(long questionId) {
//        this.questionId = questionId;
//    }
//
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
//    public void setBody(String body) { this.body = body; }
//    private Question.QuestionStatus questionStatus;
}
