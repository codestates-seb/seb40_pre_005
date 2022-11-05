package com.codestates.stackOverflow.auth.service;

import com.codestates.stackOverflow.auth.dto.TokenDto;
import com.codestates.stackOverflow.auth.dto.TokenRequestDto;
import com.codestates.stackOverflow.auth.dto.UserLoginRequestDto;
import com.codestates.stackOverflow.auth.dto.UserSignupRequestDto;
import com.codestates.stackOverflow.auth.entity.RefreshToken;
import com.codestates.stackOverflow.auth.repository.RefreshTokenRepository;
import com.codestates.stackOverflow.config.JwtProvider;
import com.codestates.stackOverflow.exception.BusinessLogicException;
import com.codestates.stackOverflow.exception.ExceptionCode;
import com.codestates.stackOverflow.user.entity.User;
import com.codestates.stackOverflow.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseCookie;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.HttpServletRequest;

@Service
@RequiredArgsConstructor
public class SecurityService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtProvider jwtProvider;
    private final RefreshTokenRepository refreshTokenRepository;


    @Transactional
    public Long signup(UserSignupRequestDto userSignupRequestDto) {
        if(userRepository.findByUserEmail(userSignupRequestDto.getUserEmail()).isPresent())
            throw new BusinessLogicException(ExceptionCode.USER_EXISTS);
        return userRepository.save(userSignupRequestDto.toEntity(passwordEncoder)).getUserId();
    }

    @Transactional
    public TokenDto login(UserLoginRequestDto userLoginRequestDto) {
        User user = userRepository.findByUserEmail(userLoginRequestDto.getUserEmail())
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.LOGIN_FAILED));

        if(!passwordEncoder.matches(userLoginRequestDto.getUserPassword(), user.getPassword()))
            throw new BusinessLogicException(ExceptionCode.LOGIN_FAILED);

        TokenDto tokenDto = jwtProvider.createToken(user.getUserId(), user.getRoles());

        RefreshToken refreshToken = RefreshToken.builder()
                .userId(user.getUserId())
                .token(tokenDto.getRefreshToken())
                .build();

        refreshTokenRepository.save(refreshToken);
        return tokenDto;
    }

    @Transactional
    public void logout(HttpServletRequest request) {
        //(!jwtProvider.validationToken(r)
        SecurityContextHolder.clearContext();
        String accessToken = jwtProvider.resolveToken(request);
    }


    @Transactional
    public TokenDto reissue(TokenRequestDto tokenRequestDto) {
        if(!jwtProvider.validationToken(tokenRequestDto.getRefreshToken())){
            throw new BusinessLogicException(ExceptionCode.REFRESH_TOKEN_INVALID);
        }

        String accessToken = tokenRequestDto.getAccessToken();
        Authentication authentication = jwtProvider.getAuthentication(accessToken);

        User user = userRepository.findByUserEmail(authentication.getName())
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));
        RefreshToken refreshToken = refreshTokenRepository.findByUserId(user.getUserId())
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.REFRESH_TOKEN_INVALID));

        if(!refreshToken.getToken().equals(tokenRequestDto.getRefreshToken()))
            throw new BusinessLogicException(ExceptionCode.REFRESH_TOKEN_INVALID);

        TokenDto newCreatedToken = jwtProvider.createToken(user.getUserId(), user.getRoles());
        RefreshToken updaterefreshToken = refreshToken.updateToken(newCreatedToken.getRefreshToken());
        refreshTokenRepository.save(updaterefreshToken);

        return newCreatedToken;
    }
}
