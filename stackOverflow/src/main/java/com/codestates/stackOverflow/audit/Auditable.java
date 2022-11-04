package com.codestates.stackOverflow.audit;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.Column;
import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;
import java.time.LocalDateTime;

@Getter
@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
public abstract class Auditable {
    @CreatedDate
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

//    @LastModifiedDate
//    @Column(name = "LAST_MODIFIED_AT")
//    private LocalDateTime modifiedAt;
//    데이터가 수정되면 자동으로 날짜가 업데이트 되는데 특정 질문으로 이동하면 조회수가 자동으로 올라가서 날짜까지 수정된다
//    위의 현상을 방지하기 위해 @LastModifiedDate 주석처리하고 준열님, 현아님께 설명

    @Getter
    @Setter
    @Column(name = "updated_at")
    protected LocalDateTime updatedAt = LocalDateTime.now();
}
