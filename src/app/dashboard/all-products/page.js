'use client'

import Product from "@/Components/Products/Product";
import { getAllProducts } from "@/hooks/useProduct";

const page = () => {
    const { products, error, isLoading } = getAllProducts();

    if (isLoading) {
        return <p>Loading.......</p>
    }

    return (
        <main className="">
            <h3 className="text-2xl font-semibold text-center py-5">All Product</h3>
            <div className="grid grid-cols-4 gap-6">
                {
                    products.map(product => <Product key={product.id} product={product} />)
                }
            </div>
        </main>
    );
};

export default page;