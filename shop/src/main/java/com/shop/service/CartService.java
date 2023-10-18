package com.shop.service;

import com.shop.models.CartDto;
import com.shop.models.ProductDto;

import java.util.List;

public interface CartService {
    public List<CartDto> user_cart_selectAll(String u_id);
    public CartDto insert(CartDto dto);
    public CartDto itemCheck(CartDto dto);
}
