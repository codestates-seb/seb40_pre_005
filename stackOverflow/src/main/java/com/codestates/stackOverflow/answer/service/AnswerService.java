//package com.codestates.stackOverflow.answer.service;
//
//import com.codestates.stackOverflow.answer.entity.Answer;
//import com.codestates.stackOverflow.answer.repository.AnswerRepository;
//import org.springframework.stereotype.Service;
//
//import java.util.Optional;
//
//@Service
//public class AnswerService {
//    private final AnswerRepository answerRepository;
//
//    public AnswerService(AnswerRepository answerRepository) {
//        this.answerRepository = answerRepository;
//    }
//    public Answer createAnswer(Answer answer){
//        /**
//        // Answer answer = answer;
//        //return answer;
//         */
//        return answerRepository.save(answer);
//    }
//
//    public User findAnswerUser(long answerId){
//        Answer findAnswer = findVerifiedAnswer(answerId); //요청된 답이 DB에 없으면 에러
//        return findAnswer.getUser();
//    }
//
//    public Answer updateAnswer(Answer answer){
//        Optional.ofNullable(answer.getBody()) //답변 내용 수정
//                .ifPresent(answerBody->findAnswer.setBody(answerBody));
//
//        Optional.ofNullable(answer.getUpdatedAt()) // 업데이트 날짜 수정
//                .ifPresent(answerUpdatedAt->findAnswer.setUpdatedAt(answerUpdatedAt));
//
//
//        Optional.ofNullable(answer.getAnswerStatus()) //글 삭제
//                .ifPresent(answerStatus->findAnswer.setAnswerStatus(answerStatus));
//
//        Answer updatedQuestion = answerRepository.save(findAnswer);
//
//        return updatedQuestion;
//    }
//
//}