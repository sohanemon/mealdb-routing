import MainComponent from "./components/main-component";
import { createBrowserRouter } from "react-router-dom";
import Catalogue from "./components/catalogue";
import SingleMeal from "./components/single-meal";
import { lazy, Suspense } from "react";
import Fallback from "./components/fallback";
const Videos = lazy(() => import("./components/videos/videos"));
const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Fallback />,
    element: <MainComponent />,

    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Fallback />}>
            <Catalogue />
          </Suspense>
        ),
        loader: async () => {
          return fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
        },
      },
      {
        path: "/contact",
        element: "",
      },
      {
        path: "/about",
        element: "",
      },
      {
        path: "meal/:idMeal",
        loader: async (req) => {
          return fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${req.params.idMeal}`
          );
        },
        element: (
          <Suspense fallback={<Fallback />}>
            <SingleMeal />
          </Suspense>
        ),
      },
      {
        path: "videos",
        loader: async () => {
          return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);
        },
        element: (
          <Suspense fallback={<Fallback />}>
            <Videos />
          </Suspense>
        ),
      },
    ],
  },
]);
export default router;
