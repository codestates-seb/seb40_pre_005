package com.codestates.stackOverflow.user.repository;


import com.codestates.stackOverflow.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, String> {
    Optional<User> findByUserEmail(String userEmail);

    List<User> findByName(String name);

    Optional<User> findByUserId(Long userId);

}
