import React from 'react'

function Teams() {
  return (
     
<div>
      <div
      className=" hidden md:flex relative w-full bg-black text-white py-20"
      style={{
        backgroundImage: `url('src/assets/team.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'end',
        backgroundRepeat: 'no-repeat',
      }}>

      <div className="container mx-auto px-6 relative z-10 justify-between">
        <div className="flex flex-col md:flex-row items-center justify-between">
     
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl font-bold mb-4 uppercase text-sky-600">HAVE FUN</h1>
            <p className="mb-6 text-white">
              Learn More About Job Opportunities
            </p>
            <button className="border border-white rounded-full px-6 py-3 font-bold uppercase hover:bg-sky-400 hover:opacity-70 hover:border-sky-400 transition cursor-pointer">
              Join Us
            </button>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-white">OUR TEAMS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
              <ul className="space-y-2 list-disc">
                <li className="text-white">GAME DESIGN</li>
                <li className="text-white">ART & ANIMATION</li>
                <li className="text-white">BRAND MANAGEMENT</li>
                <li className="text-white">PRODUCTION</li>
                <li className="text-white">QUALITY ASSURANCE</li>
              </ul>
              <ul className="space-y-2 list-disc">
                <li className="text-white">CUSTOMER SUPPORT</li>
                <li className="text-white">STUDIO OPERATIONS</li>
                <li className="text-white">PROGRAMMING</li>
                <li className="text-white">FINANCE & ACCOUNTING</li>
                <li className="text-white">HUMAN RESOURCES</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div className="  md:hidden w-full bg-black text-white py-20" >
 <img src="src/assets/team.png" alt="" srcset="" />

      <div className="container mx-auto px-6  z-10 justify-between">
        <div className="flex flex-col md:flex-row items-center justify-between">
     
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl font-bold mb-4 uppercase text-sky-600">HAVE FUN</h1>
            <p className="mb-6 text-white">
              Learn More About Job Opportunities
            </p>
            <button className="border border-white rounded-full px-6 py-3 font-bold uppercase hover:bg-sky-400 hover:opacity-70 hover:border-sky-400 transition cursor-pointer">
              Join Us
            </button>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-white">OUR TEAMS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
              <ul className="space-y-2 list-disc">
                <li className="text-white">GAME DESIGN</li>
                <li className="text-white">ART & ANIMATION</li>
                <li className="text-white">BRAND MANAGEMENT</li>
                <li className="text-white">PRODUCTION</li>
                <li className="text-white">QUALITY ASSURANCE</li>
              </ul>
              <ul className="space-y-2 list-disc">
                <li className="text-white">CUSTOMER SUPPORT</li>
                <li className="text-white">STUDIO OPERATIONS</li>
                <li className="text-white">PROGRAMMING</li>
                <li className="text-white">FINANCE & ACCOUNTING</li>
                <li className="text-white">HUMAN RESOURCES</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    


    </div>

  )
}
export default Teams