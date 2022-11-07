package com.codestates.stackOverflow.auth.entity;

import com.codestates.stackOverflow.audit.Auditable;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "refresh_token")
@Getter
@NoArgsConstructor
public class RefreshToken extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Long userId;

    @Column(nullable = false)
    private String token;

    public RefreshToken updateToken(String token){
        this.token =token;
        return this;
    }

    @Builder
    public RefreshToken(Long userId, String token){
        this.userId = userId;
        this.token = token;
    }
}
