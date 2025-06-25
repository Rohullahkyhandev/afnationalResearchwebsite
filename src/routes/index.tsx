import App from "@/App";
import Home from "@/pages/Home";
import { PassageRequestForm } from "@/pages/RequestPage";
import React from "react";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App  />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
       {
        path: "/request-passage",
        element: <PassageRequestForm />,
      },
    ],
  },
]);

export default router;
