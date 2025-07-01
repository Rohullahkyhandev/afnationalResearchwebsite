import App from "@/App";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Publications from "@/pages/Publications";
import ResearchAreas from "@/pages/ResearchAreas";
import International from "@/pages/International";
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
        path: "/about",
        element: <About />,
      },
      {
        path: "/publications",
        element: <Publications />,
      },
      {
        path: "/research-areas",
        element: <ResearchAreas />,
      },
      {
        path: "/international",
        element: <International />,
      },
      {
        path: "/request-passage",
        element: <PassageRequestForm />,
      },
    ],
  },
]);

export default router;
