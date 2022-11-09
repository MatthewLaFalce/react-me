import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./routes/root";
import ErrorPage from "./routes/error-page";
import Home from "./routes/home";
import Github from "./routes/github";
import Experience from "./routes/experience";
import NoMatch from "./routes/noMatch";

import logger from "./services/logService";

import "./index.css";
import reportWebVitals from "./reportWebVitals";

logger.init();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Home /> },
          {
            path: "github",
            element: <Github />,
          },
          {
            path: "experience",
            element: <Experience />,
          },

          /* the rest of the routes */
          { path: "*", element: <NoMatch /> },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
