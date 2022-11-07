package com.codestates.stackOverflow.auth.service;

import com.codestates.stackOverflow.exception.BusinessLogicException;
import com.codestates.stackOverflow.exception.ExceptionCode;
import com.codestates.stackOverflow.user.repository.UserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class CustomUserDetailsService implements UserDetailsService {
    private final UserRepository userRepository;

    public CustomUserDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    @Override
    @Transactional(readOnly = true)
    public UserDetails loadUserByUsername(String userId) throws UsernameNotFoundException {
//        Optional<User> optionalUser = userRepository.findByUserEmail(username);
//        User findUser = optionalUser.orElseThrow(() -> new BusinessLogicException(ExceptionCode.user_NOT_FOUND));
//
//        Collection<? extends GrantedAuthority> authorities = authorityUtils.createAuthorities(findUser.getUserEmail());
//
//        return new org.springframework.security.core.userdetails.User(findUser.getUserEmail(), findUser.getUserPassword(), authorities);
//    }
        return userRepository.findByUserId(Long.parseLong(userId)).orElseThrow(() -> new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));
    }
}
