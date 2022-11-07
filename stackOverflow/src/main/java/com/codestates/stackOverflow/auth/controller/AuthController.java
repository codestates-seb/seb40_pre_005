package com.codestates.stackOverflow.auth.controller;

import com.codestates.stackOverflow.auth.dto.*;
import com.codestates.stackOverflow.auth.service.SecurityService;
import com.codestates.stackOverflow.user.entity.User;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@Controller
@RequestMapping("/v1")
@Validated
@Api(tags = {"회원가입 및 로그인 API"})
@Slf4j
public class AuthController {

    private final SecurityService securityService;

    public AuthController(SecurityService securityService) {
        this.securityService = securityService;
    }

    @PostMapping("/login")
    @ApiOperation(value = "로그인", response = User.class)
    public ResponseEntity loginPost(@Valid @RequestBody UserLoginRequestDto userLoginRequestDto){
        TokenDto tokenDto = securityService.login(userLoginRequestDto);

        HttpHeaders headers = new HttpHeaders();

        ResponseCookie cookie = ResponseCookie.from("refreshToken", tokenDto.getRefreshToken())
                .maxAge(7*24*60*60)
                .path("/")
                .secure(true)
                .sameSite("None")
                .httpOnly(true)
                .build();

        headers.add("Set-cookie", cookie.toString());
        headers.add("Authorization", tokenDto.getAccessToken());

        return new ResponseEntity(tokenDto,HttpStatus.OK);
    }

    @ApiOperation(value = "회원가입", notes = "회원가입을 합니다.")
    @PostMapping("/signup")
    public ResponseEntity signup(
            @RequestBody UserSignupRequestDto userSignupRequestDto) {
        Long signupId = securityService.signup(userSignupRequestDto);
        return new ResponseEntity(signupId, HttpStatus.CREATED);
    }

//    @ApiOperation(value = "로그아웃", notes = "로그아웃")
//    @GetMapping("/logout")
//    public ResponseEntity logout(HttpServletRequest request){
//        return null;
//        //return securityService.logout(request);
//    }
    @ApiOperation(
            value = "액세스, 리프레시 토큰 재발급",
            notes = "엑세스 토큰 만료시 회원 검증 후 리프레쉬 토큰을 검증해서 액세스 토큰과 리프레시 토큰을 재발급합니다.")
    @PostMapping("/reissue")
    public ResponseEntity reissue(
            @RequestBody TokenRequestDto tokenRequestDto) {
        return new ResponseEntity(securityService.reissue(tokenRequestDto), HttpStatus.OK);
    }


}
