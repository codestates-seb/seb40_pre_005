package com.codestates.stackOverflow.question.mapper.repository;

import com.codestates.stackOverflow.question.entity.Question;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;


import java.util.Optional;

public interface QuestionRepository extends JpaRepository<Question, Long> {
    Optional<Question> findByTitle(String title);

    Page<Question> findAllByQuestionStatus(Pageable pageable, Question.QuestionStatus questionStatus);
}
