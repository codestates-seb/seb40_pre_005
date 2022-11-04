package com.codestates.stackOverflow.user.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

public class UserDto {

    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Post {
        @NotNull
        @Email
        private String userEmail;

        @NotNull
        private String name;

        @NotNull
        @Pattern(regexp = "(?=.*[0-9])(?=.*[a-zA-Z])(?=.*\\W)(?=\\S+$).{8,16}", message = "비밀번호는 8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.")
        private String userPassword;

    }

}
