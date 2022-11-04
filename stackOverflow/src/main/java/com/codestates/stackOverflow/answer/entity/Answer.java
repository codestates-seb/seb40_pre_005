package com.codestates.stackOverflow.answer.entity;


import com.codestates.stackOverflow.question.entity.Question;
import com.codestates.stackOverflow.user.entity.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

/**
 *  데이터베이스에 쓰일 컬럼과 여러 엔티티 간의 연관관계 정의
 *  실제 데이터베이스의 테이블과 1:1로 매핑됨
 *  이 클래스의 필드는 각 테이블 내부의 컬럼(Column)을 의미
 */

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "ANSWERS")
public class Answer {

    /**
     * id 값을 null로 하면 DB가 알아서 AUTO_INCREMENT ( 1씩 증감 ) 해준다.
     */

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long answerId; // 답변 일련번호

    @Column(nullable = false, columnDefinition = "TEXT")
    private String body; // 답변 내용

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, name = "STATUS")
    private AnswerStatus answerStatus = AnswerStatus.ANSWER_EXIST;

    @Column(nullable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column(nullable = false, name = "UPDATED_AT")
    private LocalDateTime updatedAt = LocalDateTime.now();

    /**
     * @Enumerated(EnumType.STRING)
     * @Column(nullable = false, name = "STATUS")
     * private AnswerStatus answerStatus = AnswerStatus.ANSWER_EXIST; // 댓글 존재여부
     */
    @ManyToOne
    @JoinColumn(name = "USER_ID")
    private User user;

    @ManyToOne
    @JoinColumn(name = "QUESTION_ID")
    private Question question;

    public enum AnswerStatus {
        ANSWER_NOT_EXIST("존재하지 않는 답변"),
        ANSWER_EXIST("존재하는 답변");

        @Getter
        private String status;

        AnswerStatus(String status) {
            this.status = status;
        }
    }
}
