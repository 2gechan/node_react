package com.shop.service;

import com.shop.models.ImageVO;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import java.util.List;

public interface FileService {
    public String fileUp(MultipartFile file) throws Exception;
    public List<ImageVO> filesUp(MultipartHttpServletRequest files) throws Exception;

}
