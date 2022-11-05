package com.codestates.stackOverflow.auth.repository;

import com.codestates.stackOverflow.auth.entity.RefreshToken;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RefreshTokenRepository extends JpaRepository<RefreshToken, String> {

    Optional<RefreshToken> findByUserId(Long userId);
}
