package com.codestates.stackOverflow.auth;

import com.codestates.stackOverflow.config.JwtProvider;
import com.codestates.stackOverflow.model.SingleResult;
import com.codestates.stackOverflow.user.dto.UserDto;
import com.codestates.stackOverflow.user.dto.UserPostDto;
import com.codestates.stackOverflow.user.entity.User;
import com.codestates.stackOverflow.user.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
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
@Api(tags = {"회원가입 및 로그인 API"})
@Slf4j
public class AuthController {

    private final UserService userService;
    private final JwtProvider jwtProvider;

    private final ResponseService responseService;
    private final PasswordEncoder passwordEncoder;

    public AuthController(UserService userService, JwtProvider jwtProvider, ResponseService responseService, PasswordEncoder passwordEncoder) {
        this.userService = userService;
        this.jwtProvider = jwtProvider;
        this.responseService = responseService;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping("/login")
    @ApiOperation(value = "로그인", response = User.class)
    public SingleResult<String> loginPost(@Valid @RequestBody UserPostDto requestBody){
        UserLoginResponseDto userLoginDto = userService.login(requestBody.getUserEmail(),requestBody.getUserPassword());

        String token = jwtProvider.createToken(String.valueOf(userLoginDto.getUserId(), userLoginDto.getRoles()));
        return responseService.getSingleResult(token);

        //HttpSession session = request.getSession();

//        User login = loginService.userLogin(requestBody);
//        return null;
    }

    @PostMapping("/signup")
    public SingleResult<Long> signup(@Valid @RequestBody UserDto.Post rquestBody){
        UserSignupRequestDto userSignupRequestDto = UserSignupRequestDto.builder()
                .email(rquestBody.getUserEmail())
                .password(passwordEncoder.encode(rquestBody.getUserPassword()))
                .name(rquestBody.getName())
                .build;
        Long signupId = userService.signup(userSignupRequestDto);
        return responseService.getSingleResult(signupId);
    }

//    @PostMapping("/logout")
//    @ApiOperation(value = "로그아웃", response = User.class)
//    public ResponseEntity logoutPost(HttpServletRequest request){
//        //sessionManager.expire(request);
//        return new ResponseEntity(HttpStatus.NO_CONTENT);
//    }
}
