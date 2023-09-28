package com.shop.service.impl;

import com.shop.models.UserDto;
import com.shop.repository.UserRepository;
import com.shop.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Slf4j
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
    public UserDto findById(String u_id) {
        UserDto userDto = userRepository.findById(u_id).orElse(null);
        return userDto;
    }

    @Override
    public UserDto join(UserDto userDto) {

        try {
            // save는 insert와 update가 동시에 된다
            UserDto dto = userRepository.save(userDto);
            return dto;
        } catch (Exception e) {
            log.debug("회원가입 실패");
            return null;
        }

    }

    @Override
    public int update(UserDto userDto) {
        return 0;
    }

    @Override
    public int delete(String u_id) {
        return 0;
    }

    @Override
    public UserDto login(String u_id, String u_pw) {
        UserDto userDto = this.findById(u_id);
        if(userDto == null) {
            return null;
        } else if(userDto.getU_pw().equals(u_pw)) {
            return userDto;
        }
        return null;
    }
}
