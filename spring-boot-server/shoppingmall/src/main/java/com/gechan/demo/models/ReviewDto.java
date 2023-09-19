package com.gechan.demo.models;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.Table;

@Table(name = "shop_review")
@Getter
@Setter
@ToString
public class ReviewDto {

    @Id
    private long sr_seq;

    @Column(nullable = false)
    private long sr_siSeq; // 상품 seq

    @Column(nullable = false)
    private String sr_suId; // 구매자 아이디

    @Column(nullable = false)
    private String sr_text; // 후기 내용
}
