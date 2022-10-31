package com.codestates.stackOverflow.question.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table
public class Question {
    @Id
    @GeneratedValue
    private long questionId;
    private String title;
    private String body;


    public Question(long questionId, String title, String body) {
        this.questionId = questionId;
        this.title = title;
        this.body = body;
    }
}
