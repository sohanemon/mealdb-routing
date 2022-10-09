import MainComponent from "./components/main-component";
import { createBrowserRouter } from "react-router-dom";
import Catalogue from "./components/catalogue";
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
    ],
  },
]);
export default router;
