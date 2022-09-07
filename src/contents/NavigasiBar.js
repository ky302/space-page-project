import React, { useState } from "react";
import logo from "../assets/shared/logo.svg";
import { Link } from "react-router-dom";

const NavigasiBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {isOpen && (
        <div className=" bg-opacity-50 bg-black/10 w-full h-full top-0 bottom-0 fixed "></div>
      )}

      <div className=" bg-transparent pt-10 ">
        <div className=" flex lg:justify-between flex-col lg:flex-row w-full">
          <div className=" lg:py-4 pb-8 flex justify-between items-center px-16 z-50">
            <div>
              <Link to={"/"}>
                <a href="#home">
                  <img
                    src={logo}
                    alt="logo"
                    className=" w-10 lg:w-14 rounded-full hover:scale-125 hover:opacity-50 duration-300"
                  />
                </a>
              </Link>
            </div>
            <div className=" text-white lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className=" focus:outline-none block lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    className={`${!isOpen ? "block" : "hidden"}`}
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                    className={`${isOpen ? "block" : "hidden"}`}
                  />
                </svg>
              </button>
            </div>
          </div>

          <div
            className={`${
              isOpen ? "block" : "hidden"
            } flex lg:block absolute lg:relative w-1/2 h-full top-8 lg:top-0 bottom-0 right-0 lg:w-2/3 lg:pt-0 z-30 `}
          >
            <div className="flex flex-col h-full w-full lg:flex-row items-center justify-center lg:justify-start text-white backdrop-blur-xl bg-white/5 font-exo text-xl rounded-xl lg:rounded-none mx-4 lg:mx-0">
              <div className=" flex flex-col lg:flex-row lg:space-x-10 px-4 ">
                <div className=" hover:border-b-4 duration-300 border-white h-24 flex items-center justify-center">
                  <Link to={"/"}>
                    <a className="hover:scale-110 duration-300">
                      <span className=" font-semibold px-2"> 00</span> Home
                    </a>
                  </Link>
                </div>
                <div className=" hover:border-b-4 duration-300 border-white h-24 flex items-center justify-center">
                  <Link to={"/destination"}>
                    <a className="hover:scale-110 duration-300">
                      <span className=" font-semibold px-2"> 01</span>{" "}
                      Destination
                    </a>
                  </Link>
                </div>
                <div className=" hover:border-b-4 duration-300 border-white h-24 flex items-center justify-center">
                  <Link to={"/crew"}>
                    <a className="hover:scale-110 duration-300">
                      <span className=" font-semibold px-2"> 02</span> Crew
                    </a>
                  </Link>
                </div>
                <div className=" hover:border-b-4 duration-300 border-white h-24 flex items-center justify-center">
                  <Link to={"/technology"}>
                    <a className="hover:scale-110 duration-300">
                      <span className=" font-semibold px-2"> 03</span>{" "}
                      Technology
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigasiBar;
