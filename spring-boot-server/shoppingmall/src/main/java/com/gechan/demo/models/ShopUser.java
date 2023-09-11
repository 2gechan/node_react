package com.gechan.demo.models;

import com.sun.istack.NotNull;
import lombok.*;
import org.springframework.lang.Nullable;

import javax.persistence.*;

@Table(name = "shop_user")
@Entity
@Setter
@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class ShopUser {

    @Id // Primary key
    private String su_id;

    @Column(nullable = false)
    private String su_password;
    @Column(nullable = false)
    private String su_name;
    @Column(nullable = false)
    private String su_tel;
}
