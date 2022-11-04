package com.codestates.stackOverflow.auth;

import com.codestates.stackOverflow.auth.utils.HelloAuthorityUtils;
import com.codestates.stackOverflow.exception.CUserNotFoundException;
import com.codestates.stackOverflow.user.repository.UserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.transaction.annotation.Transactional;

//@Component
public class CustomUserDetailsService implements UserDetailsService {
    private final UserRepository userRepository;
    private final HelloAuthorityUtils authorityUtils;

    public CustomUserDetailsService(UserRepository userRepository, HelloAuthorityUtils authorityUtils) {
        this.userRepository = userRepository;
        this.authorityUtils = authorityUtils;
    }


    @Override
    @Transactional(readOnly = true)
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//        Optional<User> optionalUser = userRepository.findByUserEmail(username);
//        User findUser = optionalUser.orElseThrow(() -> new BusinessLogicException(ExceptionCode.user_NOT_FOUND));
//
//        Collection<? extends GrantedAuthority> authorities = authorityUtils.createAuthorities(findUser.getUserEmail());
//
//        return new org.springframework.security.core.userdetails.User(findUser.getUserEmail(), findUser.getUserPassword(), authorities);
//    }
        return userRepository.findByUserId(Long.parseLong(username)).orElseThrow(CUserNotFoundException::new);
    }
}
