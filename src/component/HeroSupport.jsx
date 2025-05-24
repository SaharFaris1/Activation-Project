import React from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import SearchCards from './SearchCards';

function HeroSupport() {
  return (
    <div>
    <div
      className="relative bg-gray-900 text-white min-h-screen"
      style={{
        backgroundImage: `url('public/MWII-PS-HERO.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
   
      <div className="bg-sky-400 text-white p-2 mb-8">
        <p className="px-10">
          NEED HELP RECOVERING A HACKED ACTIVISION ACCOUNT?{' '}
          <a href="#" className="underline">LEARN MORE</a>
        </p>
      </div>

    
      <div className="relative max-w-5xl mx-auto h-96 mb-10 overflow-hidden rounded-lg">
     
        <button
          aria-label="Previous Slide"
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-300 z-10"
        >
          <FaArrowLeft className="w-10 h-10" />
        </button>

        <button
          aria-label="Next Slide"
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-300 z-10"
        >
          <FaArrowRight className="w-10 h-10" />
        </button>
        </div>

      <div className="max-w-6xl mx-auto px-4 space-y-6">
        <div className="flex items-center space-x-4">
          <div className="bg-gray-700 rounded-full p-3">
            <img src="public/icon_game.png" alt="Game Icon" className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold">MODERN WARFARE II INSTALLATION AND SETUP</h2>
        </div>

        <div className="flex items-center space-x-4">
          <div className="bg-gray-700 rounded-full p-3">
            <img src="public/icon_support.png" alt="Support Icon" className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold">BROWSE THE SUPPORT PAGE</h2>
        </div>
      </div>
     
      <div className="flex justify-center gap-3 mt-8">
        <span className="w-3 h-3 rounded-full bg-white"></span>
        <span className="w-3 h-3 rounded-full border border-white"></span>
        <span className="w-3 h-3 rounded-full border border-white"></span>
        <span className="w-3 h-3 rounded-full border border-white"></span>
        <span className="w-3 h-3 rounded-full border border-white"></span>
      </div>

 
      </div>
      <SearchCards/>
    </div>
  );
}

export default HeroSupport;