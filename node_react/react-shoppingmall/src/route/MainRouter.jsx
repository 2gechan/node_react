import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "../App";
import BestItem from "../components/BestItem";
import ShopMain from "../components/ShopMain";
import ShopLogin from "../components/user/ShopLogin";
import ShopJoin from "../components/user/ShopJoin";
import axios from "axios";
import { useState, useEffect } from "react";
import MyPage from "../components/user/MyPage";
import ShopCart from "../components/user/ShopCart";
// import { InitUser } from "../models/InitUser";

const MainRouter = () => {
  const [user, setUser] = useState({});
  const [currentUser, setCurrentUser] = useState({});

  const joinInputChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(name, value);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "",
          element: <ShopMain useState={useState} useEffect={useEffect} />,
        },
        { path: "/best", element: <BestItem /> },
        {
          path: "/login",
          element: (
            <ShopLogin
              axios={axios}
              useState={useState}
              // currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          ),
        },
        {
          path: "/join",
          element: (
            <ShopJoin
              user={user}
              setUser={setUser}
              axios={axios}
              joinInputChangeHandler={joinInputChangeHandler}
            />
          ),
        },
        {
          path: "/mypage",
          element: (
            <MyPage
              axios={axios}
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
              useEffect={useEffect}
            />
          ),
        },
        { path: "/cart", element: <ShopCart /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default MainRouter;
