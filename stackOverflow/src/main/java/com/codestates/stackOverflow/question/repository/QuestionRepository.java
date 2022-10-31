package com.codestates.stackOverflow.question.repository;

import com.codestates.stackOverflow.question.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface QuestionRepository extends JpaRepository<Question, Long> {
}
