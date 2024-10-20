import { createBrowserRouter } from "react-router-dom";
import HomePages from "../pages/home_page";
import MovieDetailPages from "../pages/movie_detail";
import GuestProfilePages from "../pages/guest_profile_page";
import ProfilePages from "../pages/profile_page";
import SignInPages from "../pages/auth/sign_in";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePages />,
  },
  {
    path: "/movie/:year/:id/detail",
    element: <MovieDetailPages />,
  },
  {
    path: "/guest-profile",
    element: <GuestProfilePages />,
  },
  {
    path: "/profile",
    element: <ProfilePages />,
  },
  {
    path: "/sign-in",
    element: <SignInPages />,
  },
]);
