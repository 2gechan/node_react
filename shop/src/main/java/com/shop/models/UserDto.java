package com.shop.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Entity
@Table(name = "tbl_users")
public class UserDto {

    @Id
    @Column(name = "u_id")
    private String u_id; // 아이디
    @Column(name = "u_pw")
    private String u_pw; // 패스워드
    @Column(name = "u_tel")
    private String u_tel; // 전화번호
    @Column(name = "u_addr")
    private String u_addr; // 주소
    @Column(name = "u_email")
    private String u_email; // 이메일
    @Column(name = "u_name")
    private String u_name; // 이름
    @Column(name = "u_rnum")
    private String u_rnum; // 주민번호
    @Column(name = "u_point")
    private int u_point; // 포인트
}
