import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../store/loginSlice";

const MainNav = () => {
  const loginout = useSelector((state) => state.login.value);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [divisible, setDivisible] = useState(false);
  const mouseOver = () => {
    setDivisible(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.post("/session");
      const result = await response.data;

      if (!result) {
        console.log("로그인정보X");
      } else {
        console.log("로그인정보O");
        dispatch(login());
      }
    };
    fetchData();
  });

  const logoutClick = async () => {
    dispatch(logout());
    await axios.post("/logout");
    navigate("/");
  };

  const mouseLeave = () => {
    setDivisible(false);
  };
  return (
    <>
      <h1>ShoppingMall</h1>
      <ul className="main menu">
        <NavLink to="/">
          <li>HOME</li>
        </NavLink>

        <NavLink to="/best">
          <li>BEST</li>
        </NavLink>
        <li>TOP</li>
        <li>BOTTOM</li>
        <li>CART</li>
        <li>후기</li>
        <li>고객센터</li>
        <li className="register" onMouseOverCapture={mouseOver}>
          MEMBER
          <div
            style={{ display: divisible ? "flex" : "none" }}
            onMouseLeave={mouseLeave}
          >
            <NavLink to="/join">
              <span>JOIN</span>
            </NavLink>
            {loginout ? (
              <NavLink to="/login">
                <span>LOGIN</span>
              </NavLink>
            ) : (
              <span onClick={logoutClick}>LOGOUT</span>
            )}
            <NavLink to="/mypage">
              <span>MYPAGE</span>
            </NavLink>
          </div>
        </li>
        <NavLink to="/cart">
          <li>CART</li>
        </NavLink>
      </ul>
    </>
  );
};

export default MainNav;
