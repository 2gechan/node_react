import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
const ProductList = () => {
  const [list, setList] = useState([]);
  const navigate = useNavigate();
  const productAddButton = () => {
    navigate("/addItem");
  };

  useEffect(() => {
    const allList = async () => {
      const res = await fetch("/product", {
        method: "GET",
      });
      const data = await res.json();
      setList([...data]);
      console.log(data);
    };
    allList();
  }, []);

  const productList = list.map((item) => {
    const imagePath = `http://localhost:8080/static/${item.p_main_image}`;
    const detailLink = `/product/detail/${item.p_seq}`;
    return (
      <div key={item.p_seq}>
        <NavLink to={detailLink}>
          <img src={imagePath} alt="상품" width="100px" height="100px" />
        </NavLink>
        <label>상품이름 : </label>
        <span>{item.p_name}</span>
        <label> 상품가격 : </label>
        <span>{item.p_price}</span>
      </div>
    );
  });

  return (
    <div>
      <h1>상품 리스트</h1>
      <button onClick={productAddButton}>상품 추가</button>
      <div>{productList}</div>
    </div>
  );
};

export default ProductList;
