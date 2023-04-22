import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "../pages/ErrorPage";
import RootLayout from "./RouteLayout";

import Home from "../pages/Home";
import Register from "../pages/Register";
import Profile from "../pages/Profile";

// Loaders
import { loader as profileLoader } from "../pages/Profile";

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
        element: <Profile />,
        loader: profileLoader
      }
    ]
  }
]);
