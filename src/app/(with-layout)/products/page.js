
import Products from "@/Components/Products/Products";
import { getAllProducts } from "@/utlis/productApi";

const ProductPage = async ({ searchParams }) => {

    const products = await getAllProducts(searchParams.categoryId)

    return (
        <div className="container mx-auto">
            this is products page
            <Products products={products} />
        </div>
    );
};

export default ProductPage;