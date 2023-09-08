package com.gechan.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class HomeController {

    @GetMapping("hello")
    public List<String> hello() {

//        List<String> hello =
        return Arrays.asList("서버 포트는 8080, 리액트 포트는 3000");
    }
}
