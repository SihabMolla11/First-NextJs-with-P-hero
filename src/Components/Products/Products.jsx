'use client';

import { useRouter } from 'next/navigation';
import { useRef, useState, useTransition } from 'react';
import Modal from './Manage-Product/Modal';
import Product from './Product';

const Products = ({ products }) => {
  const modalRef = useRef(null);
  const [updateData, setUpdateData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const isLoading = isPending || loading;

  const openModal = (product) => {
    setUpdateData(product);
    modalRef.current.showModal();
  };

  const closeModal = () => {
    setUpdateData(null);
    modalRef.current.close();
  };

  const handelSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const title = event.target.title.value;
    const price = event.target.price.value;
    const data = { title, price };
    if (title && price) {
      const res = await fetch(`http://localhost:5000/products/${updateData?.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      console.log(result);
      event.target.reset();
      startTransition(() => {
        router.refresh();
      });
      closeModal();
    }
    setLoading(false);
  };

  const handelDelete = async (id) => {
    setLoading(true);
    const res = await fetch(`http://localhost:5000/products/${id}`, {
      method: 'DELETE',
      headers: { 'Content-type': 'application/json' },
    });
    const result = res.json();
    startTransition(() => {
      router.refresh();
    });
    setLoading(false);
    console.log(result);
  };

  return (
    <>
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ${isLoading ? 'opacity-50' : 'opacity-100'}`}>
        {products.map((product) => (
          <Product key={product.id} product={product} openModal={openModal} handelDelete={handelDelete} />
        ))}
      </div>
      <Modal closeModal={closeModal} ref={modalRef} updateData={updateData} handelSubmit={handelSubmit} />
    </>
  );
};

export default Products;
