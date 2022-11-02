package com.codestates.stackOverflow.user.mapper;

import com.codestates.stackOverflow.user.dto.UserDto;
import com.codestates.stackOverflow.user.entity.User;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-11-01T17:10:55+0900",
    comments = "version: 1.5.2.Final, compiler: javac, environment: Java 11.0.17 (Azul Systems, Inc.)"
)
@Component
public class UserMapperImpl implements UserMapper {

    @Override
    public User userPostToUser(UserDto.Post requestBody) {
        if ( requestBody == null ) {
            return null;
        }

        User user = new User();

        user.setUserEmail( requestBody.getUserEmail() );
        user.setUserPassword( requestBody.getUserPassword() );
        user.setName( requestBody.getName() );

        return user;
    }
}
