import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Product = ({ product, openModal, handelDelete }) => {
  return (
    <div className=' border border-gray-400 rounded-md shadow-lg p-6'>
      <h2>Category Name: {product.title}</h2>
      <Image width={100} height={100} src={product.imageUrl} alt='' />
      <p>Price: {product?.price}</p>
      <div className='flex items-center justify-between'>
        <button className='text-white p-2  bg-blue-500 rounded-md border border-blue-600 mt-2'>
          <Link href={`/products/${product.id}`}> View Detail </Link>
        </button>
        <button onClick={() => openModal(product)} className='text-white p-2  bg-blue-500 rounded-md border border-blue-600 mt-2'>
          Update
        </button>
        <button onClick={() => handelDelete(product?.id)} className='text-white p-2  bg-blue-500 rounded-md border border-blue-600 mt-2'>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Product;
