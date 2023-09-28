import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";

import LoginPage from "../comps/user/LoginPage";
import Home from "../comps/home";
import JoinPage from "../comps/user/JoinPage";

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
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default MainRouter;
