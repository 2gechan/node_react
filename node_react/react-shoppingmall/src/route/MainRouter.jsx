import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App";
import BestItem from "../components/BestItem";
import ShopMain from "../components/ShopMain";

const MainRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { path: "", element: <ShopMain /> },
        { path: "/best", element: <BestItem /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default MainRouter;
