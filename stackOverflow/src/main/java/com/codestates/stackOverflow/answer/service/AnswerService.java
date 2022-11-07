

package com.codestates.stackOverflow.answer.service;

import com.codestates.stackOverflow.answer.entity.Answer;
import com.codestates.stackOverflow.answer.repository.AnswerIdMapping;
import com.codestates.stackOverflow.answer.repository.AnswerRepository;
import com.codestates.stackOverflow.exception.BusinessLogicException;
import com.codestates.stackOverflow.exception.ExceptionCode;
import com.codestates.stackOverflow.question.entity.Question;
import com.codestates.stackOverflow.question.repository.QuestionRepository;
import com.codestates.stackOverflow.user.entity.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AnswerService {
    private final AnswerRepository answerRepository;
    private final QuestionRepository questionRepository;
    public AnswerService(AnswerRepository answerRepository, QuestionRepository questionRepository) {
        this.answerRepository = answerRepository;
        this.questionRepository = questionRepository;
    }
    public Answer createAnswer(Answer answer){
        return answerRepository.save(answer);
    }
    public Answer findVerifiedAnswer(long answerId){ //요청된 답이 DB에 없으면 에러
        Optional<Answer> optionalAnswer = answerRepository.findById(answerId);
        Answer findAnswer = optionalAnswer.orElseThrow(()->
                new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));
        return findAnswer;
    }

    public Answer findAnswer(long answerId) {
        return findVerifiedAnswer(answerId);
    }


    public User findAnswerUser(long answerId){
        Answer findAnswer = findVerifiedAnswer(answerId); //요청된 답이 DB에 없으면 에러
        return findAnswer.getUser();
    }

    public Page<Answer> findAnswers(Question question, int answerPage, int answerSize) throws BusinessLogicException{
     //  Question question = questionRepository.findById(questionId).get();
        Page<Answer> findAllAnswer = answerRepository.finaAllByQuestionAndAnswerStatus( //해당question의 삭제되지 않은 answer의 Page를 가져온다
                PageRequest.of(answerPage-1,answerSize, Sort.by("createdAt").descending()),
                question, Answer.AnswerStatus.ANSWER_EXIST);
        VerifiedNoAnswer(findAllAnswer);

        return findAllAnswer;
    }

/**
    public List<Answer> findsAnswers(){

        List<Answer> answers =  List.of(new Answer(findAnswers()));

        return answers;
    }

*/
    public Answer updateAnswer(Answer answer){
        Answer findAnswer = findVerifiedAnswer(answer.getAnswerId());//요청된 답이 DB에 없으면 에러

        Optional.ofNullable(answer.getBody()) //답변 내용 수정
                .ifPresent(answerBody->findAnswer.setBody(answerBody));

        Optional.ofNullable(answer.getUpdatedAt()) // 업데이트 날짜 수정
                .ifPresent(answerUpdatedAt->findAnswer.setUpdatedAt(answerUpdatedAt));


     //   Optional.ofNullable(answer.getAnswerStatus()) //글 삭제
            //    .ifPresent(answerStatus->findAnswer.setAnswerStatus(answerStatus));

        Answer updatedQuestion = answerRepository.save(findAnswer);

        return updatedQuestion;
    }


    public void deleteAnswer(long answerId) {
        answerRepository.deleteById(answerId);
    }


    public Page<Answer> findAnswers(int page, int size) {
        return answerRepository.findAll(PageRequest.of(page, size,
                Sort.by("createdAt").descending()));
    }

    public List<AnswerIdMapping> findAnswers(long questionId) {
        Question question = questionRepository.findById(questionId).get();
        return answerRepository.findAllByQuestion(question);
    }

    private void VerifiedNoAnswer(Page<Answer> findAllAnswer) throws BusinessLogicException{//status가 ANSWER_EXIST인 List 데이터가 0이면 예외발생
        if(findAllAnswer.getTotalElements()==0){
            throw new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND);
        }
    }
}
