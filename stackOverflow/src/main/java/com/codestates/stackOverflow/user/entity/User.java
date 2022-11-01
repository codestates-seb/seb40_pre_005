package com.codestates.stackOverflow.user.entity;

import com.codestates.stackOverflow.audit.Auditable;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class User extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long userId;

    @Column(nullable = false, updatable = false, unique = true)
    private String userEmail;

    @Column(length = 100, nullable = false)
    private String userPassword;

    @Column(length = 100, nullable = false)
    private String name;

}
