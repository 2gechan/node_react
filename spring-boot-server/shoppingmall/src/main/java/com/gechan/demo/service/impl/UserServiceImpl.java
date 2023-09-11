package com.gechan.demo.service.impl;

import com.gechan.demo.UserRepository;
import com.gechan.demo.models.ShopUser;
import com.gechan.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public List<ShopUser> selectAll() {
        return null;
    }

    @Override
    public int insert(ShopUser user) {
        this.userRepository.save(user);
        return 0;
    }

    @Override
    public ShopUser findById(String su_id) {
        ShopUser user = this.userRepository.findById(su_id).orElse(null);
        return user;
    }

    @Override
    public int delete(String su_id) {
        return 0;
    }

    @Override
    public ShopUser login(String su_id, String su_password) {
        ShopUser user;
        try {
            user = this.findById(su_id);
            if (user != null) {
                if (user.getSu_password().equals(su_password)) {
                    return user;
                } else {
                    return null;
                }
            }
            System.out.println("catch 실행x");
            return null;
        } catch (Exception e) {
            System.out.println("Exception 발생");
            return null;
        }
    }
}
