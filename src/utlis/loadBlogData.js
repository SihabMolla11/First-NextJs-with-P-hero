export const getBlogData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        cache: "force-cache",
    });
    return res.json();
};

export const getSingleBlogData = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        cache: "no-cache"
    });
    return res.json();
};