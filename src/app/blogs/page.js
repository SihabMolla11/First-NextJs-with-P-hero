export const metadata = {
    title: 'Blog page',
    description: 'This is My First Next Js Project With P-Hero',
};

import { getBlogData } from "@/utlis/loadBlogData";
import Link from "next/link";
import { useRouter } from "next/navigation";

// const blogs = [
//     {
//         id: 1,
//         year: "2020",
//         title: "Blog 1",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sapiente consectetur illo optio ab pariatur obcaecati modi at suscipit labore."
//     },
//     {
//         id: 2,
//         year: "2010",
//         title: "Blog 2",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sapiente consectetur illo optio ab pariatur obcaecati modi at suscipit labore."
//     },
//     {
//         id: 3,
//         year: "2022",
//         title: "Blog 3",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sapiente consectetur illo optio ab pariatur obcaecati modi at suscipit labore."
//     },
//     {
//         id: 4,
//         year: "2019",
//         title: "Blog 4",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sapiente consectetur illo optio ab pariatur obcaecati modi at suscipit labore."
//     },
// ]


const BlogsPage = async () => {

    const blogs = await getBlogData();


    return (
        <div className="container mx-auto grid grid-cols-4 gap-4">
            {
                blogs?.map(({ id, body, title }) => <div key={id} className="bg-blue-500 text-white rounded-lg px-2">
                    <Link

                        // href={{
                        //     pathname: `/blogs/${title}/${id}`,
                        //     query: { title: title }
                        // }}
                        href={`blogs/${id}`}
                    >
                        <p>id: {id}</p>
                        <p>title: {title}</p>
                    </Link>
                </div>)
            }
        </div>
    );
};

export default BlogsPage;