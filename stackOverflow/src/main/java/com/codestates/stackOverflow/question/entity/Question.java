package com.codestates.stackOverflow.question.entity;

import com.codestates.stackOverflow.answer.entity.Answer;
import com.codestates.stackOverflow.audit.Auditable;
import com.codestates.stackOverflow.question.dto.PatchEditor;
import com.codestates.stackOverflow.user.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "QUESTION")
public class Question extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long questionId;

    @Enumerated(EnumType.STRING)
    @Column(nullable = true, name = "STATUS")
    private QuestionStatus questionStatus = QuestionStatus.QUESTION_EXIST;

    //질문 제목
    @Column(nullable = false, columnDefinition = "TEXT")
    private String title;

    //질문 내용
    @Column(nullable = false, columnDefinition = "TEXT")
    private String body;

    // 조회수
    @Column(nullable = true)
    private int view;

    @ManyToOne
    @JoinColumn(name = "USER_ID")
    private User user;

    @OneToMany(mappedBy = "question")
    private List<Answer> answers = new ArrayList<>();

    public Question(long questionId, String title, String body, int view) {
        this.questionId = questionId;
        this.title = title;
        this.body = body;
        this.view = view;
    }
    //test
    public PatchEditor.PatchEditorBuilder toEditor() {
        return PatchEditor.builder()
                .title(title)
                .body(body);

    }
    //test
    public void edit(PatchEditor patchEditor) {
        title = patchEditor.getTitle();
        body = patchEditor.getBody();
    }

    public enum QuestionStatus {
        QUESTION_NOT_EXIST("존재하지 않는 질문"),
        QUESTION_EXIST("존재하는 질문");

        @Getter
        private String status;

        QuestionStatus(String status) {
            this.status = status;
        }
    }
}
