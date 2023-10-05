package com.shop.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString

@Entity
@Table(name = "tbl_images")
public class ImageVO {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long i_seq;
    private long i_pseq;
    private String i_image_name;
}
