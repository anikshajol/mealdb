import { Children, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Components/Home/Home.jsx";
import Details from "./Components/Details/Details.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/",
        loader: async () => {
          const meals = [];

          for (let i = 0; i < 6; i++) {
            const res = await fetch(
              "https://www.themealdb.com/api/json/v1/1/random.php"
            );
            const data = await res.json();
            meals.push(data.meals[0]);
          }
          return meals;
        },
        Component: Home,
      },
      {
        path: "/details",

        Component: Details,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
