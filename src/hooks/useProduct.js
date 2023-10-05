import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const getAllProducts = (categoryId) => {
    const url = categoryId ? `http://localhost:5000/products/?categoryId=${categoryId}` : "http://localhost:5000/products";
    const { data: products = [], error, isValidating } = useSWR(url, fetcher);
    return {
        products,
        error,
        isLoading: !products && !error,
        isValidating,
    };
};
