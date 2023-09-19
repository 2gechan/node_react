package com.gechan.demo.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.Table;

@Table(name = "shop_trade")
@Getter
@Setter
public class TradeVO {
    @Id
    private long st_seq; // 구매(판매)내역 seq(pk)

    @Column(nullable = false)
    private String st_suid; // 구매자 아이디

    @Column(nullable = false)
    private String st_siSuId; // 판매자 아이디

    @Column(nullable = false)
    private long st_siSeq; // 상품 seq

    @Column(nullable = false)
    private String st_siName; // 상품 이름

    @Column(nullable = false)
    private int st_siPrice; // 상품 가격

    @Column(nullable = false)
    private int st_qty; // 구매(판매) 수량

    @Column(nullable = false)
    private int st_pay; // 결제 금액

    @Column(nullable = false)
    private String st_date; // 구매 날짜

    @Column(nullable = false)
    private String st_time; // 구매 시각

}
