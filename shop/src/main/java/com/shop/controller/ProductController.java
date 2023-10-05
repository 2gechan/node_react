package com.shop.controller;

import com.shop.models.ImageVO;
import com.shop.models.ProductDto;
import com.shop.service.FileService;
import com.shop.service.ImagesService;
import com.shop.service.ProductService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Slf4j
@CrossOrigin("http://localhost:3000")
@RestController
public class ProductController {

    private final ProductService productService;
    private final FileService fileService;
    private final ImagesService imagesService;

    public ProductController(ProductService productService, FileService fileService, ImagesService imagesService) {
        this.productService = productService;
        this.fileService = fileService;
        this.imagesService = imagesService;
    }

    @PostMapping("addItem")
    public ProductDto addItem(@RequestParam("p_category") String p_category,
                              @RequestParam("p_name") String p_name,
                              @RequestParam("p_qty") int p_qty,
                              @RequestParam("p_price") int p_price,
                              @RequestParam("p_main_image")MultipartFile p_main_image,
                              @RequestParam("images")MultipartFile[] images) {
        ProductDto returnDto = new ProductDto();
        returnDto.setP_category(p_category);
        returnDto.setP_name(p_name);
        returnDto.setP_qty(p_qty);
        returnDto.setP_price(p_price);

        System.out.println(p_main_image.getOriginalFilename());
        try {
            if (!p_main_image.getOriginalFilename().isEmpty()) {
                String fileName = fileService.fileUp(p_main_image);
                returnDto.setP_main_image(fileName);
                productService.insert(returnDto);

            }
            for (MultipartFile image : images) {
                if(!image.isEmpty()) {
                    String fileName = fileService.fileUp(image);
                    ImageVO imageVO = new ImageVO();
                    imageVO.setI_image_name(fileName);
                    long pseq = productService.findLastProduct();
                    log.debug("마지막 인덱스 {}", pseq);
                    imageVO.setI_pseq(pseq);

                    imagesService.imagesInsert(imageVO);
                }

            }

            } catch (Exception e) {
            e.printStackTrace();
        }


        System.out.println("returnDto = " + returnDto.toString());

        return returnDto;
    }

    @GetMapping("product")
    public List<ProductDto> allProduct() {
        log.debug("리스트들 {}", productService.selectAll());
        return productService.selectAll();
    }

    @GetMapping("product/detail/detail")
    public List<ImageVO> detailImages(@RequestParam("p_seq") String p_seq) {
        long i_pseq = Integer.parseInt(p_seq);
        List<ImageVO> detailImages = imagesService.detailImages(i_pseq);
        return detailImages;
    }

}
