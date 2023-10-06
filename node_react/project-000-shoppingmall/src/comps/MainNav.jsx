import { NavLink, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser, resetCurrentUser } from "../store/CurrentUser";
// import { useEffect } from "react";
const MainNav = () => {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.currentUser.currentUser);
  const dispatch = useDispatch();

  const loadUser = async () => {
    try {
      const res = await fetch("/currentuser", {
        method: "GET",
      });

      if (res.ok) {
        const data = await res.json();
        dispatch(setCurrentUser(data));

        console.log(data);
      } else {
        console.error("서버에서 오류 응답을 받았습니다.");
      }
    } catch (error) {
      console.log("로그인 정보 없음");
    }
  };

  const logout = async () => {
    await fetch("/logout");
    dispatch(resetCurrentUser());
    console.log("로그아웃");
    navigate("/");
  };

  return (
    <>
      <ul>
        <NavLink to="/" onClick={loadUser}>
          <li>Home</li>
        </NavLink>
        {currentUser.u_id ? (
          ""
        ) : (
          <NavLink to="/join" onClick={loadUser}>
            <li>Join</li>
          </NavLink>
        )}

        {currentUser.u_id ? (
          <NavLink onClick={logout}>
            <li>Logout</li>
          </NavLink>
        ) : (
          <NavLink to="/login">
            <li>Login</li>
          </NavLink>
        )}
        <NavLink to="/product" onClick={loadUser}>
          <li>Product</li>
        </NavLink>
        <NavLink to="/mypage">{currentUser.u_name}</NavLink>
      </ul>
    </>
  );
};

export default MainNav;
