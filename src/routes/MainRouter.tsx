import { createBrowserRouter } from "react-router-dom";

import RootLayout from "./RouteLayout";

// pages
import ErrorPage from "@pages/ErrorPage";
import Home from "@pages/Home";
import ProfileRegistration from "@pages/ProfileRegistration";
import Register from "@pages/Register";

// loaders
import { loader as profileLoader } from "@pages/ProfileRegistration";

export const MainRouter = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/profile",
        element: <ProfileRegistration />,
        loader: profileLoader
      }
    ]
  }
]);
