import React from 'react';
import { IoIosArrowForward } from "react-icons/io";

const cardsData = [
  {
    id: 1,
    image: "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/BO6-SEASON-04-NARRATIVE-TOUT.jpg",
    date: "May 20, 2025",
    title: "Stitch Returns in Season 04",
    link: "#",
  },
  {
    id: 2,
    image: "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/body/code/CODE-MAM-GY6-TOUT.jpg",
    date: "May 15, 2025",
    title: "Support C.O.D.E. Military Appreciation Month with USAA",
    link: "#",
  },
  {
    id: 3,
    image: "https://www.tonyhawkthegame.com/content/dam/atvi/tony-hawk/blog/chicago/el-rey-blog/THPS-ELREY-IMAGE-TOUT.jpg",
    date: "May 09, 2025",
    title: "Tony Hawk's Pro Skater 3 + 4: THPS Fest at El Rey Theatre",
    link: "#",
  },
  {
    id: 4,
    image: "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/body/ricochet/bo6-season-03-ricochet/COD-BO6-RICOCHET-S03R-TOUT-A.webp",
    date: "May 22, 2025",
    title: "New Update for Call of Duty: Modern Warfare",
    link: "#",
  },
  {
    id: 5,
    image: "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/body/code/CODE-MAM-2025-IMAGE-TOUT.webp",
    date: "May 18, 2025",
    title: "Crash Bandicoot: New Adventures Revealed",
    link: "#",
  },
  {
    id: 6,
    image: "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/bo6/BO6-S03R-ANNOUNCEMENT-TOUT.webp",
    date: "May 10, 2025",
    title: "Spyro: Reignited Trilogy Expansion Pack",
    link: "#",
  },
];
function LatestNews() {
  return (
    <div className="bg-black text-white p-10 flex flex-col items-center">

      <h1 className="uppercase text-center text-2xl font-bold mb-6">Latest News & Articles</h1>
      
      <hr className="w-full max-w-4xl border-gray-700 mb-6" />

      <div className="flex flex-wrap justify-center gap-10 mb-8 w-full max-w-5xl">
        <p className="uppercase font-bold text-2xl hover:text-gray-400 cursor-pointer transition">All News</p>

        <div className="flex gap-6">
          <img src="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/home/assets/activision-logo-small.svg "  className="hidden md:block w-20 md:w-32 h-auto" />
          
          <img src="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/home/assets/cod-logo.svg " className="hidden md:block w-20 md:w-32 h-auto" />
          
          <img src="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/home/assets/THPS3+4_Logo.svg " className="hidden md:block w-20 md:w-32 h-auto" />
          
          <img src="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/home/assets/crash-bandicoot-logo.png " className="hidden md:block w-20 md:w-32 h-auto" />
        </div>
      </div>

      <hr className="w-full max-w-4xl border-gray-700" />
      <div className="container mx-auto px-6 py-10">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cardsData.map((card) => (
              <div key={card.id} className="bg-black text-white rounded-lg overflow-hidden shadow-2xs">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-64 object-cover"/>
    
    
                <div className="p-6">
       
                  <p className="text-sm font-bold mb-2">{card.date}</p>
    

                  <h3 className="text-xl font-bold mb-4">{card.title}</h3>
    
   
                  <div className="w-1/6 h-1 bg-gray-500 my-4"></div>
                  <a href={card.link} className="flex items-center text-sm font-semibold text-gray-400 hover:text-white transition">
                    READ MORE
                    <IoIosArrowForward className='w-4 h-4 ml-2'/>
                   
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='hidden md:block'>
        <button className="border border-white rounded-full px-20 py-3 font-bold uppercase hover:bg-sky-400 hover:opacity-70 hover:border-sky-400  transition cursor-pointer  ">
    view All
        </button>
        </div>
        <div className="bg-black text-white py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="sm:block md:w-300 md:hidden">
          <img
            src="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/home/assets/support-banner-v3.jpg "
      alt=''
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4 md:text-2xl">WE'RE HERE TO HELP!</h2>
          <p className="mb-6">
            Get answers to frequently asked questions, check server status, and engage with a support expert.
          </p>
          <button className="border border-white rounded-full px-6 py-3 md:px-4 font-bold uppercase hover:bg-sky-400 hover:opacity-70 hover:border-sky-400 transition cursor-pointer">
            Visit Support
          </button>
        </div>
        <div className="hidden md:w-300 h-50 md:block">
          <img
            src="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/home/assets/support-banner-v3.jpg "
      alt=''
            className="w-full h-full object-cover"
          />
        </div>
       
      </div>
    </div>
    </div>
  );
}

export default LatestNews;





