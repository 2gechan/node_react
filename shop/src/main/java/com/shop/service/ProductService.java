package com.shop.service;

import com.shop.models.ProductDto;

import java.util.List;

public interface ProductService {

    public List<ProductDto> selectAll();

    public ProductDto insert(ProductDto dto);

    public List<ProductDto> categoryList(String p_category);

    public void delete(String p_seq);
}
