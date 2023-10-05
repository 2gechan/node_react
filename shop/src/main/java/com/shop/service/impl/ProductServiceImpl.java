package com.shop.service.impl;

import com.shop.models.ImageVO;
import com.shop.models.ProductDto;
import com.shop.repository.ProductRepository;
import com.shop.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;

    @Autowired
    public ProductServiceImpl(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public List<ProductDto> selectAll() {
        List<ProductDto> allProductList = productRepository.findAll();
        return allProductList;
    }

    public long findLastProduct() {
        long lastSeq = productRepository.count();
        return lastSeq;
    }

    @Override
    public ProductDto insert(ProductDto dto) {
        ProductDto productDto = productRepository.save(dto);
        return productDto;
    }

    @Override
    public List<ProductDto> categoryList(String p_category) {
        List<ProductDto> categoryList = productRepository.findCategoryList(p_category);
        return categoryList;
    }

    @Override
    public void delete(String p_seq) {
        long seq = Integer.parseInt(p_seq);
        productRepository.deleteById(seq);
    }
}
