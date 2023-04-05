import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "../pages/ErrorPage";
import RootLayout from "./RouteLayout";

import Home from "../pages/Home";
import { RegisterForm } from "../pages/RegisterForm";

import "../index.css";

export const MainRouter = createBrowserRouter([
	{
		path: "/",
		errorElement: <ErrorPage />,
		element: <RootLayout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/register",
				element: <RegisterForm />,
			},
		],
	},
]);
