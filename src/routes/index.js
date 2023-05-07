import React from "react";
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "@pages/other/index";
import Index from "@pages/index/index";
import { loader as rootLoader } from "@routes/loader";

const router = createHashRouter([
  {
    path: "/",
    element: <Index />,
    loader: rootLoader,
    errorElement: <ErrorPage />,
  },
]);

const root = () => {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

export default root;
