import React from "react";
import { Typewriter } from "react-simple-typewriter";
import TextButton from "./TextButton";

const Hero = () => {
  return (
    <div className="top-0 mx-auto mt-[-96px] flex h-screen w-full max-w-screen-xl flex-col items-center justify-center text-center text-white">
      <p className="p-2 font-bold uppercase text-emerald-400">
        Decentralising Entertainment
      </p>
      <h1 className="text-5xl font-bold sm:text-6xl md:text-7xl">
        Groove the Indie Wayy
      </h1>
      <div className="mt-4 flex text-xl font-bold sm:text-3xl md:text-4xl">
        <Typewriter
          words={["Watch !", "Pay !", "Play !"]}
          loop={0}
          cursor={1}
          typeSpeed={120}
        />
        <p className="mr-2 md:mr-3">Your Entertainment your Way !</p>

      </div>
      <p className=" mt-4 w-[90vw] text-xl font-bold text-gray-400 md:text-2xl">
           Explore the underdog of Entertainment!!
      </p>
      <div className="flex justify-center items-center">
      <input type="text" className="my-[3rem] bg-white py-3 px-[1.5rem] md:px-[7rem] sm:px-[4rem] font-semibold text-gray-900 text-3xl text-center rounded-l-full border-none " placeholder="Search Here"></input>
        <button className="rounded-e-full text-3xl border-none py-3 px-[0.5rem] md:px-[3rem] sm:px-[1rem] bg-emerald-400 text-white" >Search</button>
      </div>
       
        {/* <div class="relative w-full">
            <input type="search"  className="block m-[3rem] p-5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500  " placeholder="Search for city or address" required/>
            <button type="submit" className="absolute m-[3rem] top-0 end-0 h-full p-2.5 text-sm font-medium text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span class="sr-only">Search</span>
            </button>
        </div> */}

    </div>
  );
};

export default Hero;
