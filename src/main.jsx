import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AboutPage, ContactPage, HomePage, PortfolioPage } from "./Components/index.js";

const router = createBrowserRouter([
  {
    path: "/Hitesh-Portfolio/",
    element: <HomePage />,
  },
  {
    path: "/Hitesh-Portfolio/about",
    element: <AboutPage />,
  },
  {
    path: "/Hitesh-Portfolio/portfolio",
    element: <PortfolioPage />,
  },
  {
    path: "/Hitesh-Portfolio/contact",
    element: <ContactPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
