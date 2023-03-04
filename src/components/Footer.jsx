import React from "react";
import logo from "../data/logo M.png";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col footercol bg-blue-500 items-center justify-items-center ">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-row justify-center items-center ">
            <p className="w-full text-left font-semibold md:text-2xl mb-2 md:pl-8 pl-10 text-white mt-14 pb-10">
              Hit the ground running with a minimalist look.
            </p>

            <div className="md:mr-1 mr-6 ">
              <p className="flex text text-center bg-white text-black px-8">
                <button className="text-center font-bold">Learn More</button>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* footer starts */}
      <div className="grid md:grid-cols-1 bg-black items-center justify-items-center gap-5 ">
        <div className="order-2 md:order-1 flex flex-col justify-center items-center ">
          <div className="flex flex-col justify-center pt-20 items-center">
            <img
              src={logo}
              className="h-20 w-20 md:ml-50 justify-center items-center"
            />
            <p className="w-full text-left font-semibold md:text-xl mb-2 md:pl-8 pl-10 pr-8 text-white mt-14 pb-2">
              Handcrafted in Chicago. Powered by StudioPress
            </p>
          </div>
          <p className="flex w-full justify-center items-center text-xl md:text-xl mb-2 md:pl-8 pl-10 pr-8 text-white pb-10">
            FACEBOOK -- TWITTER -- INSTAGRAM
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
