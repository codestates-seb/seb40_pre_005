package com.codestates.stackOverflow.config;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.GenericFilterBean;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

@RequiredArgsConstructor
public class JwtAuthenticationFilter extends GenericFilterBean {
    private final JwtProvider jwtProvider;


    // request로 들어오는 JWT의 유효성 검증
    @Override
    public void doFilter(ServletRequest request,
                         ServletResponse response,
                         FilterChain filterchain) throws IOException, ServletException {
        String token = jwtProvider.resolveToken((HttpServletRequest) request);
        if(token != null && jwtProvider.validationToken(token)){
            Authentication authentication = jwtProvider.getAuthentication(token);
            SecurityContextHolder.getContext().setAuthentication(authentication);
        }
        filterchain.doFilter(request,response);
    }
}
