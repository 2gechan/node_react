package com.gechan.demo.models;

import lombok.*;

import javax.persistence.*;

@Table(name = "shop_user")
@Entity
@Setter
@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {

    @Id // Primary key
    private String user_id;

    @Column(nullable = false)
    private String user_password;
    @Column(nullable = false)
    private String user_name;
    @Column(nullable = false)
    private String user_tel;
    @Column(nullable = false)
    private String user_role; // 관리자, 판매자, 구매자
}
