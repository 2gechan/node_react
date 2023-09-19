package com.gechan.demo.service;

import com.gechan.demo.models.UserDto;

import java.util.List;

public interface UserService {

    public List<UserDto> selectAll();

    public int insert(UserDto user);

    public UserDto findById(String su_id);

    public int delete(String su_id);

    public UserDto login(String su_id, String su_password);
}
