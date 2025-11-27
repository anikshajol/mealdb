import React from "react";
import { useLoaderData } from "react-router";
import Details from "../Details/Details";
import "./Home.css";

const Home = () => {
  const meals = useLoaderData();
  console.log(meals);

  return (
    <div className="random-meals">
      {meals.map((category) => (
        <Details key={category.idMeal} category={category}></Details>
      ))}
    </div>
  );
};

export default Home;
