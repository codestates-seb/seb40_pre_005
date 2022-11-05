package com.codestates.stackOverflow.auth.dto;

import com.codestates.stackOverflow.user.entity.User;

public class UserSignupDto {
    private String userEmail;
    private String name;

    public User toEntity() {
        return User.builder()
                .userEmail(userEmail)
                .name(name)
                .build();
    }
}
