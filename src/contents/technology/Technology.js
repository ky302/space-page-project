import React, { useState } from "react";
import Launcher from "../../assets/technology/image-launch-vehicle-portrait.jpg";
import SpacePort from "../../assets/technology/image-spaceport-portrait.jpg";
import Capsule from "../../assets/technology/image-space-capsule-portrait.jpg";
import NavigasiBar from "../NavigasiBar";
import { TechData } from "./TechnologyData";

const Technology = () => {
  const images = {
    "Launcher Vechile": Launcher,
    Spaceport: SpacePort,
    "Space Capsule": Capsule,
  };

  const [techImg, setTechImg] = useState(0);
  const page = TechData[techImg];
  return (
    <div id="tech" className=" bg-techb py-4 w-full h-full">
      <NavigasiBar />
      <h1 className=" flex  items-center justify-center lg:justify-start max-w-5xl mx-auto text-white text-2xl tracking-widest font-exo py-4">
        03 Space launch 101
      </h1>
      <div className=" grid grid-cols-1 lg:grid-cols-2 max-w-5xl mx-auto py-6 ">
        <div className=" order-2 lg:order-1 flex gap-8 justify-center items-center rounded-xl relative">
          <div className="flex flex-col gap-y-8 text-white pt-28 lg:pt-0 pl-6 lg:pl-0 text-2xl">
            <button
              className={`${
                techImg === 0 ? "active" : ""
              } border-1 rounded-full w-10 h-10 lg:w-20 lg:h-20 focus:backdrop-blur-md hover:bg-white/80 hover:text-black focus:bg-white/80 focus:text-black outline `}
              onClick={() => {
                setTechImg(0);
              }}
            >
              <span className=" font-exo text-4xl">1</span>
            </button>
            <button
              className={`${
                techImg === 1 ? "active" : ""
              }border-1 rounded-full w-10 h-10 lg:w-20 lg:h-20 focus:backdrop-blur-md hover:bg-white/80 hover:text-black focus:bg-white/80 focus:text-black outline`}
              onClick={() => {
                setTechImg(1);
              }}
            >
              <span className="font-exo text-4xl">2</span>
            </button>
            <button
              className={`${
                techImg === 2 ? "active" : ""
              }border-1 rounded-full w-10 h-10 lg:w-20 lg:h-20 focus:backdrop-blur-md hover:bg-white/80 hover:text-black focus:bg-white/80 focus:text-black outline`}
              onClick={() => {
                setTechImg(2);
              }}
            >
              <span className="font-exo text-4xl">3</span>
            </button>
          </div>

          <div className="flex flex-col text-justify pr-6 lg:pr-0 text-white space-y-6 pt-8 lg:pt-0">
            <h2 className=" text-xl font-exo text-slate-400">{page.termin}</h2>
            <h1 className=" uppercase font-exo text-4xl">{page.tech_name}</h1>
            <p className=" font-exo">{page.tech_text}</p>
          </div>
        </div>
        <div className="order-1 lg:order-2 flex justify-center items-center">
          <img
            src={images[page.tech_name]}
            alt="moon"
            className=" w-80 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Technology;
