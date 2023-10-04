import { useRef, useState } from "react";

const AddItem = () => {
  const [product, setProduct] = useState({});
  const [image, setImage] = useState("");
  const [images, setImages] = useState("");
  const imageRef = useRef(null);
  const imagesRef = useRef(null);

  const addProduct = () => {
    const formData = new FormData();

    for (const key in product) {
      formData.append(key, product[key]);
    }
    formData.append("p_main_image", imageRef.current.files[0]);
    console.log(formData);
    fetch("/addItem", {
      method: "POST",
      body: formData,
    }).then((response) => {
      if (response.ok) {
        console.log("상품 추가 성공");
      } else {
        console.log("상품 추가 실패");
      }
    });
  };

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
    console.log(name, value);
  };

  const fileChangeHandler = (e) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = (fe) => {
      setImage(fe.target.result);
    };
    fileReader.readAsDataURL(file);
    console.log(file.name);
    // setProduct({ ...product, p_main_image: file.name });
  };

  const filesChangeHnadler = (e) => {
    const files = e.target.files;
    console.log(files.length);
    Array.from(files).forEach((file) => {
      const fileReader = new FileReader();
      fileReader.onloadend = (fe) => {
        setImages((images) => [...images, fe.target.result]);
      };
      fileReader.readAsDataURL(file);
    });
  };
  return (
    <div className="main form">
      <h1>아이템 추가</h1>
      <div>
        <label htmlFor="">상품 카테고리</label>
        <select name="p_category" onChange={inputChangeHandler}>
          <option defaultValue="카테고리 없음">카테고리를 선택하세요</option>
          <option value="모자">모자</option>
          <option value="상의">상의</option>
          <option value="하의">하의</option>
          <option value="악세사리">악세사리</option>
        </select>
      </div>
      <div>
        <label>상품 이름</label>
        <input
          placeholder="상품 이름"
          name="p_name"
          onChange={inputChangeHandler}
        />
      </div>
      <div>
        <label>상품 수량</label>
        <input
          type="number"
          placeholder="상품 수량"
          name="p_qty"
          onChange={inputChangeHandler}
        />
      </div>
      <div>
        <label>상품 가격</label>
        <input
          placeholder="상품 가격"
          name="p_price"
          onChange={inputChangeHandler}
        />
      </div>
      <div>
        <label>상품 대표 이미지</label>
        <input
          type="file"
          accept="image/*"
          ref={imageRef}
          onChange={fileChangeHandler}
        />
      </div>
      <div>
        <img src={image ? image : ""} width="100px" />
      </div>

      <div>
        <label>상세 이미지들</label>
        <input
          type="file"
          accept="image/*"
          multiple="multiple"
          ref={imagesRef}
          onChange={filesChangeHnadler}
        />
      </div>
      <div>
        <button onClick={addProduct}>상품 추가</button>
      </div>
    </div>
  );
};

export default AddItem;
