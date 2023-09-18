package com.gechan.demo.service.impl;

import com.gechan.demo.UserRepository;
import com.gechan.demo.models.UserDto;
import com.gechan.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public List<UserDto> selectAll() {
        return null;
    }

    @Override
    public int insert(UserDto user) {
        this.userRepository.save(user);
        return 0;
    }

    @Override
    public UserDto findById(String user_id) {
        UserDto user = this.userRepository.findById(user_id).orElse(null);
        return user;
    }

    @Override
    public int delete(String user_id) {
        return 0;
    }

    @Override
    public UserDto login(String user_id, String user_password) {
        UserDto user;
        try {
            user = this.findById(user_id);
            if (user != null) {
                if (user.getUser_password().equals(user_password)) {
                    return user;
                } else {
                    return null;
                }
            }
            System.out.println("catch 실행x");
            return null;
        } catch (Exception e) {
            System.out.println("Exception 발생");
            return null;
        }
    }
}
