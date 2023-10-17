package com.shop.controller;

import com.shop.models.UserDto;
import com.shop.service.UserService;
import jakarta.servlet.http.HttpSession;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

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
    public UserDto login(@RequestBody UserDto userDto, HttpSession httpSession) {
        log.debug("로그인 정보 : {}", userDto);
        UserDto dto = userService.login(userDto.getU_id(), userDto.getU_pw());
        if (dto != null) {
            httpSession.setAttribute("LOGINUSER", dto);
        }
        return dto;
    }

    @GetMapping("currentuser")
    public UserDto curruntUser(HttpSession httpSession) {
        System.out.println("현재 유저 정보 요청");
        UserDto dto = (UserDto) httpSession.getAttribute("LOGINUSER");
        // log.debug(dto.toString());
        return dto;
    }

    @GetMapping("logout")
    public void logout(HttpSession httpSession) {
        log.debug("로그아웃 요청");
        httpSession.removeAttribute("LOGINUSER");
    }
}
