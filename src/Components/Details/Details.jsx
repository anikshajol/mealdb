import React from "react";

const Details = ({ category }) => {
  console.log(category);
  const { strMealThumb } = category;

  return (
    <section className="">
      <div>
        <img style={{ width: "100%" }} src={strMealThumb} alt="" />
      </div>
    </section>
  );
};

export default Details;
