import React from 'react';
import ExploreSearch from './ExpolreSearch';
import ScrollGame from './ScrollGame';
import Studio from './Studio';
import Jobs from './Jobs';
import EqualOp from './EqualOp';

const careerSection = [
    { id: 1, title: "ART, ANIMATION & SOUND" },
    { id: 2, title: "ENGINEERING" },
    { id: 3, title: "PRODUCTION" },
    { id: 4, title: "CORPORATE FUNCTIONS" },
    { id: 5, title: "DESIGN" },
    { id: 6, title: "MARKETING & SALES" },
    { id: 7, title: "QUALITY ASSURANCE (QA)" },
    { id: 8, title: "CENTRAL TECH" },
    { id: 9, title: "MOBILE" },
  ];


function HeroSearch() {
  return (
    <div >
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
          }}
        >
          <source
            src="https://video.activision.com/activision/cdn/videos/tony-hawk-pro-1-2.mp4 "
            type="video/mp4"
          />
        </video>
        <div className=" hidden md:flex flex-col  items-center justify-center h-full w-full">
          <button
            className="uppercase border-2 border-lime-600 bg-black text-white p-3 hover:bg-lime-600 transition font-bold duration-300"
            type="button">
            Search Jobs
          </button>
        </div>
      </div>
      

        <br />
  <div className="flex justify-center">
    <button
      className="uppercase border-2 border-lime-600 bg-black text-white p-3 hover:bg-lime-600 transition font-bold duration-300"
      type="button"
    >
      Search Jobs
    </button>
  </div>
</div>

<div className="bg-black text-white py-10">
      <h1 className="text-center text-3xl font-bold mb-10">START YOUR GAME CHANGING CAREER</h1>
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {careerSection.map((section) => (
          <div
            key={section.id}
            className="bg-black border border-white rounded-lg p-4 text-center"
          >
            <p className="text-xl font-bold">{section.title}</p>
          </div>
        ))}
        
      </div>
     <ExploreSearch/>
     <ScrollGame/>
     <br /><br /><br />
     <h1 className='font-bold text-4xl text-center'>OUR STUDIOS</h1>
     <Studio/>

     <br />
     <Jobs/>
     <EqualOp/>
    </div>


    </div>
  );
}

export default HeroSearch;