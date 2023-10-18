import { NavLink, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser, resetCurrentUser } from "../store/CurrentUser";
import { useEffect, useState } from "react";
// import { useEffect } from "react";
const MainNav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.currentUser.currentUser);

  const [visible, setVisible] = useState(false);
  const [cart, setCart] = useState([]);

  const cartOn = () => {
    setVisible(true);
  };
  const cartOff = () => {
    if (visible) setVisible(false);
  };

  useEffect(() => {
    const loadCart = async () => {
      const res = await fetch("/selectCart", {
        method: "GET",
      });

      try {
        if (res.status === 200) {
          const data = await res.json();
          setCart([...data]);
          console.log(cart);
        } else {
          console.log("카트 데이터를 가져오는 데 실패했습니다.");
        }
      } catch (error) {}
    };
    loadCart();
  }, [currentUser]);

  const loadUser = async () => {
    try {
      const res = await fetch("/currentuser", {
        method: "GET",
      });

      if (res.ok) {
        const data = await res.json();
        dispatch(setCurrentUser(data));
        // console.log(user_cart);
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
        {currentUser.u_id ? (
          <>
            <NavLink to="/mypage">
              <li>{currentUser.u_name}</li>
            </NavLink>
            <NavLink to="/cart" onMouseOver={cartOn} onMouseLeave={cartOff}>
              <li>Cart</li>
              {visible ? (
                <div className="cart">
                  {cart.map((item) => {
                    return (
                      <div key={item.c_seq}>
                        <span>장바구니 번호 : {item.c_seq}</span>
                        <span>상품 번호 : {item.c_pseq}</span>
                        <span>상품 수량 : {item.c_amount}</span>
                      </div>
                    );
                  })}
                </div>
              ) : (
                ""
              )}
            </NavLink>
          </>
        ) : (
          ""
        )}
      </ul>
    </>
  );
};

export default MainNav;
