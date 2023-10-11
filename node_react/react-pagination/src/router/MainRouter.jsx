import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App";
import AddBoard from "../comps/AddBoard";
import MainPage from "../comps/MainPage";

const MainRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { path: "", element: <MainPage /> },
        {
          path: "/add",
          element: <AddBoard />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default MainRouter;
