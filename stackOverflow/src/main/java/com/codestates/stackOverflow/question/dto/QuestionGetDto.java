package com.codestates.stackOverflow.question.dto;

import com.codestates.stackOverflow.answer.entity.Answer;
import com.codestates.stackOverflow.question.entity.Question;
import lombok.Builder;
import lombok.Getter;

import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.List;

//테스트
@Getter
public class QuestionGetDto {
    private final long id;
    private final String title;
    private final String body;
    private final int view;

//    @OneToMany(mappedBy = "question")
//    private List<Answer> answers = new ArrayList<>(); //test

    public QuestionGetDto(Question question){
        this.id = question.getQuestionId();
        this.title = question.getTitle();
        this.body = question.getBody();
        this.view = question.getView();
//        this.answers = question.getAnswers(); //test
    }
    @Builder
    public QuestionGetDto(long id, String title, String body, int view, List<Answer> answers){
        this.id = id;
        this.title = title.substring(0, Math.min(title.length(), 10));
        this.body = body;
        this.view = view;
//        this.answers = answers;
    }
}
