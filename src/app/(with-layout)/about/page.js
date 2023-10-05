import image2 from "@/asset/image1.jpg";
import image1 from "@/asset/image2.jpg";
import Image from "next/image";


export const metadata = {
    title: "About"
}

const AboutPage = () => {
    return (
        <div>
            <h2 className='text-4xl font-bold text-blue-500 text-center'>This Is About Page</h2>

            <Image className="mx-auto py-10" placeholder="blur" src={image2} alt="" />
            <Image height={600} width={400} className="mx-auto py-10" placeholder="data:image/webp;base64,UklGRhQCAABXRUJQVlA4WAoAAAAgAAAAAgAAAQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggJgAAALABAJ0BKgMAAgADgFoljAJ0AQ8KWLAA/umw/cPv9PoNIShi3eAA" src="/image1.jpg" alt="" />
            <Image width={600} height={400} className="mx-auto py-10" src="https://png.pngtree.com/thumb_back/fh260/background/20201225/pngtree-natural-red-sunset-sky-beauty-image_515131.jpg" alt="" />
        </div>
    );
};

export default AboutPage;