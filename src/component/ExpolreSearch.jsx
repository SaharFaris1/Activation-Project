import React from 'react';

const ExGames = [
  {
    id: 1,
    title: "Our Locations",
    image: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/1691566582196_PenFactory-1665997299565.jpg",
  },
  {
    id: 2,
    title: "DE&I",
    image: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/1691566670572_PenFactory2-1665997596145.jpg ",
  },
  {
    id: 3,
    title: "Early Careers",
    image: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/1691566841083_EarlyCareersAP-1666643219491.jpg ",
  },
  {
    id: 4,
    title: "Mission & Talent Brand",
    image: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/Capture4-1716042103068.png ",
  },
];
function ExploreSearch() {
  return (
    <div className=" p-15 flex-col items-center bg-black text-white py-10 ">
      <h1 className="text-3xl font-bold mb-10 p-6">EXPLORE OUR WORLD</h1>
      <div className="  items-center grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
        {ExGames.map((game) => (
          <div
            key={game.id}
            className=" bg-black rounded-lg overflow-hidden shadow-md"
          >
        <img src={game.image} alt="" srcset="" />

            <div className="  flex flex-col items-center justify-end p-4 bg-black bg-opacity-75">
              <h3 className="text-2xl font-bold mb-4">{game.title}</h3>
              <button className="border text-xl border-white text-white rounded-full px-6 py-2 hover:bg-white hover:text-black transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExploreSearch;

