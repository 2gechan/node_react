package com.gechan.demo.controller;

import com.gechan.demo.models.ShopUser;
import com.gechan.demo.service.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class HomeController {

    private final UserService userService;

    public HomeController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("hello")
    public List<String> hello() {

//        List<String> hello =
        return Arrays.asList("서버 포트는 8080, 리액트 포트는 3000");
    }

    @PostMapping("join")
    public void join(@RequestBody ShopUser user) {
        ShopUser newUser = user;
        System.out.println("user = " + newUser.toString());
        userService.insert(user);
    }

    @PostMapping("login")
    public ShopUser login(@RequestBody ShopUser user, HttpSession httpSession) {

        System.out.println("로그인 정보 = " + user.toString());
        ShopUser loginUser = userService.login(user.getSu_id(), user.getSu_password());

        if (loginUser != null) {
            httpSession.setAttribute("LOGINUSER", loginUser);
            System.out.println("loginUser = " + loginUser.toString());
            return loginUser;
        } else {
            return null;
        }
    }
}
