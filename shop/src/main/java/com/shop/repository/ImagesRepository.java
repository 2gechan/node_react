package com.shop.repository;

import com.shop.models.ImageVO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ImagesRepository extends JpaRepository<ImageVO, Long> {

    @Query(value = "select * from tbl_images i where i.i_pseq=:i_pseq", nativeQuery = true)
    public List<ImageVO> findByDetailImages(long i_pseq);
}
