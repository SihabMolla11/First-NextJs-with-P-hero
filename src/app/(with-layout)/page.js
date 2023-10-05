import Categories from "@/Components/Home/Categories";
import PopularProduct from "@/Components/Home/PopularProduct";
import { Suspense } from "react";

export const revalidate = 5;

const HomePage = () => {
  return (
    <main className="container mx-auto">
      <h2 className='text-4xl font-bold text-blue-500 text-center'>This Is Home Page</h2>
      <Categories />
      <Suspense fallback={
        <p>Loading......</p>
      }>
        <PopularProduct />
      </Suspense>
    </main>
  );
};

export default HomePage;