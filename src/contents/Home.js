import React from "react";
import NavigasiBar from "./NavigasiBar";

const Home = () => {
  return (
    <div id="des" className=" bg-hero py-4 w-full h-full">
      <NavigasiBar />

      <div className=" grid grid-cols-1 lg:grid-cols-2 max-w-5xl mx-auto py-6 lg:pt-20 ">
        <div className=" order-2 lg:order-1 text-white font-exo space-y-4">
          <h1 className=" flex justify-center lg:justify-start font-exo text-2xl uppercase">
            So, you want to travel to
          </h1>
          <h1 className=" flex justify-center lg:justify-start font-exo text-9xl uppercase">
            Space
          </h1>
          <p className=" text-justify lg:text-left font-exo px-4 lg:px-0">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className=" order-1 lg:order-2 flex items-center justify-center py-8 lg:py-0">
          <div className=" font-exo tracking-widest flex justify-center cursor-pointer hover:scale-125 hover:opacity-50 duration-300 items-center h-72 w-72 rounded-full bg-white text-black uppercase">
            <a href="#" className=" animate-spin-slow2">
              Explore
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
