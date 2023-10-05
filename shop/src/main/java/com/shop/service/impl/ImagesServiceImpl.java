package com.shop.service.impl;

import com.shop.models.ImageVO;
import com.shop.models.ProductDto;
import com.shop.repository.ImagesRepository;
import com.shop.service.ImagesService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ImagesServiceImpl implements ImagesService {
    private final ImagesRepository imagesRepository;
    public ImagesServiceImpl(ImagesRepository imagesRepository) {
        this.imagesRepository = imagesRepository;
    }

    @Override
    public ImageVO imagesInsert(ImageVO vo) {
        return imagesRepository.save(vo);
    }

    @Override
    public List<ImageVO> detailImages(long i_pseq) {
        List<ImageVO> detailImages = imagesRepository.findByDetailImages(i_pseq);
        return detailImages;
    }
}
