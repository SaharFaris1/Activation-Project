import React from 'react'

const studios = [
    {
      id: 1,
      logo: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/studios/logo_treyarch.png ",
    },
    {
      id: 2,
      logo: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/studios/logo_infinityward.png ",
    },
    {
      id: 3,
      logo: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/studios/logo_highmoon-studios.png ",
    },
    {
      id: 4,
      logo: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/studios/logo_beenox.png",
    },
    {
      id: 5,
      logo: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/studios/logo_sledgehammer.png",
    },
    {
      id: 6,
      logo: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/studios/logo_raven.png ",
    },
    {
      id: 7,
      logo: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/studios/logo-toysforbob.png",
    },
    {
      id: 8,
      logo: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/studios/logo_atvi-shanghai-studio.png",
    },
    {
      id: 9,
      logo: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/studios/logo_demonware.png ",
    },
  ];


function Studio() {
  return (
    <div className="bg-black text-white py-10">
    <div className="   px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
      {studios.map((studio) => (
        <div key={studio.id} className="flex flex-col items-center">
          <img
            src={studio.logo}
            className=" w-60 h-20 "
          />
        </div>
      ))}
    </div>
  </div>
  )
}

export default Studio