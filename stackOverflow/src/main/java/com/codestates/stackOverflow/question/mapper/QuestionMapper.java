package com.codestates.stackOverflow.question.mapper;

import com.codestates.stackOverflow.question.dto.QuestionPatchDto;
import com.codestates.stackOverflow.question.dto.QuestionPostDto;
import com.codestates.stackOverflow.question.dto.QuestionResponseDto;
import com.codestates.stackOverflow.question.dto.QuestionVoteDto;
import com.codestates.stackOverflow.question.entity.Question;
import com.codestates.stackOverflow.question.service.QuestionService;
import com.codestates.stackOverflow.user.mapper.UserMapper;
import com.codestates.stackOverflow.user.service.UserService;
import org.mapstruct.Mapper;
import org.springframework.stereotype.Component;

import java.util.List;

@Mapper(componentModel = "spring")
public interface QuestionMapper {
    default Question questionPostDtoToQuestion(UserService userService, QuestionPostDto questionPostDto){
        Question question = new Question();

        question.setView(0);
        question.setBody(questionPostDto.getBody());
        question.setTitle(questionPostDto.getTitle());

        return question;
    }
    default Question questionPatchDtoToQuestion(QuestionService questionService, UserService userService ,QuestionPatchDto questionPatchDto){
        Question question = new Question();
//        question.setQuestionId(questionPatchDto.getQuestionId());

        question.setBody(questionPatchDto.getBody());
        question.setTitle(questionPatchDto.getTitle());
//        question.setQuestionStatus(questionPatchDto.getQuestionStatus());

        return question;
    }
    default QuestionResponseDto questionToQuestionResponseDto(UserMapper userMapper, Question question){
        QuestionResponseDto questionResponseDto = new QuestionResponseDto();
        questionResponseDto.setQuestionId(question.getQuestionId());
        questionResponseDto.setQuestionStatus(question.getQuestionStatus());
        questionResponseDto.setTitle(question.getTitle());
        questionResponseDto.setBody(question.getBody());
        questionResponseDto.setView(question.getView());

        questionResponseDto.setCreatedAt(question.getCreatedAt());
        questionResponseDto.setUpdatedAt(question.getUpdatedAt());

        return questionResponseDto;
    }
    List<QuestionResponseDto> questionsToQuestionResponseDtos(List <Question> questions);

    default QuestionResponseDto questionToQuestionAndAnswerResponseDto(UserMapper userMapper, Question question, Integer answerPage,
                                                                   Integer answerSize, String answerSort) {
        QuestionResponseDto questionAndAnswerResponseDto = new QuestionResponseDto();
        questionAndAnswerResponseDto.setQuestionId(question.getQuestionId());
        questionAndAnswerResponseDto.setQuestionStatus(question.getQuestionStatus());
        questionAndAnswerResponseDto.setTitle(question.getTitle());
        questionAndAnswerResponseDto.setBody(question.getBody());
        questionAndAnswerResponseDto.setView(question.getView());

        questionAndAnswerResponseDto.setCreatedAt(question.getCreatedAt());
        questionAndAnswerResponseDto.setUpdatedAt(question.getUpdatedAt());

        return questionAndAnswerResponseDto;

    }
}
