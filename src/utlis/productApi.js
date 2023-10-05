import wait from "./wait";


export const getAllCategory = async () => {
    const res = await fetch(`${process.env.BASEAPI}/categories`);
    return res.json();
};

export const getAllProducts = async (categoryId) => {
    let url = `${process.env.BASEAPI}/products`;
    if (categoryId) {
        url += `?categoryId=${categoryId}`
    }
    const res = await fetch(url, {
        cache: "no-cache"
    });
    return res.json()
};

export const getSingleProduct = async (id) => {
    await wait();
    const res = await fetch(`${process.env.BASEAPI}/products/${id}`, {
        cache: "no-cache"
    });
    return res.json();
};