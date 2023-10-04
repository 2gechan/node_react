import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";

import LoginPage from "../comps/user/LoginPage";
import Home from "../comps/home";
import JoinPage from "../comps/user/JoinPage";
import ProductList from "../comps/product/ProductList";
import AddItem from "../comps/product/AddItem";

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
        },
        {
          path: "/addItem",
          element: <AddItem />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default MainRouter;
