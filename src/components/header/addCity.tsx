import React from "react";
import { IoAdd } from "react-icons/io5";

function AddCity({ setCityInputOpen }: any) {
  const handleOnClick = () => {
    setCityInputOpen(true);
  };
  return (
    <button className="h-fit hover:scale-125 hover:bg-white hover:bg-opacity-30 rounded-full duration-200">
      <IoAdd
        onClick={handleOnClick}
        className="text-2xl text-white cursor-pointer"
      />
    </button>
  );
}

export default AddCity;
