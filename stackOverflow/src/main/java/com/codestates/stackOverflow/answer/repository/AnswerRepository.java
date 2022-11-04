package com.codestates.stackOverflow.answer.repository;

import com.codestates.stackOverflow.answer.entity.Answer;
import com.codestates.stackOverflow.question.entity.Question;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

/**
 * Entity에 의해 생성된 데이터베이스에 접근하는 메소드를 사용하기 위한 인터페이스
 * Service와 DB를 연결하는 고리의 역할을 수행
 * 데이터베이스에 적용하고자 하는 CRUD를 정의
 *
 * JPA 인터페이스 사용
 */
public interface AnswerRepository extends JpaRepository<Answer, Long> {


    @Query("select c from Answer c where c.question =:question and c.answerStatus =:answerStatus")
    Page<Answer> finaAllByQuestionAndAnswerStatus(Pageable pageable, @Param("question") Question question, @Param("answerStatus") Answer.AnswerStatus answerStatus);

    }
