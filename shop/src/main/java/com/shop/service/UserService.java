package com.shop.service;

import com.shop.models.UserDto;

import java.util.List;
import java.util.Optional;

public interface UserService {

    public List<UserDto> selectAll();

    public UserDto findById(String u_id);

    public UserDto join(UserDto userDto);

    public int update(UserDto userDto);

    public int delete(String u_id);

    public UserDto login(String u_id, String u_pw);
}
