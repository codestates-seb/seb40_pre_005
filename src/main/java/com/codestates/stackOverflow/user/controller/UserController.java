package com.codestates.stackOverflow.user.controller;

import com.codestates.stackOverflow.user.dto.UserDto;
import com.codestates.stackOverflow.user.entity.User;
import com.codestates.stackOverflow.user.mapper.UserMapper;
import com.codestates.stackOverflow.user.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import javax.validation.Valid;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@Controller
@RequestMapping("/v1")
@Validated
@Api(tags = {"회원가입 API"})
@Slf4j
public class UserController {

    private final UserService userService;
    private final UserMapper mapper;

    public UserController(UserService userService, UserMapper mapper) {
        this.userService = userService;
        this.mapper = mapper;
    }

    /* 회원 가입 API */
    @PostMapping("/sign-up")
    @ApiOperation(value = "회원가입", response = User.class)
    public ResponseEntity postUser(@Valid @RequestBody UserDto.Post requestBody){
        User user = mapper.userPostToUser(requestBody);
        userService.createUser(user);

        return new ResponseEntity(user, HttpStatus.CREATED);
    }
}
