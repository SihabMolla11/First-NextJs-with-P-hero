'use client'

import { useEffect } from "react";

const ProductError = ({ error, reset }) => {

    useEffect(() => {
        console.error(error);
    }, [error])


    return (
        <div>
            <h2 className="text-red-500 text-center">{error.message || "some thing is wrong!"}</h2>
            <button type="button" onClick={() => reset()}>Reset</button>
        </div>
    );
};

export default ProductError;