import { getAllCategory } from "@/utlis/productApi";
import React from "react";
import Category from "./Category";

const Categories = async () => {
  const categories = await getAllCategory();

  return (
    <>
      <h4 className="text-center text-2xl font-semibold my-5">Total Categories: {categories.length}</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </div>
    </>
  );
};

export default Categories;
