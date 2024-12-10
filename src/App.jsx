import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Error from "./pages/Error";
import Homepage from "./pages/Homepage";
import Search from "./pages/Search";
import Categories from "./pages/Categories";
import SingleGif from "./pages/SingleGif";
import Favorites from "./pages/Favorites";
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      { path: "/", element: <Homepage /> },
      { path: "/:categories", element: <Categories /> },
      { path: "/search/:query", element: <Search /> },
      { path: "/:type/:slug", element: <SingleGif /> },
      { path: "/favorites", element: <Favorites /> },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
