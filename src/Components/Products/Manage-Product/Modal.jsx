import { forwardRef, useRef } from "react";

const Modal = ({ closeModal, updateData, handelSubmit }, ref) => {
  const formRef = useRef(null);

  return (
    <dialog ref={ref} className="w-96 border border-gray-400 shadow-xl rounded-md p-4    transition delay-700 duration-300 ease-in-out ">
      <div className="text-right">
        <button
          className="border border-red-700 bg-red-500 text-white p-1 rounded-md"
          onClick={() => {
            closeModal();
            formRef.current.reset();
          }}
        >
          Close
        </button>
      </div>

      <form onSubmit={handelSubmit} className="my-5 space-y-4">
        <input className="border-2 w-full rounded-md p-2 border-blue-500 focus:border-red-500" type="text" name="title" placeholder="title" defaultValue={updateData?.title} />
        <input className="border-2 w-full rounded-md p-2 border-blue-500 focus:border-red-500 " type="number" name="price" placeholder="price" defaultValue={updateData?.price} />
        <input type="submit" className="border border-blue-700 cursor-pointer bg-blue-500 text-white p-1 rounded-md" value="submit" />
      </form>
    </dialog>
  );
};

export default forwardRef(Modal);
