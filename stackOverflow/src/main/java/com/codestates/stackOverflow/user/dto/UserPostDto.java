package com.codestates.stackOverflow.user.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserPostDto {

    @NotNull
    @Email
    private String userEmail;

    @NotNull
    private String userPassword;
}
