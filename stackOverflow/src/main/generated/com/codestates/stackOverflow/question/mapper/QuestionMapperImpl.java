package com.codestates.stackOverflow.question.mapper;

import com.codestates.stackOverflow.question.dto.QuestionPatchDto;
import com.codestates.stackOverflow.question.dto.QuestionPostDto;
import com.codestates.stackOverflow.question.dto.QuestionResponseDto;
import com.codestates.stackOverflow.question.entity.Question;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-11-01T17:10:55+0900",
    comments = "version: 1.5.2.Final, compiler: javac, environment: Java 11.0.17 (Azul Systems, Inc.)"
)
@Component
public class QuestionMapperImpl implements QuestionMapper {

    @Override
    public Question questionPostDtoToQuestion(QuestionPostDto questionPostDto) {
        if ( questionPostDto == null ) {
            return null;
        }

        Question question = new Question();

        question.setTitle( questionPostDto.getTitle() );

        return question;
    }

    @Override
    public Question questionPatchDtoToQuestion(QuestionPatchDto questionPatchDto) {
        if ( questionPatchDto == null ) {
            return null;
        }

        Question question = new Question();

        question.setQuestionId( questionPatchDto.getQuestionId() );
        question.setTitle( questionPatchDto.getTitle() );

        return question;
    }

    @Override
    public QuestionResponseDto questionToQuestionResponseDto(Question question) {
        if ( question == null ) {
            return null;
        }

        long questionId = 0L;
        String title = null;

        questionId = question.getQuestionId();
        title = question.getTitle();

        String content = null;

        QuestionResponseDto questionResponseDto = new QuestionResponseDto( questionId, title, content );

        return questionResponseDto;
    }
}
