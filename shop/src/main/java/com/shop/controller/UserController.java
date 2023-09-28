package com.shop.controller;

import com.shop.models.UserDto;
import com.shop.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class UserController {

    private final UserService userService;
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("join")
    public UserDto join(@RequestBody UserDto userDto) {
        log.debug("회원가입 정보 : {}",userDto.toString());
        UserDto joinUser = userService.join(userDto);

        if(joinUser == null) {
            return null;
        } else {
            return joinUser;
        }
    }

    @PostMapping("login")
    public UserDto login(@RequestBody UserDto userDto) {
        log.debug("로그인 정보 : {}", userDto);
        UserDto dto = userService.login(userDto.getU_id(), userDto.getU_pw());
        return dto;
    }
}
