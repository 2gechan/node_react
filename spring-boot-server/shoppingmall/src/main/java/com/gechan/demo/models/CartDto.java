package com.gechan.demo.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.Table;

@Table(name = "shop_cart")
@Getter
@Setter
public class CartDto {
    @Id
    private long sc_seq; // 장바구니 seq(pk)
    @Column(nullable = false)
    private long sc_siSeq; // 상품 seq
    @Column(nullable = false)
    private String sc_suid; // 구매자 아이디
}
