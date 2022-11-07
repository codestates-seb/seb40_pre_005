package com.codestates.stackOverflow.auth.dto;

import com.codestates.stackOverflow.user.entity.User;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
public class UserLoginResponseDto {
    private final Long userId;
    private final List<String> roles;
    private final LocalDateTime createdAt;

    public UserLoginResponseDto(User user){
        this.userId = user.getUserId();
        this.roles = user.getRoles();
        this.createdAt = user.getCreatedAt();
    }
}
