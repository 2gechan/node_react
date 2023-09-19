package com.gechan.demo.models;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.Table;

@Table(name = "shop_item")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ItemDto {

    @Id
    private long si_seq; // 상품 seq(pk)

    @Column(nullable = false)
    private String si_category; // 상품 카테고리(상의,하의 등등)

    @Column(nullable = false)
    private String si_name; // 상품 이름

    private String si_text; // 상품 설명, null 허용

    @Column(nullable = false)
    private int si_price; // 상품 가격

    @Column(nullable = false)
    private int si_qty; // 상품 수량

    @Column(nullable = false)
    private boolean si_isSoldOut; // 판매 유무

    private int si_like; // 관심등록 수, null 허용

    @Column(nullable = false)
    private String si_thumbnail; // 대표 이미지


}
