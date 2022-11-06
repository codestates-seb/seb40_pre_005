package com.codestates.stackOverflow.answer.mapper;

import com.codestates.stackOverflow.answer.dto.AnswerResponseDto;
import com.codestates.stackOverflow.answer.entity.Answer;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-11-06T20:37:23+0900",
    comments = "version: 1.5.2.Final, compiler: javac, environment: Java 11.0.15 (Azul Systems, Inc.)"
)
@Component
public class AnswerMapperImpl implements AnswerMapper {

    @Override
    public List<AnswerResponseDto> answersToAnswersResponseDtos(List<Answer> answers) {
        if ( answers == null ) {
            return null;
        }

        List<AnswerResponseDto> list = new ArrayList<AnswerResponseDto>( answers.size() );
        for ( Answer answer : answers ) {
            list.add( answerToAnswerResponseDto( answer ) );
        }

        return list;
    }

    protected AnswerResponseDto answerToAnswerResponseDto(Answer answer) {
        if ( answer == null ) {
            return null;
        }

        AnswerResponseDto answerResponseDto = new AnswerResponseDto();

        if ( answer.getAnswerId() != null ) {
            answerResponseDto.setAnswerId( answer.getAnswerId() );
        }
        answerResponseDto.setAnswerStatus( answer.getAnswerStatus() );
        answerResponseDto.setBody( answer.getBody() );
        answerResponseDto.setCreatedAt( answer.getCreatedAt() );
        answerResponseDto.setUpdatedAt( answer.getUpdatedAt() );

        return answerResponseDto;
    }
}
