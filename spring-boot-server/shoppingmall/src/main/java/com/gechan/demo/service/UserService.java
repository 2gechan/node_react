package com.gechan.demo.service;

import com.gechan.demo.models.ShopUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserService {

    public List<ShopUser> selectAll();

    public int insert(ShopUser user);

    public ShopUser findById(String su_id);

    public int delete(String su_id);

    public ShopUser login(String su_id, String su_password);
}
