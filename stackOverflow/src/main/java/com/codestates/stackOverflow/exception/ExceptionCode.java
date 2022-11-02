package com.codestates.stackOverflow.exception;

import lombok.Getter;

public enum ExceptionCode {
    user_NOT_FOUND(404, "User not found"),
    user_EXISTS(409, "User exists"),
    NOT_IMPLEMENTATION(501, "Not Implementation"),
    INVALID_user_STATUS(400, "Invalid User status"),
    ANSWER_NOT_FOUND(404, "Answer not found"),

    //ANSWER_EXISTS(409, "Answer exists"),
    ACCESS_DENIED_USER(403,"Access Denied User"),
    QUESTION_NOT_FOUND(404, "Not Question");

    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int code, String message) {
        this.status = code;
        this.message = message;
    }
}
