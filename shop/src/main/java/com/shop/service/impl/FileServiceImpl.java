package com.shop.service.impl;

import com.shop.models.ImageVO;
import com.shop.service.FileService;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import java.io.File;
import java.util.List;
import java.util.UUID;

@Service
public class FileServiceImpl implements FileService {

    protected final ResourceLoader resourceLoader;
    protected final Resource resource;
    protected final String filePath;
    protected final String macPath;
    protected final String macHome;

    public FileServiceImpl(ResourceLoader resourceLoader) {
        this.resourceLoader = resourceLoader;
        this.filePath = "/Users/isechan/Documents/workspace/files/";
        this.macPath = "/Users/isechan/Documents";
        this.macHome = "/workspace/files";
        this.resource = resourceLoader.getResource("file:///Users/isechan/Documents/workspace/files/");
    }

    @Override
    public String fileUp(MultipartFile file) throws Exception {
        File path = new File(filePath);
        if (!path.exists()) {
            path.mkdirs();
        }
        // 실제 업로드된 파일 이름
        String fileName = file.getOriginalFilename();

        // java에서 제공하는 uuid를 생성하는 코드
        // String strUUID = UUID.randomUUID().toString();

        // UUID 키 값 파일 이름과 합성하여 새로운 이름으로 변형
        // fileName = String.format("%s-%s", strUUID, fileName);
        File uploadFile = new File(path, fileName);
        file.transferTo(uploadFile);

        return fileName;
    }

    @Override
    public List<ImageVO> filesUp(MultipartHttpServletRequest files) throws Exception {
        return null;
    }
}
