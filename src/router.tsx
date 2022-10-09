import MainComponent from "./components/main-component";
import { createBrowserRouter } from "react-router-dom";
import Catalogue from "./components/catalogue";
import SingleMeal from "./components/single-meal";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainComponent />,

    children: [
      {
        path: "",
        element: <Catalogue />,
        loader: async () => {
          return fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
        },
      },
      {
        path: "meal/:idMeal",
        loader: async (req) => {
          return fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${req.params.idMeal}`
          );
        },
        element: <SingleMeal />,
      },
    ],
  },
]);
export default router;
