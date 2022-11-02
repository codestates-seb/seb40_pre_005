package com.codestates.stackOverflow.question.service;

import com.codestates.stackOverflow.exception.BusinessLogicException;
import com.codestates.stackOverflow.exception.ExceptionCode;
import com.codestates.stackOverflow.question.entity.Question;
import com.codestates.stackOverflow.question.mapper.repository.QuestionRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class QuestionService {
    private final QuestionRepository questionRepository;
    public QuestionService(QuestionRepository questionRepository){
        this.questionRepository = questionRepository;
    }
    public Question createQuestion(Question question){

        return questionRepository.save(question);
    }
    public Question updateQuestion(Question question){
        Question findQuestion = findVerifiedQuestion(question.getQuestionId());
        Optional.ofNullable(question.getTitle())
                .ifPresent(questionTitle->findQuestion.setTitle(questionTitle));

        Optional.ofNullable(question.getBody())
                .ifPresent(questionBody->findQuestion.setBody(questionBody));
        Question updateQuestion = questionRepository.save(findQuestion);
        return updateQuestion;
    }
    public Question findQuestion(long questionId){
        Question question = new Question();
        question.setView(question.getView()+1);
        questionRepository.save(question);
        return question;
    }
    public Page<Question> findQuestions(int page, int size,String sort){
        Page<Question> questions = questionRepository.findAllByQuestionStatus(
                PageRequest.of(page,size, Sort.by(sort).descending()),
                Question.QuestionStatus.QUESTION_EXIST);
        return questions;
    }
    public void deleteQuestion(long questionId){
        questionRepository.deleteById(questionId);
    }
    public Question findVerifiedQuestion(long questionId){
        Optional<Question> optionalQuestion = questionRepository.findById(questionId);
        Question findQuestion = optionalQuestion.orElseThrow(()->
                new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
        return findQuestion;
    }
}
