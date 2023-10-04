import { useNavigate } from "react-router-dom";
const ProductList = () => {
  const navigate = useNavigate();
  const productAddButton = () => {
    navigate("/addItem");
  };
  return (
    <div>
      <h1>상품 리스트</h1>
      <button onClick={productAddButton}>상품 추가</button>
    </div>
  );
};

export default ProductList;
