package com.gechan.demo.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

// 서버가 시작될 때 shop_user 라는 이름의 테이블이 없으면
// 테이블을 생성해준다.
@Table(name = "shop_user")
@Entity
public class Demo {
    @Id
    @GeneratedValue
    private long su_seq;

    private String su_id;
    private String su_password;
    private String su_name;
}
