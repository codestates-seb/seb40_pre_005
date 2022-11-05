package com.codestates.stackOverflow.user.controller;

import com.codestates.stackOverflow.user.entity.User;
import com.codestates.stackOverflow.user.mapper.UserMapper;
import com.codestates.stackOverflow.user.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", allowedHeaders = "*")
//@Controller
@RequestMapping("/v1")
@Validated
//@Api(tags = {"User"})
@Slf4j
public class UserController {

    private final UserService userService;
    private final UserMapper mapper;

    public UserController(UserService userService, UserMapper mapper) {
        this.userService = userService;
        this.mapper = mapper;
    }

    @ApiImplicitParams({
            @ApiImplicitParam(
                    name = "Bearer",
                    value = "로그인 성공 후 AccessToken",
                    required = true, dataType = "String", paramType = "header")
    })
    @ApiOperation(value = "회원 검색")
    @GetMapping("{userEmail}")
    public ResponseEntity<User> findUserByEmail(@PathVariable String userEmail){
        User user = userService.findUser(userEmail);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }
}
