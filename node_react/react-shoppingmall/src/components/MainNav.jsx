import { useState } from "react";
import { NavLink } from "react-router-dom";

const MainNav = () => {
  const [divisible, setDivisible] = useState(false);
  const mouseOver = () => {
    setDivisible(true);
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
          REGISTER
          <div
            style={{ display: divisible ? "flex" : "none" }}
            onMouseLeave={mouseLeave}
          >
            <NavLink to="/join">
              <span>JOIN</span>
            </NavLink>

            <NavLink to="/login">
              <span>LOGIN</span>
            </NavLink>
          </div>
        </li>
      </ul>
    </>
  );
};

export default MainNav;
