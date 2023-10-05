import { getBlogData, getSingleBlogData } from "@/utlis/loadBlogData";

export const generateMetaData = async ({ params }) => {
    const { title } = await getSingleBlogData(params.id);
    return {
        title: title,
    };
};

export const generateStaticParams = async () => {
    const blogs = await getBlogData();
    return blogs.map(({ id }) => ({ id: id.toString(), }));
}

const SinglePageBlock = async ({ params }) => {
    // const [year, id] = params?.segments || []
    // const params2 = useParams();
    // const searchParams2 = useSearchParams();

    const data = await getSingleBlogData(params.id);



    return (
        <div className="container mx-auto">
            <p>this is single page block</p>

            {/* <p className='text-xl'> page year: {year || new Date().getFullYear()} for: {id || new Date().getDate()}</p> */}
            <h2 className="text-2xl text-center">blog Id: {data.id}</h2>
            <h4 className="text-xl my-5"><span className="font-bold">Title:</span> {data.title}</h4>
            <p>{data.body}</p>
        </div>
    );
};

export default SinglePageBlock;