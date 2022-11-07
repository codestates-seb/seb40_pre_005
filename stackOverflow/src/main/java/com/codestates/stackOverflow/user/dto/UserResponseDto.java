package com.codestates.stackOverflow.user.dto;

import com.codestates.stackOverflow.user.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import java.time.LocalDateTime;
import java.util.Collection;
import java.util.List;

@Getter
public class UserResponseDto {
    private final Long userId;
    private final String userEmail;
    private final String name;
    private List<String> roles;
    private Collection<? extends GrantedAuthority> authorities;
    private final LocalDateTime modifiedDate;
    public UserResponseDto(User user){
        this.userId = user.getUserId();
        this.userEmail = user.getUserEmail();
        this.name = user.getName();
        this.roles = user.getRoles();
        this.authorities = user.getAuthorities();
        this.modifiedDate = user.getUpdatedAt();
    }

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
