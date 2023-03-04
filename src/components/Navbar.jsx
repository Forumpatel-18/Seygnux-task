import React from "react";
import logo from "../data/logo M.png";
import { navLinks } from "../data/dummy.js";
import { BsSearch } from "react-icons/bs";
import Button from "./Button";
import { useState } from "react";
// import { useStateContext } from "../context/ContextProvider";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full fixed top-0 left-0 bg-white">
      <div className="md:flex justify-between items-center py-1 md:px-10 px-4">
        <div>
          <img src={logo} className=" h-20 w-20 rounded-full ml-2" />
        </div>
        <div
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <AiOutlineClose className="text-gray-900" />
          ) : (
            <FaBars className="text-gray-900" />
          )}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-5  absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20" : "top-[-490px]"
          }`}
        >
          {navLinks.map((link) => {
            const { id, url, text } = link;
            return (
              <li
                key={id}
                className="md:ml-8 text-xl font-semibold md:my-0 my-7"
              >
                <a
                  href={url}
                  className="text-black hover:text-amber-400 duration-500"
                >
                  {text}
                </a>
              </li>
            );
          })}
          <BsSearch className=" text-3xl mx-1 pl-2" />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
