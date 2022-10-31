package com.codestates.stackOverflow.question.service;

import com.codestates.stackOverflow.question.entity.Question;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionService {
    public Question createQuestion(Question question){
        Question createQuestion = question;
        return createQuestion;
    }
    public Question updateQuestion(Question question){
        Question updateQuestion = question;
        return updateQuestion;
    }
    public Question findQuestion(long questionId){
        Question question = new Question(questionId, "hi", "hello");
        return question;
    }
    public List<Question> findQuestions(){
        List<Question> Questions = List.of(
                new Question(1, "hi", "hello"),
                new Question(2, "bye", "goodbye")
        );
        return Questions;
    }
    public void deleteQuestion(long questionId){

    }
}
