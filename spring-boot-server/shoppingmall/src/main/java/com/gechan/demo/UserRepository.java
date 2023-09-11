package com.gechan.demo;

import com.gechan.demo.models.ShopUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository  extends JpaRepository<ShopUser, String> {
}
