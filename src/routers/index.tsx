import { createBrowserRouter } from "react-router-dom";
import HomePages from "../pages/homepage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePages />,
  },
]);
