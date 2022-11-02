package com.codestates.stackOverflow.question.mapper;

<<<<<<< HEAD
import com.codestates.stackOverflow.question.dto.QuestionPatchDto;
import com.codestates.stackOverflow.question.dto.QuestionPostDto;
import com.codestates.stackOverflow.question.dto.QuestionResponseDto;
import com.codestates.stackOverflow.question.entity.Question;
=======
import com.codestates.stackOverflow.question.dto.QuestionResponseDto;
import com.codestates.stackOverflow.question.entity.Question;
import java.util.ArrayList;
import java.util.List;
>>>>>>> 5342e2c3db3f7ef9e4e3b8006ec8d83c478726cb
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
<<<<<<< HEAD
    date = "2022-11-01T17:10:55+0900",
    comments = "version: 1.5.2.Final, compiler: javac, environment: Java 11.0.17 (Azul Systems, Inc.)"
=======
    date = "2022-11-02T14:56:16+0900",
    comments = "version: 1.5.2.Final, compiler: javac, environment: Java 11.0.15 (Azul Systems, Inc.)"
>>>>>>> 5342e2c3db3f7ef9e4e3b8006ec8d83c478726cb
)
@Component
public class QuestionMapperImpl implements QuestionMapper {

    @Override
<<<<<<< HEAD
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
=======
    public List<QuestionResponseDto> questionsToQuestionResponseDtos(List<Question> questions) {
        if ( questions == null ) {
            return null;
        }

        List<QuestionResponseDto> list = new ArrayList<QuestionResponseDto>( questions.size() );
        for ( Question question : questions ) {
            list.add( questionToQuestionResponseDto( question ) );
        }

        return list;
    }

    protected QuestionResponseDto questionToQuestionResponseDto(Question question) {
>>>>>>> 5342e2c3db3f7ef9e4e3b8006ec8d83c478726cb
        if ( question == null ) {
            return null;
        }

<<<<<<< HEAD
        long questionId = 0L;
        String title = null;

        questionId = question.getQuestionId();
        title = question.getTitle();

        String content = null;

        QuestionResponseDto questionResponseDto = new QuestionResponseDto( questionId, title, content );
=======
        QuestionResponseDto questionResponseDto = new QuestionResponseDto();

        questionResponseDto.setQuestionId( question.getQuestionId() );
        questionResponseDto.setQuestionStatus( question.getQuestionStatus() );
        questionResponseDto.setTitle( question.getTitle() );
        questionResponseDto.setBody( question.getBody() );
        questionResponseDto.setView( question.getView() );
        questionResponseDto.setCreatedAt( question.getCreatedAt() );
        questionResponseDto.setUpdatedAt( question.getUpdatedAt() );
>>>>>>> 5342e2c3db3f7ef9e4e3b8006ec8d83c478726cb

        return questionResponseDto;
    }
}
