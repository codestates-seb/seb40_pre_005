package com.codestates.stackOverflow.exception;

import lombok.Getter;

public enum ExceptionCode {
    USER_NOT_FOUND(404, "User not found"),
    USER_EXISTS(409, "User exists"),
    NOT_IMPLEMENTATION(501, "Not Implementation"),
    INVALID_user_STATUS(400, "Invalid User status"),

    INVALID_USER_STATUS(400, "Invalid User status"),
    ANSWER_NOT_FOUND(404, "Answer not found"),

    //ANSWER_EXISTS(409, "Answer exists"),
    ACCESS_DENIED_USER(403,"Access Denied User"),
    QUESTION_NOT_FOUND(403, "Not Question"),
    LOGIN_FAILED(409, "Email or Password Error"),
    AUTHENTICATION_FAILED(401, "Authentication Failed"),
    REFRESH_TOKEN_INVALID(401, "refreshToken_InValid");

    //   QUESTION_NOT_FOUND(404, "Not Question"),
 //   ACCESS_DENIED_USER(403, "Access Denied User");

    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int code, String message) {
        this.status = code;
        this.message = message;
    }
}
