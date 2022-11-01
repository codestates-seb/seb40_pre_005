package com.codestates.stackOverflow.exception;

import lombok.Getter;

public enum ExceptionCode {
    user_NOT_FOUND(404, "User not found"),
    user_EXISTS(409, "User exists"),
    QUESTION_NOT_FOUND(404, "Question not found"), // Question 추가

    NOT_IMPLEMENTATION(501, "Not Implementation"),
    INVALID_user_STATUS(400, "Invalid User status");


    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int code, String message) {
        this.status = code;
        this.message = message;
    }
}
