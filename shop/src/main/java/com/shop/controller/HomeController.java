package com.shop.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class HomeController {

    @GetMapping("hello")
    public String Home() {
        log.debug("클라이언트 서버 연결 확인");
        return "ConnectionOK!!";
    }
}
