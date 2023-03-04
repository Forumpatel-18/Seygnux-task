import React from "react";

const Button = (props) => {
  return (
    <btn className="text-white hover:bg-amber-500 cursor-pointer duration-500 py-2 px-6 rounded-full md:ml-8 bg-black ">
      {props.children}
    </btn>
  );
};

export default Button;
