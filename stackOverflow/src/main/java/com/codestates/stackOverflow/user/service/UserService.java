package com.codestates.stackOverflow.user.service;

import com.codestates.stackOverflow.auth.dto.UserLoginResponseDto;
import com.codestates.stackOverflow.auth.dto.UserSignupRequestDto;
import com.codestates.stackOverflow.exception.BusinessLogicException;
import com.codestates.stackOverflow.exception.CEmailSignupFailedException;
import com.codestates.stackOverflow.exception.CEmailLoginFailedException;
import com.codestates.stackOverflow.exception.ExceptionCode;
import com.codestates.stackOverflow.user.entity.User;
import com.codestates.stackOverflow.user.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Slf4j
@Transactional
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public User createUser(User User) {
        verifyExistsEmail(User.getUserEmail());
        String encryptedPassword = passwordEncoder.encode(User.getUserPassword());
        User.setUserPassword(encryptedPassword);

        User savedUser = userRepository.save(User);

        return savedUser;
    }

    public User findUser(String userEmail){
        return findVerifiedUser(userEmail);
    }

    private User findVerifiedUser(String userEmail) {
        Optional<User> optionalUser =
                userRepository.findByUserEmail(userEmail);
        User findUser = optionalUser.orElseThrow(() -> new BusinessLogicException(ExceptionCode.user_NOT_FOUND));
        return findUser;
    }

    private void verifyExistsEmail(String userEmail) {
        Optional<User> user = userRepository.findByUserEmail(userEmail);
        if (user.isPresent())
            throw new BusinessLogicException(ExceptionCode.user_EXISTS);
    }

    @Transactional(readOnly = true)
    public UserLoginResponseDto login(String userEmail, String userPassword) {
        User user = userRepository.findByUserEmail(userEmail).orElseThrow(CEmailLoginFailedException::new);
        if(!passwordEncoder.matches(userPassword, user.getPassword()))
            throw new CEmailLoginFailedException();
        return new UserLoginResponseDto(user);
    }

    @Transactional
    public Long signup(UserSignupRequestDto userSignupRequestDto){
        if(userRepository.findByUserEmail(userSignupRequestDto.getEmail()).orElse(null) == null)
            return userRepository.save(userSignupRequestDto.toEntity()).getUserId();
        else throw new CEmailSignupFailedException();
    }


}
