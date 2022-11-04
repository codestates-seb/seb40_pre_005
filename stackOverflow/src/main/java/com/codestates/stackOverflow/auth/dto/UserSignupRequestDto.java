package com.codestates.stackOverflow.auth.dto;

import com.codestates.stackOverflow.user.entity.User;
import lombok.Builder;
import lombok.Getter;

import java.util.Collections;

@Getter
public class UserSignupRequestDto {
    private String email;
    private String password;
    private String name;

    @Builder
    public UserSignupRequestDto(String email, String password, String name){
        this.email = email;
        this.password = password;
        this.name = name;
    }

    public User toEntity(){
        return User.builder()
                .userEmail(email)
                .userPassword(password)
                .name(name)
                .roles(Collections.singletonList("ROLE_USER"))
                .build();
    }
}
