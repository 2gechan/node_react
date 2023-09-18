package com.gechan.demo.models;

import lombok.*;

import javax.persistence.Table;

@Table(name = "shop_item")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ItemDto {
    private long item_id;

    private String item_name;
    private String item_text;
    private int item_price;
    private int item_count;
    private int item_stock;
    private boolean item_isSoldout;

}
