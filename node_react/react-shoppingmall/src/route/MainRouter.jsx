import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App";
import BestItem from "../components/BestItem";
import ShopMain from "../components/ShopMain";
import ShopLogin from "../components/user/ShopLogin";

const MainRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { path: "", element: <ShopMain /> },
        { path: "/best", element: <BestItem /> },
        { path: "/login", element: <ShopLogin /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default MainRouter;
