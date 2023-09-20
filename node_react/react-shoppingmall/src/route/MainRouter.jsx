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

const MainRouter = () => {
  const [currentUser, setCurrentUser] = useState({});

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
          element: <ShopJoin axios={axios} />,
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
