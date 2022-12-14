package com.codestates.stackOverflow.question.mapper;

import com.codestates.stackOverflow.answer.entity.Answer;
import com.codestates.stackOverflow.answer.mapper.AnswerMapper;
import com.codestates.stackOverflow.answer.service.AnswerService;
import com.codestates.stackOverflow.exception.BusinessLogicException;
import com.codestates.stackOverflow.exception.ExceptionCode;
import com.codestates.stackOverflow.question.dto.QuestionAndAnswerResponseDto;
import com.codestates.stackOverflow.question.dto.QuestionPatchDto;
import com.codestates.stackOverflow.question.dto.QuestionPostDto;
import com.codestates.stackOverflow.question.dto.QuestionResponseDto;
import com.codestates.stackOverflow.question.entity.Question;
import com.codestates.stackOverflow.question.service.QuestionService;
import com.codestates.stackOverflow.response.MultiResponseDto;
import com.codestates.stackOverflow.user.mapper.UserMapper;
import com.codestates.stackOverflow.user.service.UserService;
import org.mapstruct.Mapper;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Mapper(componentModel = "spring")
public interface QuestionMapper {
    default Question questionPostDtoToQuestion(UserService userService, QuestionPostDto questionPostDto){
        Question question = new Question();

        question.setView(0);
        question.setUser(userService.findUser(questionPostDto.getUserId()));
        question.setBody(questionPostDto.getBody());
        question.setTitle(questionPostDto.getTitle());

        return question;
    }
    default Question questionPatchDtoToQuestion(QuestionService questionService, UserService userService ,QuestionPatchDto questionPatchDto){
//        낼 31~33부분 준열님께 설명드리고 상의하기 기능 : 해당 유저가 쓴 질문글만 수정할수 있도록!
//        if(userService.getLoginUser().getUserId()!= questionService.findQuestionUser(questionPatchDto.getQuestionId()).getUserId()){
//            throw new BusinessLogicException(ExceptionCode.ACCESS_DENIED_USER);
//        }
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
        questionResponseDto.setName(question.getUser().getName());
        questionResponseDto.setUserId(question.getUser().getUserId());
        questionResponseDto.setCreatedAt(question.getCreatedAt());
        questionResponseDto.setUpdatedAt(question.getUpdatedAt());

        return questionResponseDto;
    }
    default List<QuestionResponseDto> questionsToQuestionResponseDtos(List <Question> questions){
        if ( questions == null ) {
            return null;
        }

        List<QuestionResponseDto> list = new ArrayList<QuestionResponseDto>( questions.size() );
        for ( Question question : questions ) {
            QuestionResponseDto questionResponseDto = new QuestionResponseDto();

            questionResponseDto.setQuestionId( question.getQuestionId() );
            questionResponseDto.setQuestionStatus( question.getQuestionStatus() );
            questionResponseDto.setTitle( question.getTitle() );
            questionResponseDto.setBody( question.getBody() );
            questionResponseDto.setView( question.getView() );
            questionResponseDto.setUserId(question.getUser().getUserId());
            questionResponseDto.setName(question.getUser().getName());
            questionResponseDto.setAnswerCnt(question.getAnswers().size());
            questionResponseDto.setCreatedAt( question.getCreatedAt() );
            questionResponseDto.setUpdatedAt( question.getUpdatedAt() );

            list.add( questionResponseDto );
        }

        return list;
    };

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
    default QuestionAndAnswerResponseDto questionToQuestionAndAnswerResponseDtos(AnswerService answerService, AnswerMapper answerMapper,
                                                                                Question question, Integer answerPage, Integer answerSize){

        QuestionAndAnswerResponseDto questionAndAnswerResponseDto = new QuestionAndAnswerResponseDto();
        questionAndAnswerResponseDto.setQuestionId(question.getQuestionId());
        questionAndAnswerResponseDto.setQuestionStatus(question.getQuestionStatus());
        questionAndAnswerResponseDto.setTitle(question.getTitle());
        questionAndAnswerResponseDto.setBody(question.getBody());
        questionAndAnswerResponseDto.setView(question.getView());
        questionAndAnswerResponseDto.setUserId(question.getUser().getUserId());
        questionAndAnswerResponseDto.setName(question.getUser().getName());
        questionAndAnswerResponseDto.setCreatedAt(question.getCreatedAt());
        questionAndAnswerResponseDto.setUpdatedAt(question.getUpdatedAt());

        try{
            Page<Answer> pageAnswers = answerService.findAnswers(
                    question,answerPage,answerSize); // 해당 question에 해당하는 answer의 sort 와 pagenation 결과를 가져온다.
            List<Answer> answers = pageAnswers.getContent();
//        questionAndAnswerResponseDto.setAnswers(new MultiResponseDto<>(
//                answerMapper.answersToAnswerResponseDtos(userMapper,answers), pageAnswers));
            questionAndAnswerResponseDto.setAnswers(new MultiResponseDto<>(
                    answerMapper.answersToAnswersResponseDtos(answers), pageAnswers));
        }catch(BusinessLogicException e){

        }


        return questionAndAnswerResponseDto;
    }
}
