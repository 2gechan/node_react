import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "../App";
import BestItem from "../components/BestItem";
import ShopMain from "../components/ShopMain";
import ShopLogin from "../components/user/ShopLogin";
import ShopJoin from "../components/user/ShopJoin";
import axios from "axios";
import { useState, useEffect } from "react";
import MyPage from "../components/user/MyPage";
// import { InitUser } from "../models/InitUser";

const MainRouter = () => {
  const [user, setUser] = useState({});

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
          element: <ShopLogin axios={axios} useState={useState} />,
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
        { path: "/mypage", element: <MyPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default MainRouter;
