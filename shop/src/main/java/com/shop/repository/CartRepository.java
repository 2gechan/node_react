package com.shop.repository;

import com.shop.models.CartDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CartRepository extends JpaRepository<CartDto, Long> {

    @Query(value = "select * from tbl_cart c where c.c_uid=:c_uid", nativeQuery = true)
    public List<CartDto> user_cart_list(String c_uid);
}
