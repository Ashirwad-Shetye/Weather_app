import React from "react";
import { BiMenu } from "react-icons/bi";

function Menu() {
  return (
    <button className="h-fit hover:bg-white hover:bg-opacity-30 rounded-full duration-200">
      <BiMenu className="text-2xl cursor-pointer" />
    </button>
  );
}

export default Menu;
