package com.codestates.stackOverflow.user.service;

import com.codestates.stackOverflow.exception.BusinessLogicException;
import com.codestates.stackOverflow.exception.ExceptionCode;
import com.codestates.stackOverflow.user.entity.User;
import com.codestates.stackOverflow.user.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
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
}
