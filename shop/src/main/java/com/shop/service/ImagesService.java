package com.shop.service;

import com.shop.models.ImageVO;

import java.util.List;

public interface ImagesService {

    public ImageVO imagesInsert(ImageVO vo);

    public List<ImageVO> detailImages(long i_pseq);
}
