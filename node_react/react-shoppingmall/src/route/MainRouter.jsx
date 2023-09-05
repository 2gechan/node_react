import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App";
import BestItem from "../components/BestItem";
import ShopMain from "../components/ShopMain";
import ShopLogin from "../components/user/ShopLogin";
import ShopJoin from "../components/user/ShopJoin";
import { useState } from "react";
import { InitUser } from "../models/InitUser";

const MainRouter = () => {
  const [user, setUser] = useState({ InitUser });

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { path: "", element: <ShopMain /> },
        { path: "/best", element: <BestItem /> },
        { path: "/login", element: <ShopLogin /> },
        { path: "/join", element: <ShopJoin user={user} setUser={setUser} /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default MainRouter;
