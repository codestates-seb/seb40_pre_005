package com.codestates.stackOverflow.user.mapper;

import com.codestates.stackOverflow.user.dto.UserResponseDto;
import com.codestates.stackOverflow.user.entity.User;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-11-07T10:55:56+0900",
    comments = "version: 1.5.2.Final, compiler: javac, environment: Java 11.0.17 (Azul Systems, Inc.)"
)
@Component
public class UserMapperImpl implements UserMapper {

    @Override
    public User userPostToUser(UserResponseDto.Post requestBody) {
        if ( requestBody == null ) {
            return null;
        }

        User.UserBuilder user = User.builder();

        user.userEmail( requestBody.getUserEmail() );
        user.userPassword( requestBody.getUserPassword() );
        user.name( requestBody.getName() );

        return user.build();
    }
}
