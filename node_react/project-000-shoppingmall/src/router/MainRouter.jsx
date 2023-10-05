import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";

import LoginPage from "../comps/user/LoginPage";
import Home from "../comps/home";
import JoinPage from "../comps/user/JoinPage";
import ProductList from "../comps/product/ProductList";
import AddItem from "../comps/product/AddItem";
import ProductDetail from "../comps/product/ProductDetail";

const MainRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { path: "", element: <Home /> },
        {
          path: "/join",
          element: <JoinPage />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/product",
          element: <ProductList />,
          children: [],
        },
        {
          path: "/addItem",
          element: <AddItem />,
        },
        { path: `/product/detail/:p_seq`, element: <ProductDetail /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default MainRouter;
