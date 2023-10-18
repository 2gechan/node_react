package com.shop.service.impl;

import com.shop.models.CartDto;
import com.shop.models.ProductDto;
import com.shop.repository.CartRepository;
import com.shop.repository.ProductRepository;
import com.shop.service.CartService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartServiceImpl implements CartService {
    private final CartRepository cartRepository;
    private final ProductRepository productRepository;

    public CartServiceImpl(CartRepository cartRepository, ProductRepository productRepository) {
        this.cartRepository = cartRepository;
        this.productRepository = productRepository;
    }

    @Override
    public List<CartDto> user_cart_selectAll(String u_id) {
        List<CartDto> user_cart_list = cartRepository.user_cart_list(u_id);
        return user_cart_list;
    }

    @Override
    public CartDto insert(CartDto dto) {
        ProductDto product = productRepository.findById(dto.getC_pseq()).orElse(null);
        // System.out.println(product.toString());
        if (product != null) {
            CartDto cartItem = cartRepository.save(dto);
            return cartItem;
        } else {
            System.out.println("상품없음");
        }
        return null;
    }

    @Override
    public CartDto itemCheck(CartDto dto) {
        cartRepository.save(dto);
        return null;
    }
}
