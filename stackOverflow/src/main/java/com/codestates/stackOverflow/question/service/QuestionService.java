package com.codestates.stackOverflow.question.service;

import com.codestates.stackOverflow.exception.BusinessLogicException;
import com.codestates.stackOverflow.exception.ExceptionCode;
import com.codestates.stackOverflow.question.dto.PatchEditor;
import com.codestates.stackOverflow.question.dto.QuestionGetDto;
import com.codestates.stackOverflow.question.dto.QuestionPatchDto;
import com.codestates.stackOverflow.question.entity.Question;
import com.codestates.stackOverflow.question.repository.QuestionRepository;
import com.codestates.stackOverflow.user.entity.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class QuestionService {
    private final QuestionRepository questionRepository;
    public QuestionService(QuestionRepository questionRepository){
        this.questionRepository = questionRepository;
    }
    //생성 서비스
    public Question createQuestion(Question question){

        return questionRepository.save(question);
    }
    //수정 서비스
//    public Question updateQuestion(Question question){
//        Question findQuestion = findVerifiedQuestion(question.getQuestionId()); //요청된 질문 없으면 에러
//        Optional.ofNullable(question.getTitle()) //제목수정
//                .ifPresent(questionTitle->findQuestion.setTitle(questionTitle));
//
//        Optional.ofNullable(question.getBody())//내용수정
//                .ifPresent(questionBody->findQuestion.setBody(questionBody));
//
//        Optional.ofNullable(question.getUpdatedAt())//시간 수정
//                .ifPresent(questionUpdatedAt->findQuestion.setUpdatedAt(questionUpdatedAt));
//
//        Question updateQuestion = questionRepository.save(findQuestion);
//        return updateQuestion;
//    }
    @Transactional
    public void updateQuestion(long id, QuestionPatchDto questionPatchDto){
        Question question = questionRepository.findById(id).orElseThrow(RuntimeException::new);

        PatchEditor.PatchEditorBuilder patchEditorBuilder = question.toEditor();

        PatchEditor patchEditor = patchEditorBuilder.title(questionPatchDto.getTitle())
                .body(questionPatchDto.getBody()).build();
        Question findQuestion = findVerifiedQuestion(question.getQuestionId()); //요청된 질문 없으면 에러

        Optional.ofNullable(question.getUpdatedAt())//시간 수정
                .ifPresent(questionUpdatedAt->findQuestion.setUpdatedAt(questionUpdatedAt));
        questionRepository.save(question);
        question.edit(patchEditor);
    }
    //    //특정 질문 조회 서비스
//    public Question findQuestion(long questionId){
////        Page<Question> question = questionRepository.findAllByQuestionStatus(
////                PageRequest.of(page,size, Sort.by("createdAt").descending()),
////                Question.QuestionStatus.QUESTION_EXIST);
//        Question question = findVerifiedQuestion(questionId);
//        question.setView(question.getView()+1);
//        questionRepository.save(question);
//        return question;
//    }
    public QuestionGetDto findQuestion(long id){
        Question question = questionRepository.findById(id)
                .orElseThrow(IllegalArgumentException::new);
        question.setView(question.getView()+1);
        questionRepository.save(question);
        return QuestionGetDto.builder()
                .id(question.getQuestionId())
                .title(question.getTitle())
                .body(question.getBody())
                .view(question.getView())
                .build();
    }
    //모든 질문 조회 서비스
    public Page<Question> findQuestions(int page, int size){
        Page<Question> questions = questionRepository.findAllByQuestionStatus(
                PageRequest.of(page,size, Sort.by("createdAt").descending()),
                Question.QuestionStatus.QUESTION_EXIST);

        VerifiedNoQuestion(questions);

        return questions;
    }
    //질문 삭제 서비스
    public void deleteQuestion(long questionId){
        questionRepository.deleteById(questionId);
    }

    //요청된 질문이 DB에 없으면 에러
    public Question findVerifiedQuestion(long questionId){
        Optional<Question> optionalQuestion = questionRepository.findById(questionId);
        Question findQuestion = optionalQuestion.orElseThrow(()->
                new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
        return findQuestion;
    }
    //status가 QUESTION_EXIST인 List 데이터가 0이면 예외발생
    private void VerifiedNoQuestion(Page<Question> findAllQuestion){
        if(findAllQuestion.getTotalElements()==0){
            throw new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND);
        }
    }
    //요청된 질문이 DB에 없으면 에러
    public User findQuestionUser(long questionId){
        Question findQuestion = findVerifiedQuestion(questionId);
        return findQuestion.getUser();
    }
}