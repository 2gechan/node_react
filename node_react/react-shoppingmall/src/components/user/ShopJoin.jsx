import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { joinUser } from "../../store/userSlice";

const ShopJoin = (props) => {
  const { axios } = props;
  const navigate = useNavigate();
  // const [user, setUser] = useState({});

  const user = useSelector((state) => state.userInfo.user);
  const dispatch = useDispatch();

  const joinInputChangeHandler = (e) => {
    const { name, value } = e.target;
    const updateUser = { ...user, [name]: value };
    dispatch(joinUser(updateUser));

    // setUser({ ...user, [name]: value });
    console.log(name, value);
    console.log(updateUser);
  };

  const joinButtonClickHandler = async (e) => {
    console.log(user);

    // const response = await axios.post("/join", user);

    // console.log(response.status);
    // if (response.status === 200) {
    //   navigate("/");
    // } else {
    //   alert("회원가입에 실패했습니다.");
    // }
  };

  return (
    <div className="main joinForm">
      <div className="join input">
        <label htmlFor="">아이디</label>
        <input
          type="text"
          placeholder="ID"
          name="su_id"
          onChange={joinInputChangeHandler}
        />
      </div>
      <div className="join input">
        <label htmlFor="">패스워드</label>
        <input
          type="password"
          placeholder="PASSWORD"
          name="su_password"
          onChange={joinInputChangeHandler}
        />
      </div>
      <div className="join input">
        <label htmlFor="">이름</label>
        <input
          type="text"
          placeholder="NAME"
          name="su_name"
          onChange={joinInputChangeHandler}
        />
      </div>
      <div className="join input">
        <label htmlFor="">전화번호</label>
        <input
          type="text"
          placeholder="PHONE NUMBER"
          name="su_tel"
          onChange={joinInputChangeHandler}
        />
      </div>
      <div className="join input">
        <label htmlFor="">이용 목적</label>
        <div>
          <label>구매자</label>
          <input
            type="radio"
            name="su_role"
            onChange={joinInputChangeHandler}
            value="구매자"
          />
          <label>판매자</label>
          <input
            type="radio"
            name="su_role"
            onChange={joinInputChangeHandler}
            value="판매자"
          />
        </div>
      </div>
      <div className="join button">
        <button type="button" onClick={joinButtonClickHandler}>
          회원가입
        </button>
      </div>
    </div>
  );
};

export default ShopJoin;
