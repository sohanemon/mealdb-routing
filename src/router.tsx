import MainComponent from "./components/main-component";
import { createBrowserRouter } from "react-router-dom";
import Catalogue from "./components/catalogue";
import SingleMeal from "./components/single-meal";
import { lazy, Suspense } from "react";
import Fallback from "./components/fallback";
import Categories from "./components/categories";
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
            <Catalogue main={true} />
          </Suspense>
        ),
        loader: async () => {
          return fetch(
            "https://www.themealdb.com/api/json/v1/1/search.php?s=beef"
          );
        },
      },
      {
        path: "/category/:category",
        element: (
          <Suspense fallback={<Fallback />}>
            <Catalogue main={false} />
          </Suspense>
        ),
        loader: async ({ params }) => {
          return fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.category}`
          );
        },
      },
      {
        path: "/area/:area",
        element: (
          <Suspense fallback={<Fallback />}>
            <Catalogue main={false} />
          </Suspense>
        ),
        loader: async ({ params }) => {
          return fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?a=${params.area}`
          );
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
          return fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=beef`
          );
        },
        element: (
          <Suspense fallback={<Fallback />}>
            <Videos />
          </Suspense>
        ),
      },
      {
        path: "Categories",
        loader: async () => {
          return fetch(
            `https://www.themealdb.com/api/json/v1/1/categories.php`
          );
        },
        element: (
          <Suspense fallback={<Fallback />}>
            <Categories />
          </Suspense>
        ),
      },
    ],
  },
]);
export default router;
