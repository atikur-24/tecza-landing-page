import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFound from "../components/NotFound/NotFound";
import MainLayout from "../layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <App />,
      },
    ],
  },
]);

export default router;
