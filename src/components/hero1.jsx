import React from "react";
// import { Parallax, Background } from 'react-parallax';
import { Parallax } from "react-scroll-parallax";
import { ParallaxProvider } from "react-scroll-parallax";
import { ParallaxBanner } from "react-scroll-parallax";
import { ParallaxBannerLayer } from "react-scroll-parallax";
import img from "../data/hero1.jpg";
import Navbar from "./Navbar";

const insideStyles = {
  color: "#fff",
  padding: 20,
  position: "absolute",
  top: "60%",
  left: "35%",
  transform: "translate(-50%,-50%)",
};

const hero1 = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="h-25">
        <ParallaxBanner
          layers={[
            {
              image:
                "https://cdn.pixabay.com/photo/2016/11/29/08/01/architecture-1868272_960_720.jpg",
              speed: -50,
            },
          ]}
          className="aspect-[3/1]"
        >
          <div className="absolute inset-0 flex ml-7 pt-15">
            <div className="grid m-0 md:grid-cols-2 items-center justify-items-center pb-32 pt-32  ">
              <div className="order-2 m-0 md:order-1 flex flex-col justify-center items-center ">
                <p className="w-full text-left  font-bold md:text-6xl text-6xl mb-2 md:pl-52 pl-20 text-white ">
                  We crush
                </p>
                <p className="w-full text-left font-bold md:text-6xl text-6xl mb-2 md:pl-52 pl-20  text-white ">
                  minimal
                </p>
                <p className="w-full text-left  font-bold md:text-6xl text-6xl mb-2 md:pl-52 pl-20   text-white">
                  design.
                </p>
                <p className="w-full  mb-2 md:pl-52 pl-10 text-left pt-2 text-md text-white">
                  <b>MONOCHROME</b> is a creative agency based in Chicago. We{" "}
                  <br />
                  developed the Genesis Framework and build mobile-optimized{" "}
                  <br />
                  themes for WordPress.
                </p>
              </div>
            </div>
          </div>
        </ParallaxBanner>
      </div>
    </div>
  );
};

export default hero1;
