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
    private String su_id;

    @Column(nullable = false)
    private String su_password;
    @Column(nullable = false)
    private String su_name;
    @Column(nullable = false)
    private String su_tel;
    @Column(nullable = false)
    private String su_role; // 관리자, 판매자, 구매자
}
