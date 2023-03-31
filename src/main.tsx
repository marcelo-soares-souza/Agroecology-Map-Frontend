import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { RouterProvider } from "react-router-dom";

import { MainRouter } from "./routes/MainRouter";

import "./index.css";

const portalDiv = document.getElementById("root")!;

ReactDOM.createRoot(portalDiv).render(
  <StrictMode>
    <RouterProvider router={MainRouter} />
  </StrictMode>
);
