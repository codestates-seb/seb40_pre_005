


package com.codestates.stackOverflow.answer.mapper;

import com.codestates.stackOverflow.answer.dto.AnswerPatchDto;
import com.codestates.stackOverflow.answer.dto.AnswerPostDto;
import com.codestates.stackOverflow.answer.dto.AnswerResponseDto;
import com.codestates.stackOverflow.answer.entity.Answer;
import com.codestates.stackOverflow.answer.service.AnswerService;
import com.codestates.stackOverflow.exception.BusinessLogicException;
import com.codestates.stackOverflow.exception.ExceptionCode;
import com.codestates.stackOverflow.question.service.QuestionService;
import com.codestates.stackOverflow.user.dto.UserResponseDto;
import com.codestates.stackOverflow.user.entity.User;
import com.codestates.stackOverflow.user.mapper.UserMapper;
import com.codestates.stackOverflow.user.service.UserService;
import org.mapstruct.Mapper;

import java.util.List;
import java.util.stream.Collectors;


/**
 * Mybatis 매핑 XML에 기재된 SQL을 호출하기 위한 인터페이스이다
 *
 * [ Mapper인터페이스를 사용하는 방법 ]
 * Mapper인터페이스는 개발자가 직접 작성한다.
 * mapper 네임스페이스는 패키지명을 포함한 인터페이스 명으로 작성한다.
 * SQL id는 인터페이스에 정의된 메서드명과 동일하게 작성한다
 */



@Mapper(componentModel = "Spring")
public interface AnswerMapper {

/**
     *  유저 정보와 질문 정보를 받아 와야 함
     */

    default Answer answerPostDtoToAnswer(QuestionService questionService, UserService userService, AnswerPostDto answerPostDto){
        Answer answer = new Answer();
        answer.setBody(answerPostDto.getBody());
        answer.setUser(userService.findUser(answerPostDto.getUserId()));
        answer.setQuestion(questionService.findVerifiedQuestion(answerPostDto.getQuestionId()));
        // 현재 로그인한 토큰으로 유저정보 불러옴
       // answer.setUser(userService.getLoginUser());

        return answer;
    }
    default Answer answerPatchDtoToAnswer(AnswerService answerService, UserService userService, AnswerPatchDto answerPatchDto) {
       /**
        if (userService.getLoginUser().getUserId() != answerService.findAnswerUser(answerPatchDto.getAnswerId()).getUserId()) {
            //해당 유저가 쓴 답 글 아니므로 수정 삭제 불가
            throw new BusinessLogicException(ExceptionCode.ACCESS_DENIED_USER);
        }
        */
        Answer answer = new Answer();
        answer.setAnswerId(answerPatchDto.getAnswerId());
        answer.setBody(answerPatchDto.getBody());

        return answer;
    }

    default AnswerResponseDto answerToAnswerResponseDto( UserMapper userMapper, Answer answer){
        AnswerResponseDto answerResponseDto = new AnswerResponseDto();
        User user =new User();

        answerResponseDto.setAnswerId(answer.getAnswerId());
        answerResponseDto.setName(answer.getUser().getName());
        answerResponseDto.setAnswerStatus(answer.getAnswerStatus());
        answerResponseDto.setBody(answer.getBody());
        answerResponseDto.setCreatedAt(answer.getCreatedAt());


        return answerResponseDto;



/**
         * return new AnswerResponseDto(answer.getAnswerId(),
         *      answer.getStatus(),
         *      answer.getBody(),
         *      answer.getCreateAt(),
         *      answer.UpdatedAt());
         */


    }
    default List<AnswerResponseDto> answersToAnswerResponseDtos(UserMapper userMapper,List<Answer> answers){

        List<AnswerResponseDto> answerResponseDtos =answers.stream().map(answer -> answerToAnswerResponseDto(userMapper,answer)).collect(Collectors.toList());


       return answerResponseDtos;
    };
    List<AnswerResponseDto> answersToAnswersResponseDtos(List<Answer> answers);
}


  // List<AnswerResponseDto> answersToAnswerResponseDtos(List<Answer> answers);



