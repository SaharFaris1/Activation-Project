import React from 'react';
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

function HeroSection() {
  return (
    <div className="relative h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
        }}  >
        <source
          src="https://video.activision.com/activision/cdn/videos/tony-hawk-pro-1-2.mp4 "
          type="video/mp4" />
      
      </video>
      <div
        className="absolute inset-0 bg-black opacity-90 transition duration-300"
        style={{ background: 'linear-gradient(to right, rgba(0, 0, 0, 0.5), transparent)' }}
      ></div>
      <div className="flex flex-col items-center md:items-start px-10 justify-center text-center text-white h-full">
        <img
          src="https://www.activision.com/content/dam/atvi/tony-hawk/alcatraz/common/logos/Tony_Hawk-ProSkater1+2-logo.png "
          alt="Tony Hawk's Pro Skater 1+2 Logo"
          className="w-96 mb-8"
        />
        <p className="text-2xl font-bold mb-8">Available Now for PS4™, Xbox One® & PC!</p>
        <div className="flex gap-4">
          <button className="md:px-20 px-10 py-3 bg-sky-600 opacity-60 text-white rounded-full hover:bg-blue-700 transition">
            GET NOW
          </button>
          <button className="md:px-20 px-10 py-3 border border-white text-white rounded-full hover:border-gray-300 transition">
            VISIT SITE
          </button>
        </div>
        </div>
        <div className='flex justify-center '>

        <div className=" absolute bottom-5 w-100 items-center rounded-3xl h-10 flex  justify-around text-white bg-black opacity-70 ">
  <IoIosArrowRoundBack className="text-3xl rounded-full cursor-pointer" />
  <div className="flex justify-center gap-3 text-white">
    <span className="w-3 h-3 rounded-full bg-white"></span>
    <span className="w-3 h-3 rounded-full border border-white"></span>
    <span className="w-3 h-3 rounded-full border border-white"></span>
    <span className="w-3 h-3 rounded-full border border-white"></span>
    <span className="w-3 h-3 rounded-full border border-white"></span>
  </div>
  <IoIosArrowRoundForward className="text-3xl rounded-full cursor-pointer" />
</div>
</div> 
    </div>
  );
}

export default HeroSection;