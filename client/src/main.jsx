import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Search from "./pages/Search";
import CreateUser from "./pages/CreateUser";
import Login from "./pages/Login";
import ChangeMdp from "./pages/ChangeMdp";
import CvChange from "./pages/CvChange";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/createuser",
    element: <CreateUser />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/changepassword",
    element: <ChangeMdp />,
  },
  {
    path: "/cvchange",
    element: <CvChange />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
