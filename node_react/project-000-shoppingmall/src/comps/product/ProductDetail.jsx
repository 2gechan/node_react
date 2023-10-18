import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const ProductDetail = () => {
  const { p_seq } = useParams();
  const [images, setImages] = useState([]);
  const [product, setProduct] = useState({});
  const [cart, setCart] = useState({});

  useEffect(() => {
    const detailImages = async () => {
      console.log(p_seq);
      const res = await fetch(`detail?p_seq=${p_seq}`, {
        method: "GET",
      });
      const data = await res.json();
      setImages([...data]);
      // console.log(data);
    };
    const productInfo = async () => {
      const res = await fetch(`item_detail?p_seq=${p_seq}`, {
        method: "GET",
      });
      const data = await res.json();
      console.log(data);
      setProduct(data);
      setCart(data); // 서버 전송을 위한 state
    };
    productInfo();
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

  const cart_in_item = async () => {
    try {
      console.log(cart);
      const res = fetch("addCart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cart),
      });
      if (res.status === 200) {
        console.log(res.data);
        console.log("장바구니 아이템 추가 성공");
      }
    } catch (error) {
      console.log("에러났음");
    }
  };

  const qtyInputHandler = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setCart({ ...cart, [name]: value });
  };

  return (
    <div>
      <h1>{p_seq}의 상세 페이지</h1>
      <div>
        <div>
          <label>상품번호 : </label>
          <span>{product.p_seq}</span>
        </div>
        <div>
          <label>상품이름 : </label>
          <span>{product.p_name}</span>
        </div>
      </div>
      <div>
        <label>상품가격 : </label>
        <span>{product.p_price}</span>
      </div>
      <div>
        <label>남은수량 : </label>
        <span>{product.p_qty}</span>
        <input
          type="number"
          placeholder="수량"
          name="p_qty"
          onChange={qtyInputHandler}
        />
      </div>
      <div>
        <label>카테고리 : </label>
        <span>{product.p_category}</span>
      </div>
      <div>
        <button>구매하기</button>
        <button onClick={cart_in_item}>장바구니 담기</button>
      </div>
      <div>{detailImagesPrint}</div>
    </div>
  );
};

export default ProductDetail;
