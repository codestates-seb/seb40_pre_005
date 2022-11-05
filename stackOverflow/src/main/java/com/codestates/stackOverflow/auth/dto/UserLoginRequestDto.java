package com.codestates.stackOverflow.auth.dto;

import com.codestates.stackOverflow.user.entity.User;
import lombok.*;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserLoginRequestDto {

    @NotNull
    @Email
    private String userEmail;

    @NotNull
    private String userPassword;

    public User toUser(PasswordEncoder passwordEncoder){
        return User.builder()
                .userEmail(userEmail)
                .userPassword(passwordEncoder.encode(userPassword))
                .build();
    }
}
