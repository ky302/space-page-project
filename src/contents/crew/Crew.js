import React, { useState } from "react";
import NavigasiBar from "../NavigasiBar";
import { crewData } from "./CrewData";
import MemberOne from "../../assets/crew/image-douglas-hurley.png";
import MemberTwo from "../../assets/crew/image-mark-shuttleworth.png";
import MemberThree from "../../assets/crew/image-victor-glover.png";
import MemberFour from "../../assets/crew/image-anousheh-ansari.png";

const Crew = () => {
  const crew_img = {
    "Douglas Hurley": MemberOne,
    "Mark Shuttleworth": MemberTwo,
    "Victor Glover": MemberThree,
    "Anousheh Ansari": MemberFour,
  };

  const [crewImg, setCrewImg] = useState(0);
  const currentPage = crewData[crewImg];

  return (
    <div id="des" className=" bg-destination py-4 w-full h-full">
      <NavigasiBar />
      <h1 className=" flex  items-center justify-center lg:justify-start max-w-5xl mx-auto text-white text-2xl tracking-widest font-exo py-4">
        01 Meet Your Crew
      </h1>
      <div className=" grid grid-cols-1 lg:grid-cols-2 max-w-5xl mx-auto py-6 ">
        <div className=" flex justify-center lg:justify-start items-center">
          <img
            src={crew_img[currentPage.member_name]}
            alt="moon"
            className=" max-h-96"
          />
        </div>

        <div className=" flex flex-col justify-center text-white font-exo space-y-4 py-4 lg:py-0">
          <h2 className="flex justify-center lg:justify-start font-exo text-2xl uppercase">
            {currentPage.title}
          </h2>
          <h1 className="flex justify-center lg:justify-start font-exo text-4xl uppercase">
            {currentPage.member_name}
          </h1>
          <p className=" text-justify text-lg font-exo px-4 lg:px-0">
            {currentPage.about_member}
          </p>
          <div className="flex justify-center lg:justify-start pt-8 text-white text-2xl space-x-10">
            <button
              className={`${
                crewImg === 0 ? "active" : ""
              } border-1 rounded-full w-5 h-5 focus:backdrop-blur-md hover:bg-white/80 focus:bg-white/80 focus:text-black outline `}
              onClick={() => {
                setCrewImg(0);
              }}
            >
              <div className=""></div>
            </button>
            <button
              className={`${
                crewImg === 1 ? "active" : ""
              } border-1 rounded-full w-5 h-5 focus:backdrop-blur-md hover:bg-white/80 focus:bg-white/80 focus:text-black outline`}
              onClick={() => {
                setCrewImg(1);
              }}
            >
              <div></div>
            </button>
            <button
              className={`${
                crewImg === 2 ? "active" : ""
              } border-1 rounded-full w-5 h-5 focus:backdrop-blur-md hover:bg-white/80 focus:bg-white/80 focus:text-black outline`}
              onClick={() => {
                setCrewImg(2);
              }}
            >
              <div></div>
            </button>
            <button
              className={`${
                crewImg === 3 ? "active" : ""
              }border-1 rounded-full w-5 h-5 focus:backdrop-blur-md hover:bg-white/80 focus:bg-white/80 focus:text-black outline`}
              onClick={() => {
                setCrewImg(3);
              }}
            >
              <div></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crew;
