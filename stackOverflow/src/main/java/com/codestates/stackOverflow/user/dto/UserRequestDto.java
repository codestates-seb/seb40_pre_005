package com.codestates.stackOverflow.user.dto;

import com.codestates.stackOverflow.user.entity.User;

public class UserRequestDto {
    private String userEmail;
    private String name;

    public User toEntity() {
        return User.builder()
                .userEmail(userEmail)
                .name(name)
                .build();
    }
}
