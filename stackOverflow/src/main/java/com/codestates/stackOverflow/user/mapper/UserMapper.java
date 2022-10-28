package com.codestates.stackOverflow.user.mapper;

import com.codestates.stackOverflow.user.dto.UserDto;
import com.codestates.stackOverflow.user.entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface UserMapper {
    User userPostToUser(UserDto.Post requestBody);
}
