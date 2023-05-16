import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import ErrorPage from "./error-page";
import Impressum from "./routes/impressum";
import Home, { loader as homeLoader } from "./routes/Home";
import Add, { action as addAction } from "./routes/Add";
import { action as cardAction } from "./components/Card";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    action: cardAction,
    children: [
      {
        path: "",
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: "impressum",
        element: <Impressum />,
      },
      {
        path: "add",
        element: <Add />,
        action: addAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
