import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import HeaderTitle from "./headerTitle";

import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../store/loginSlice";
// import { setCurruntUser } from "../store/curruntUserSlice";

const MainNav = () => {
  const loginout = useSelector((state) => state.login.value);
  const curruntUser = useSelector((state) => state.curruntUser.curruntUser);

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [registerMenu, setRegisterMenu] = useState(false);
  const mouseOver = () => {
    setRegisterMenu(true);
  };
  const mouseLeave = () => {
    setRegisterMenu(false);
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
  }, [dispatch]);

  const logoutClick = async () => {
    dispatch(logout());
    await axios.post("/logout");
    navigate("/");
  };

  return (
    <>
      <HeaderTitle />
      <ul className="main menu">
        <NavLink to="/">
          <li>HOME</li>
        </NavLink>
        <li className="categorymenu">
          카테고리
          <div className="category">
            <NavLink to="/best">
              <span>BEST</span>
            </NavLink>
            <span>TOP</span>
            <span>BOTTOM</span>
          </div>
        </li>

        <li className="registermenu">
          MEMBER
          <div className="register">
            {loginout ? (
              <>
                <NavLink to="/join">
                  <span>JOIN</span>
                </NavLink>
                <NavLink to="/login">
                  <span>LOGIN</span>
                </NavLink>
              </>
            ) : (
              <>
                <NavLink to="/">
                  <span onClick={logoutClick}>LOGOUT</span>
                </NavLink>
                <NavLink to="/mypage">
                  <span>MYPAGE</span>
                </NavLink>
              </>
            )}
          </div>
        </li>

        <li>고객센터</li>
        <div className="side title">
          <li>
            <span>{curruntUser.su_name}</span>
          </li>
          <NavLink to="/cart" className="cart">
            <li>CART</li>
          </NavLink>
        </div>
      </ul>
    </>
  );
};

export default MainNav;
