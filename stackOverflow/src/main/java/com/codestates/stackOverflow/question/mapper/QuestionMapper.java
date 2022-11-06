package com.codestates.stackOverflow.question.mapper;

import com.codestates.stackOverflow.exception.BusinessLogicException;
import com.codestates.stackOverflow.exception.ExceptionCode;
import com.codestates.stackOverflow.question.dto.QuestionPatchDto;
import com.codestates.stackOverflow.question.dto.QuestionPostDto;
import com.codestates.stackOverflow.question.dto.QuestionResponseDto;
import com.codestates.stackOverflow.question.entity.Question;
import com.codestates.stackOverflow.question.service.QuestionService;
import com.codestates.stackOverflow.user.mapper.UserMapper;
import com.codestates.stackOverflow.user.service.UserService;
import org.mapstruct.Mapper;
import org.springframework.data.domain.Page;
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
//    default QuestionAndAnswerResponseDto questionToQuestionAndAnswerResponseDto(AnswerService answerService, AnswerMapper answerMapper,
//                                                                                UserMapper userMapper, Question question, Integer answerPage, Integer answerSize,
//                                                                                String answerSort){
//
//        QuestionAndAnswerResponseDto questionAndAnswerResponseDto = new QuestionAndAnswerResponseDto();
//        questionAndAnswerResponseDto.setQuestionId(question.getQuestionId());
//        questionAndAnswerResponseDto.setQuestionStatus(question.getQuestionStatus());
//        questionAndAnswerResponseDto.setTitle(question.getTitle());
//        questionAndAnswerResponseDto.setBody(question.getBody());
//        questionAndAnswerResponseDto.setVote(question.getVote());
//        questionAndAnswerResponseDto.setView(question.getView());
//
//        User user = question.getUser(); //질문 작성자 속성 추가
//        questionAndAnswerResponseDto.setUser(userMapper.userToUserResponseDto(user));//질문 작성자 속성 추가
//
//        questionAndAnswerResponseDto.setQuestionTags(questionTagsToQuestionTagResponseDtos( //질문에 대한 태그 속성 추가
//                question.getQuestionTags()
//        ));
//
//        questionAndAnswerResponseDto.setCreatedAt(question.getCreatedAt());
//        questionAndAnswerResponseDto.setUpdatedAt(question.getUpdatedAt());
//
//        try{
//            Page<Answer> pageAnswers = answerService.findAnswers(
//                    question,answerPage,answerSize,answerSort); // 해당 question에 해당하는 answer의 sort 와 pagenation 결과를 가져온다.
//            List<Answer> answers = pageAnswers.getContent();
////        questionAndAnswerResponseDto.setAnswers(new MultiResponseDto<>(
////                answerMapper.answersToAnswerResponseDtos(userMapper,answers), pageAnswers));
//            questionAndAnswerResponseDto.setAnswers(new MultiResponseDto<>(
//                    answerMapper.answersToAnswerResponseDtos(answers), pageAnswers));
//        }catch(BusinessLogicException e){
//
//        }
//
//
//        return questionAndAnswerResponseDto;
//
//
//    }
}
