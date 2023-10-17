package com.shop.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Entity
@Table(name = "tbl_cart")
public class CartDto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long c_seq;
    private long c_pseq;
    private String c_uid;
    private int c_amount;
    private int c_checked;
}
