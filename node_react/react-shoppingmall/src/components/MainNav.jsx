import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const MainNav = () => {
  const navigate = useNavigate();
  const [logout, setlogout] = useState(false);
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
        setlogout(false);
      } else {
        console.log("로그인정보O");
        setlogout(true);
      }
    };
    fetchData();
  });

  const logoutClick = async () => {
    setlogout(false);
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
            {logout ? (
              <span onClick={logoutClick}>LOGOUT</span>
            ) : (
              <NavLink to="/login">
                <span>LOGIN</span>
              </NavLink>
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
