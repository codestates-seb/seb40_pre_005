package com.codestates.stackOverflow.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@RequiredArgsConstructor
@EnableWebSecurity(debug = true)
@Configuration
public class SecurityConfiguration {

    private final JwtProvider jwtProvider;
    private final CAuthenticationEntryPoint cAuthenticationEntryPoint;
    private final CAccessDeniedHandler cAccessDeniedHandler;
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception{
        http
                .headers().frameOptions().sameOrigin()
                .and()
                .httpBasic().disable()
                .csrf().disable()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .authorizeHttpRequests(authorize -> authorize
                        .antMatchers("user/**").hasRole("ROLE_USER")
                        .antMatchers("question/write").hasRole("ROLE_USER")
                        .antMatchers("question/{question-id}").hasRole("ROLE_USER")
                        .antMatchers("answer/**").hasRole("ROLE_USER")
                        .antMatchers("/**").permitAll())
                .exceptionHandling()
                .accessDeniedHandler(cAccessDeniedHandler)
                .authenticationEntryPoint(cAuthenticationEntryPoint)
                .and()
                .addFilterBefore(new JwtAuthenticationFilter(jwtProvider), UsernamePasswordAuthenticationFilter.class)
                //.addFilterBefore(new )
        ;

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder(){
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }
}
