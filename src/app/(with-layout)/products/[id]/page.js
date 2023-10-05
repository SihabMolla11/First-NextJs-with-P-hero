import { getSingleProduct } from "@/utlis/productApi";
import Image from "next/image";

const ProductDetailPage = async ({ params }) => {
    const product = await getSingleProduct(params.id)
    return (
        <div className="container mx-auto">
            <h3 className="text-3xl font-medium text-center">{product.title}</h3>
            <Image width={800} height={600} className=" w-full" src={product.imageUrl} alt="" />
        </div>
    );
};

export default ProductDetailPage;