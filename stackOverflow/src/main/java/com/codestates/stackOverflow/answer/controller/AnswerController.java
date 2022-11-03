

package com.codestates.stackOverflow.answer.controller;
import com.codestates.stackOverflow.question.entity.Question;
import com.codestates.stackOverflow.answer.dto.AnswerPatchDto;
import com.codestates.stackOverflow.answer.dto.AnswerPostDto;
import com.codestates.stackOverflow.answer.dto.AnswerResponseDto;
import com.codestates.stackOverflow.answer.entity.Answer;
import com.codestates.stackOverflow.answer.mapper.AnswerMapper;
import com.codestates.stackOverflow.answer.service.AnswerService;
import com.codestates.stackOverflow.question.entity.Question;
import com.codestates.stackOverflow.question.mapper.QuestionMapper;
import com.codestates.stackOverflow.question.service.QuestionService;
import com.codestates.stackOverflow.response.MultiResponseDto;
import com.codestates.stackOverflow.user.mapper.UserMapper;
import com.codestates.stackOverflow.user.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import java.util.List;
import java.util.stream.Collectors;

@Api(tags = {"Answer API"})
@RestController
@Validated
@Slf4j
@AllArgsConstructor
@RequestMapping("/v1")
public class AnswerController {

    private AnswerService answerService;
    private AnswerMapper mapper;
    private UserService userService;
    private UserMapper userMapper;
    private QuestionService questionService;

    private final QuestionMapper questionMapper;
/**
     * answer 등록 API
     */

// answer Id 추가
// localhost8080/v1/answer
    @ApiOperation(value = "Answer 등록", response = Answer.class)
    @PostMapping("/answer")
    public ResponseEntity postAnswer(@Valid @RequestBody AnswerPostDto answerPostDto) {
        Answer question = answerService.createAnswer(
                mapper.answerPostDtoToAnswer(questionService, userService,answerPostDto));

        return new ResponseEntity<>(
                /** new SingleResponseDto<>/
                 *
                 */
                (mapper.answerToAnswerResponseDto(userMapper,question)), HttpStatus.CREATED);
    }


/**
     *  answer 수정
     */

    @ApiOperation(value = "Answer 수정", response = Answer.class)
    @PatchMapping("/answer/{answer-id}")
    public ResponseEntity patchAnswer(@PathVariable("answer-id") @Positive @NotNull long answerId,
                                          @Valid @RequestBody AnswerPatchDto answerPatchDto){
        /**
        answerPatchDto.setAnswerId(answerId);

        Answer response = answerService.updateAnswer(mapper.answerPatchDtoToAnswer(answerPatchDto));
        return new ResponseEntity<>(mapper.answerToAnswerResponseDto(response), HttpStatus.OK);
*/

        answerPatchDto.setAnswerId(answerId);
        Answer answer = mapper.answerPatchDtoToAnswer(answerService,userService,answerPatchDto);
        Answer updatedAnswer = answerService.updateAnswer(answer);

        return new ResponseEntity<>(
                /**
                new SingleResponseDto<>
                 */(mapper.answerToAnswerResponseDto(userMapper,updatedAnswer)),
                HttpStatus.OK);
    }

    /**
     * answer 조회 API
     */


    /**

    @ApiOperation(value = "Answer 조회", response = Answer.class)
    @GetMapping(value= "/answer")
    public ResponseEntity getAnswers() {
        List<Answer> answers = answerService.findsAnswers();

        List<AnswerResponseDto> response =
                answers.stream()
                        .map(answer -> mapper.answersToAnswerResponseDtos(userMapper,answers)
                                .collect(Collectors.toList());
        return new ResponseEntity<>(response, HttpStatus.OK);
*/
    @ApiOperation(value = "Answer 조회", response = Answer.class)
    @GetMapping(value= "/answer")
    public ResponseEntity getAnswers( Question question,
                                      @Positive @RequestParam("page") int page,
                                      @Positive @RequestParam("size") int size,
                                      @Positive @RequestParam("answerSort") String answerSort){
            Page<Answer> pageAnswers = answerService.findAnswers(question,page-1,size, answerSort);

            List<Answer> answers = pageAnswers.getContent();

            return new ResponseEntity<>(new MultiResponseDto<>(
                    answerMapper.answersToAnswerResponseDtos(userMapper, answers),
                    pageAnswers),HttpStatus.OK);


        /**
        return new ResponseEntity<>(
                mapper.answersToAnswerResponseDtos(),HttpStatus.OK);

*/

        /**
       List<Answer> answer = answerService.findAnswers(List<Answer> answers);
        List<AnswerResponseDto> response =
                answer.stream()
                        .map(answers -> mapper.answersToAnswerResponseDtos(answer)
                        .collect(Collectors.toList());
        return new ResponseEntity<>(response, HttpStatus.OK);

         */
    }


    /**
     * answer 삭제 API
     */
    @ApiOperation(value = "Answer 삭제", response = Answer.class)
    @DeleteMapping(value= "/answer/{answer-id}")
    public ResponseEntity deleteAnswer(@PathVariable("answer-id") @Positive @NotNull long answerId,
                                       @Valid @RequestBody AnswerPatchDto answerPatchDto){
        /**
         answerPatchDto.setAnswerId(answerId);

         Answer response = answerService.updateAnswer(mapper.answerPatchDtoToAnswer(answerPatchDto));
         return new ResponseEntity<>(mapper.answerToAnswerResponseDto(response), HttpStatus.OK);
         */

        answerPatchDto.setAnswerId(answerId);
        Answer answer = mapper.answerPatchDtoToAnswer(answerService,userService,answerPatchDto);
        Answer updatedAnswer = answerService.updateAnswer(answer);

        return new ResponseEntity<>(
                /**
                 new SingleResponseDto<>
                 */(mapper.answerToAnswerResponseDto(userMapper,updatedAnswer)),
                HttpStatus.OK);
    }


}



