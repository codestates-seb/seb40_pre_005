package com.codestates.stackOverflow.auth.dto;

import com.codestates.stackOverflow.user.entity.User;
import lombok.*;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import java.util.Collections;

@Getter
@NoArgsConstructor
public class UserSignupRequestDto {
    @NotNull
    @Email
    private String userEmail;

    @NotNull
    private String name;

    @NotNull
    @Pattern(regexp = "(?=.*[0-9])(?=.*[a-zA-Z])(?=.*\\W)(?=\\S+$).{8,16}", message = "비밀번호는 8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.")
    private String userPassword;
    @Builder
    public UserSignupRequestDto(String userEmail, String userPassword, String name){
        this.userEmail = userEmail;
        this.userPassword = userPassword;
        this.name = name;
    }
    public User toEntity(PasswordEncoder passwordEncoder) {
        return User.builder()
                .userEmail(userEmail)
                .userPassword(passwordEncoder.encode(userPassword))
                .name(name)
                .roles(Collections.singletonList("ROLE_USER"))
                .build();
    }
    public User toEntity(){
        return User.builder()
                .userEmail(userEmail)
                .userPassword(userPassword)
                .name(name)
                .roles(Collections.singletonList("ROLE_USER"))
                .build();
    }
}
