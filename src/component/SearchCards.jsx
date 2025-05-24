import React from 'react'

const cards = [
    {
      id: 1,
      title: "CALL OF DUTY: BLACK OPS 6",
      image: "https://support.activision.com/content/dam/atvi/support/home/modules/tall/BO6-home-tile2.jpg",

    },
    {
      id: 2,
      title: "ACCOUNT & SECURITY",
      image: "https://support.activision.com/content/dam/atvi/support/home/modules/tall/account-security-en-silver-tall-2x.jpg",
 
    },
    {
      id: 3,
      title: "CALL OF DUTY: WARZONE",
      image: "https://support.activision.com/content/dam/atvi/support/home/modules/tall/WZV-home-tile.jpg",
  
    },
    {
      id: 4,
      title: "CALL OF DUTY: MOBILE",
      image: "https://support.activision.com/content/dam/atvi/support/home/modules/tall/codmobile-module.jpg",
      
    },
    {
      id: 5,
      title: "TONY HAWK'S PRO SKATER 3 + 4",
      image: "https://support.activision.com/content/dam/atvi/support/home/modules/tall/THPS34-home-tile.png",
  
    },
    {
      id: 6,
      title: "CALL OF DUTY: MODERN WARFARE III",
      image: "https://support.activision.com/content/dam/atvi/support/home/modules/tall/MWIII-home-tile-1c.png",

    },
    {
        id: 7,
        title: "CALL OF DUTY: MODERN WARFARE III",
        image: "https://support.activision.com/content/dam/atvi/support/home/modules/tall/MWII-tall-tile.jpg",
  
      },
      {
        id: 8,
        title: "CALL OF DUTY: MODERN WARFARE",
        image: "https://support.activision.com/content/dam/atvi/support/home/modules/tall/MW_module_001.jpg",
     

      },
      {
        id: 9,
        title: "CALL OF DUTY: BLACK OPS COLD WAR",
        image: "https://support.activision.com/content/dam/atvi/support/home/modules/tall/cold-war-home-page-tile.jpg",
  
      },
  ];


function SearchCards() {
    const renderCards = () => {
        return cards.map((card) => (
          <div key={card.id} className=" text-white px-10 " >
              <div className="p-4">
              <h2 className="text-lg font-bold">{card.title}</h2>
             
            </div>
            <img
              src={card.image}
              className="w-100 h-100 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            />
          
          </div>
        ));
      };
    
      return (
        <div className=" bg-neutral-800  p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {renderCards()}
          </div>
        </div>
      );
    }

export default SearchCards