import React from 'react'
const games = [
    {
      id: 1,
      title: "Call of Duty: Black Ops 6",
      rating: "MATURE 17+",
      image: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/games/game-details/call-of-duty/black-ops-6/BO6_Hero_Mobile.webp  ",
    },
    {
      id: 2,
      title: "Call of Duty: Warzone",
      rating: "MATURE 17+",
      image: "https://www.activision.com/content/dam/atvi/callofduty/cod-touchui/warzone2/mw2/home/season-5/hero/S05_WZ_Hero_Desktop.jpg   ",
    },
    {
      id: 3,
      title: "Call of Duty: Modern Warfare III",
      rating: "MATURE 17+",
      image: "https://www.activision.com/content/dam/atvi/callofduty/cod-touchui/global/play-now-module/mw3/jpt-playnow-desktop-bg.jpg   ",
    },
    {
      id: 4,
      title: "Crash Team Rumble",
      rating: "EVERYONE 10+",
      image: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/games/game-details/crash-bandicoot/crash-team-rumble/crash-team-rumble-boxart.png  ",
    },
    {
      id: 5,
      title: "Tony Hawk's Pro Skater 1 + 2",
      rating: "TEEN",
      image: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/games/game-details/tony-hawk/tony-hawk-pro-skater-1-2/thps-1-2-hero.jpg  ",
    },
    {
      id: 6,
      title: "Call of Duty: Mobile",
      rating: "MATURE 17+",
      image: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/games/game-details/call-of-duty/mobile/codm-hero.jpg  ",
    },
    {
      id: 7,
      title: "Sekiro: Shadows Die Twice",
      rating: "MATURE 17+",
      image: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/games/game-details/sekiro/shadows-die-twice/sekiro-hero.jpg  ",
    },
    {
      id: 8,
      title: "Spyro Reignited Trilogy",
      rating: "EVERYONE 10+",
      image: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/games/game-details/spyro/reignited-trilogy/spyro-hero.png  ",
    },
  ];
function GamesSection() {
  return (
    <div className="bg-black text-white py-10">
    <div className=" container px-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {games.map((game) => (
        <div key={game.id} className=" rounded-lg overflow-hidden shadow-md">
          <img
            src={game.image} 
            className="w-full h-70 object-cover"
          />         
          <div className="text-start p-4">
            <h3 className=" font-bold mb-2">{game.title}</h3>
           <p className='text-gray-400'>{game.rating} </p>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default GamesSection