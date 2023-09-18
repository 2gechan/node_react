package com.gechan.demo.service;

import com.gechan.demo.models.UserDto;

import java.util.List;

public interface UserService {

    public List<UserDto> selectAll();

    public int insert(UserDto user);

    public UserDto findById(String user_id);

    public int delete(String user_id);

    public UserDto login(String user_id, String user_password);
}
