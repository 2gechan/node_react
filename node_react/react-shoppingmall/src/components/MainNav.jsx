import { NavLink } from "react-router-dom";

const MainNav = () => {
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
        <NavLink to="/login">
          <li>LOGIN</li>
        </NavLink>

        <li>JOIN</li>
      </ul>
    </>
  );
};

export default MainNav;
