import { NavLink } from "react-router-dom";

const MainNav = () => {
  return (
    <>
      <ul>
        <NavLink to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="/join">
          <li>Join</li>
        </NavLink>
        <NavLink to="/login">
          <li>Login</li>
        </NavLink>
        <NavLink to="/product">
          <li>Product</li>
        </NavLink>
      </ul>
    </>
  );
};

export default MainNav;
