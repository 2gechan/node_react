import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const ProductDetail = () => {
  const { p_seq } = useParams();
  const [images, setImages] = useState([]);

  useEffect(() => {
    const detailImages = async () => {
      console.log(p_seq);
      const res = await fetch(`detail?p_seq=${p_seq}`, {
        method: "GET",
      });
      const data = await res.json();
      setImages([...data]);
      console.log(data);
    };
    detailImages();
  }, []);
  const detailImagesPrint = images.map((image, index) => {
    const imagePath = `http://localhost:8080/static/${image.i_image_name}`;
    return (
      <div key={index}>
        <img src={imagePath} alt="상세이미지" width="300px" />
      </div>
    );
  });

  return (
    <div>
      <h1>{p_seq}의 상세 페이지</h1>
      <div>
        <button>구매하기</button>
        <button>장바구니 담기</button>
      </div>
      <div>{detailImagesPrint}</div>
    </div>
  );
};

export default ProductDetail;
