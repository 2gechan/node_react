package com.gechan.demo.controller;

import com.gechan.demo.models.UserDto;
import com.gechan.demo.service.UserService;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("hello")
    public UserDto hello(HttpSession httpSession) {
        UserDto loginUser = (UserDto) httpSession.getAttribute("LOGINUSER");
        if (loginUser != null) {
            // System.out.println("로그인정보 = " + loginUser);
            return loginUser;
        } else {
            // System.out.println("로그인 정보 없음");
            return null;
        }
    }

    @PostMapping("session")
    public UserDto session(HttpSession httpSession) {
        UserDto loginUser = (UserDto) httpSession.getAttribute("LOGINUSER");
        if (loginUser != null) {
            // System.out.println("로그인 정보 있음");
            return loginUser;
        } else {
            // System.out.println("로그인 정보 없음");
            return null;
        }
    }

    @PostMapping("logout")
    public void logout(HttpSession httpSession) {
        httpSession.removeAttribute("LOGINUSER");
    }

    @PostMapping("join")
    public void join(@RequestBody UserDto user) {
        UserDto newUser = user;
        System.out.println("user = " + newUser.toString());
        userService.insert(user);
    }

    @PostMapping("login")
    public UserDto login(@RequestBody UserDto user, HttpSession httpSession) {

        System.out.println("로그인 정보 = " + user.toString());
        UserDto loginUser = userService.login(user.getUser_id(), user.getUser_password());

        if (loginUser != null) {
            httpSession.setAttribute("LOGINUSER", loginUser);
            // System.out.println("loginUser = " + loginUser.toString());
            return loginUser;
        } else {
            return null;
        }
    }
}
