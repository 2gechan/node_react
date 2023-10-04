package com.shop.repository;

import com.shop.models.ProductDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<ProductDto,Long> {
    @Query(value = "select * from tbl_product p where p.p_category=:p_category", nativeQuery = true)
    List<ProductDto> findCategoryList(String p_category);
}
