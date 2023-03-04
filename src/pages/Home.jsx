import React from "react";
import { steps } from "../data/dummy.js";
import { names } from "../data/dummy.js";

const Home = () => {
  return (
    <div className="px-3 py-5 md:py-1 mt-20 ">
      <div className="grid md:grid-cols-2 bg-zinc-800 items-center justify-items-center gap-5 pb-32 pt-32  ">
        <div className="order-2 md:order-1 flex flex-col justify-center items-center ">
          <p className="w-full text-left  font-bold md:text-6xl text-5xl mb-2 md:pl-52 pl-10 text-white ">
            We crush
          </p>
          <p className="w-full text-left font-bold md:text-6xl text-5xl mb-2 md:pl-52 pl-10  text-white ">
            minimal
          </p>
          <p className="w-full text-left  font-bold md:text-6xl text-5xl mb-2 md:pl-52 pl-10   text-white">
            design.
          </p>
          <p className="w-full md:text-base mb-2 md:pl-52 pl-10 text-left pt-2 text-white">
            MONOCHROME is a creative agency based in Chicago. We developed the
            Genesis Framework and build mobile-optimized applications themes for
            WordPress.
          </p>
        </div>
      </div>
      <div className="flex flex-col pt-16">
        <p className="text-left flex text-5xl font-bold pb-2 md:justify-start text-black md:pl-52 pl-20">
          We build experience.
        </p>
        <p className="flex text-xl pb-8 md:justify-start text-black md:pl-52 pl-20 ">
          A minimalist approach is the only way to design a website.
        </p>
        <p className="flex text-2xl pb-8 md:justify-start md:pl-52 pl-20 text-black text-left md:visible ">
          __
        </p>
        <div className="flex md:flex-row flex-col justify-between items-center md:pl-44 md:pr-72 64 pt-2 ">
          {steps.map((step) => {
            const { id, text, info } = step;
            return (
              <div
                key={id}
                className="flex flex-col justify-center items-center m-2 pl-2 md:basis-1/4"
              >
                <p className="text-2xl mt-2 mr-24 text-left ">{text}</p>
                <p className="md:text-lg text-left font-light m-2 pb-4">
                  {info}
                </p>
                <div className="mr-16">
                  <p className=" flex bg-black text-white px-2 py-2 mb-12">
                    <button className="text-left text-xl font-bold">
                      Learn More
                    </button>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="grid md:grid-cols-1  bg-zinc-800  items-center justify-items-center gap-5 pb-32 pt-22  ">
        <div className="order-2 md:order-1 flex flex-col justify-center items-center ">
          <p className="w-full text-left text-4xl font-bold md:text-5xl mb-2 md:pl-0 pl-10 text-white mt-20">
            We design brands.
          </p>
          <p className="w-full text-base md:text-xl mb-2 md:pl-0 pl-10 text-left  text-white">
            A simple look is all you need to crush your competition.
          </p>
          <p className="w-full text-2xl md:text-xl mb-2 md:pl-0 pl-10 text-left  text-white">
            __
          </p>
          <div className="flex md:flex-row flex-col ">
            {names.map((items) => {
              const { id, name } = items;
              return (
                <div
                  key={id}
                  className="flex flex-col justify-center items-center m-2 pl-2"
                >
                  <p className="text-2xl mt-2 text-left text-white">{name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex flex-col pt-36 pb-12">
        <p className="text-left flex text-5xl font-bold pb-2 md:justify-start text-black md:pl-48 pl-20">
          We create stories.
        </p>
        <p className="flex text-xl pb-8 md:justify-start text-black md:pl-48 pl-20 ">
          A killer narrative will turn your readers into raving fans.
        </p>
        <p className="flex text-2xl pb-16 md:justify-start md:pl-48 pl-20 text-black text-left md:visible ">
          __
        </p>
        <div className="flex items-center justify-start pl-8">
          {/* 1 */}
          <div className="flex md:flex-row flex-col items-center justify-center">
            <div className="cursor-pointer items-center justify-center md:pl-40 md:pr-42">
              <div className="h-96 w-80 md:pb-32 pb-20">
                <img
                  className="h-full w-full object-cover pb-2"
                  src="https://images.unsplash.com/photo-1485797532868-c4401a435f08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGJ1aWxkaW5ncyUyMGNvcm5lciUyMGJsYWNrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
                <p className="p-1 font-semibold">OVERCOMING CREATIVE BLOCK</p>
                <p className="p-1">Brian Gardner. May 1, 2017</p>
              </div>
            </div>
            <div className=" cursor-pointer items-center justify-center md:pl-40 md:pr-42">
              <div className="h-96 w-80 pb-32">
                <img
                  className="h-full w-full object-cover"
                  src="https://images.unsplash.com/photo-1512403754473-27835f7b9984?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80"
                  alt=""
                />
                <p className="p-1 font-semibold">OVERCOMING CREATIVE BLOCK</p>
                <p className="p-1">Brian Gardner. May 1, 2017</p>
              </div>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="flex items-center justify-start pl-8 pt-10">
          <div className="flex md:flex-row flex-col items-center justify-cente">
            <div className="cursor-pointer items-center justify-center md:pl-40 md:pr-42">
              <div className="h-96 w-80 md:pb-32 pb-20">
                <img
                  className="h-full w-full object-cover"
                  src="https://images.unsplash.com/photo-1646339154705-1f8e30c53aa0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGJ1aWxkaW5ncyUyMGNvcm5lciUyMGJsYWNrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
                <p className="p-1 font-semibold">OVERCOMING CREATIVE BLOCK</p>
                <p className="p-1">Brian Gardner. May 1, 2017</p>
              </div>
            </div>
            <div className="cursor-pointer items-center justify-center md:pl-40 md:pr-42 ">
              <div className="h-96 w-80 pb-32">
                <img
                  className="h-full w-full object-cover"
                  src="https://images.unsplash.com/photo-1532363285104-a1160a7cc855?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
                <p className="p-1 font-semibold">OVERCOMING CREATIVE BLOCK</p>
                <p className="p-1">Brian Gardner. May 1, 2017</p>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default Home;
