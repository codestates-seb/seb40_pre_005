package com.codestates.stackOverflow.auth;

import com.codestates.stackOverflow.user.dto.UserPostDto;
import com.codestates.stackOverflow.user.entity.User;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@Controller
@RequestMapping("/v1")
@Validated
@Api(tags = {"로그인 API"})
@Slf4j
public class AuthController {

    private final LoginService loginService;
    private final SessionManager sessionManager;

    public AuthController(LoginService loginService, SessionManager sessionManager) {
        this.loginService = loginService;
        this.sessionManager = sessionManager;
    }


    @PostMapping("/login")
    @ApiOperation(value = "로그인", response = User.class)
    public ResponseEntity loginPost(@Valid @RequestBody UserPostDto requestBody, HttpServletRequest request, RedirectAttributes redirectAttributes){
        HttpSession session = request.getSession();

        User login = loginService.userLogin(requestBody);
        return null;
    }

    @PostMapping("/logout")
    @ApiOperation(value = "로그아웃", response = User.class)
    public ResponseEntity logoutPost(HttpServletRequest request){
        sessionManager.expire(request);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
