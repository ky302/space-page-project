import React from "react";
import NavigasiBar from "../NavigasiBar";
import { DestinationData } from "./DestinationData";
import moon from "../../assets/destination/image-moon.png";
import mars from "../../assets/destination/image-mars.png";
import europa from "../../assets/destination/image-europa.png";
import titan from "../../assets/destination/image-titan.png";
import { useState } from "react";

const Destination = () => {
  const images = {
    Moon: moon,
    Mars: mars,
    Europe: europa,
    Titan: titan,
  };
  const [desti, setDesti] = useState(0);
  const page = DestinationData[desti];
  return (
    <div id="des" className=" bg-destination py-4 w-full h-full">
      <NavigasiBar />
      <h1 className=" flex  items-center justify-center lg:justify-start max-w-5xl mx-auto text-white text-2xl tracking-widest font-exo py-4">
        01 Pick your destination
      </h1>
      <div className=" grid grid-cols-1 lg:grid-cols-2 max-w-5xl mx-auto py-6 ">
        <div className=" flex justify-center lg:justify-start items-center">
          <img
            src={images[page.destination_name]}
            alt="moon"
            className=" max-h-80 animate-spin-slow2"
          />
        </div>

        <div className=" text-white font-exo space-y-4">
          <div className="flex justify-center lg:justify-start py-4 lg:py-0 text-white text-2xl gap-6">
            <button
              className={`${desti === 0 ? "active" : ""} `}
              onClick={() => {
                setDesti(0);
              }}
            >
              <span className=" ">Moon</span>
            </button>
            <button
              className={`${desti === 1 ? "active" : ""}`}
              onClick={() => {
                setDesti(1);
              }}
            >
              <span className=" ">Mars</span>
            </button>
            <button
              className={`${desti === 2 ? "active" : ""}`}
              onClick={() => {
                setDesti(2);
              }}
            >
              <span className=" "> Europe</span>
            </button>
            <button
              className={`${desti === 3 ? "active" : ""}`}
              onClick={() => {
                setDesti(3);
              }}
            >
              <span className=" ">Titan</span>
            </button>
          </div>
          <h1 className=" flex justify-center lg:justify-start font-exo text-8xl uppercase">
            {page.destination_name}
          </h1>
          <p className=" text-justify font-exo px-4 lg:px-0">
            {page.destination_text}
          </p>
          <hr />
          <div className="flex justify-center lg:justify-start gap-10 font-exo">
            <div className=" space-y-3">
              <h4>Avg. distance</h4>
              <h2 className=" text-2xl">{page.avg_distance}</h2>
            </div>
            <div className=" space-y-3">
              <h4>Est. travel time</h4>
              <h2 className=" text-2xl">{page.travel_time}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
