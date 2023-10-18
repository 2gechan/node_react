package com.shop.controller;

import com.shop.models.CartDto;
import com.shop.models.ProductDto;
import com.shop.models.UserDto;
import com.shop.service.CartService;
import jakarta.servlet.http.HttpSession;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@CrossOrigin("http://localhost:3000")
@RestController
public class CartController {

    private final CartService cartService;
    public CartController(CartService cartService) {
        this.cartService = cartService;
    }

    @GetMapping("/selectCart")
    public List<CartDto> selectCart(HttpSession httpSession) {
        UserDto curruntUser = (UserDto) httpSession.getAttribute("LOGINUSER");
        if(curruntUser == null) {
            return null;
        } else {
            String u_id = curruntUser.getU_id();
            List<CartDto> user_cart_list = cartService.user_cart_selectAll(u_id);
            log.debug(user_cart_list.toString());
            return user_cart_list;
        }

    }

    @PostMapping("product/detail/addCart")
    public CartDto addCart(@RequestBody ProductDto dto, HttpSession httpSession) {
        CartDto cart_item = new CartDto();

        UserDto user = (UserDto) httpSession.getAttribute("LOGINUSER");
        if(user != null) {
            cart_item.setC_pseq(dto.getP_seq());
            cart_item.setC_uid(user.getU_id());
            cart_item.setC_amount(dto.getP_qty());
            cart_item.setC_checked(0);
            CartDto item = cartService.insert(cart_item);
            return  item;
        }


        log.debug("장바구니 추가 아이템 {}", dto);
        return null;
    }
}
