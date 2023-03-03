import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  Username,
  PagenotFound,
  Password,
  Recovery,
  Register,
  Reset,
  Profile,
} from "./components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Username />,
  },
  {
    path: "/password",
    element: <Password />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/recovery",
    element: <Recovery />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/reset",
    element: <Reset />,
  },
  {
    path: "*",
    element: <PagenotFound />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <main>
    <RouterProvider router={router}></RouterProvider>
  </main>
);
