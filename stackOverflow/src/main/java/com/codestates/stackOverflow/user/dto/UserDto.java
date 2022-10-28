package com.codestates.stackOverflow.user.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

public class UserDto {

    @Getter
    @AllArgsConstructor
    public static class Post {
        @NotNull
        @Email
        private String userEmail;

        @NotNull
        private String name;

        @NotNull
        private String userPassword;

    }

}
