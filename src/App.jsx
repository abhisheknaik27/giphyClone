import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Error from "./pages/Error";
import Homepage from "./pages/Homepage";
import Search from "./pages/Search";
import Categories from "./pages/Categories";
import SingleGif from "./pages/SingleGif";
import GifProvider from "./context/GifContext";
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      { path: "/", element: <Homepage /> },
      { path: "/:categories", element: <Categories /> },
      { path: "/search/:query", element: <Search /> },
      { path: "/:type/:slug", element: <SingleGif /> },
    ],
  },
]);
const App = () => {
  return (
    <GifProvider>
      <RouterProvider router={router} />
    </GifProvider>
  );
};

export default App;
