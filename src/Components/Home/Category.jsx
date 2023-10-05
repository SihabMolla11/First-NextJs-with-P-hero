import Image from "next/image";
import Link from "next/link";

const Category = ({ category }) => {
  return (
    <div className=" border border-gray-400 rounded-md shadow-lg p-6">
      <h2>Category Name: {category.name}</h2>
      <Image width={100} height={100} src={category.imageUrl} alt="" />
      <Link href={`/products?categoryId=${category.id}`}>
        <button className="text-white p-2  bg-blue-500 rounded-md border border-blue-600 mt-2">View Detail</button>
      </Link>
    </div>
  );
};

export default Category;
