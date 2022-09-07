import React from "react";
import NavigasiBar from "./NavigasiBar";

const Home = () => {
  return (
    <div id="home" className="bg-hero w-full h-full py-4">
      <NavigasiBar />
      <div className=" box-border mx-auto max-w-5xl text-white grid grid-cols-1 lg:grid-cols-2 lg:py-2 ">
        <div className=" order-2 lg:order-1 flex items-center justify-center lg:justify-start py-8 lg:py-20 ">
          <div className=" space-y-5 font-exo w-11/12">
            <h1 className=" flex  items-center justify-center lg:justify-start max-w-5xl mx-auto text-white text-2xl tracking-widest font-exo py-4">
              So, you want to travel to
            </h1>
            <h1 className=" flex  items-center justify-center lg:justify-start font-semibold lg:text-left text-8xl lg:text-9xl tracking-widest uppercase">
              Space
            </h1>
            <p className=" lg:text-left leading-4 text-base text-justify text-slate-300">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
        </div>
        <div className=" order-1 lg:order-2 flex justify-center items-center">
          <div className=" font-exo tracking-widest flex justify-center cursor-pointer hover:scale-125 hover:opacity-50 duration-300 items-center h-52 w-52 rounded-full bg-white text-black uppercase">
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
