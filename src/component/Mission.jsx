import React from 'react';
import GamesSection from './GamesSection';
import Studio from './Studio';
import Teams from './Teams';

const teamMembers = [
    {
      id: 1,
      name: "Rob Kostich",
      title: "President",
      image: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/rob-kostich.jpg ",
    },
    {
      id: 2,
      name: "Josh Taub",
      title: "Chief Operating Officer",
      image: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/josh-taub.jpg ",
    },
    {
      id: 3,
      name: "Suzie Carr",
      title: "Chief People Officer",
      image: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/suzie-carr.jpg",
    },
    {
      id: 4,
      name: "Terri Durham",
      title: "SVP & General Counsel",
      image: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/terri-durham.jpg",
    },
    {
      id: 5,
      name: "David Stohl",
      title: "Head of Development, Call of Duty",
      image: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/dave-stohl.jpg ",
    },
    {
      id: 6,
      name: "Pat Kelly",
      title: "Head of Creative, Call of Duty",
      image: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/patt-kelly.jpg ",
    },
    {
        id: 7,
        name: "Tyler Bahl",
        title: "SVP, Head of Marketing",
        image: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/tyler-bahl.jpg",
      },
      {
        id: 8,
        name: "Tyler Bahl",
        title: "SVP, Head of Marketing",
        image: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/natasha.jpg",
      },
      {
        id: 9,
        name: "Matt Cox",
        title: "GM, Call of Duty",
        image: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/matt-cox.jpg",
      },
  ];


function Mission() {
  return (
    <div className='bg-black text-white'>
    <div
      className="  flex h-130 "
      style={{
        backgroundImage: `url('public/atvi-about-hero.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'contain',
        backgroundRepeat: 'no-repeat',
      }}
    >     </div>
    <br /> <br /><br />
    <div className='bg-black text-white p-10 flex flex-col items-center text-center gap-5'>
<p className='uppercase font-bold text-4xl'>Our Mission</p>
<hr className="w-full max-w-5xl border-gray-700 mb-6" />
<p className='max-w-7xl'>At Activision, we strive to create the most iconic brands in gaming and entertainment. We’re driven by our mission to deliver unrivaled gaming experiences for the world to enjoy, together.  Home to iconic franchises like Call of Duty®, Crash Bandicoot™, and Tony Hawk’s™ Pro Skater™, we're a global leader in interactive entertainment. Our goal? Delight millions with innovative, fun, and engaging games. With a legacy of success, we're pushing boundaries with cutting-edge technology and inclusive practices. Join us in delivering unforgettable entertainment and seize the chance to level up your career.</p>
</div>


<div className=' bg-black text-white p-10 flex flex-col items-center text-center gap-5'>
<p className='uppercase font-bold text-4xl'>Activate Your Future</p>
<hr className="w-full max-w-5xl border-gray-700 mb-6" />
<ul className='flex-col gap-3 space-y-4'>
   <li>We unite our global player community with epic entertainment, focusing on three core pillars:</li>
   <li>People - fostering talent and learning opportunities.</li>
   <li>Innovation - consistently pushing to iterate and evolve.</li>
   <li>Excellence - delivering high-quality games, consistently year in and year out.</li>
   <li>Join us at Activision, where inclusivity thrives, and together we shape the future of entertainment for our players. Explore open roles now!</li> 
</ul>
</div>

<div className=' bg-black text-white p-10 flex flex-col items-center text-center gap-5'>
<p className='uppercase font-bold text-4xl'>Our Values</p>
<hr className="container w-full max-w-5xl border-gray-700 mb-6" />
<img src="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/values/atvi-values.png" alt="" srcset="" />
<button className="uppercase md:px-20 px-10 py-3 bg-sky-600  text-white rounded-full hover:bg-sky-700 transition">
         Learn more
          </button>
</div>

<div className=' bg-black text-white p-10 flex flex-col items-center text-center gap-5'>
<p className='uppercase font-bold text-4xl'>Our Leadership Team</p>
<hr className="w-full max-w-5xl border-gray-700 mb-6" />

<div className="bg-black text-white py-10">
      <div className="  mx-auto px-6 grid grid-cols-2 md:grid-cols-3 items-center gap-8">
        {teamMembers.map((member) => (
          <div key={member.id} className="flex flex-col items-center">
        
            <img
              src={member.image}
          alt=''
              className="sm:w-50 sm:h-50  md:w-70 md:h-70 rounded-full object-cover"
            />
            <div className="mt-4">
              <p className="text-xl font-bold">{member.name}</p>
              <p className="text-base">{member.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
</div>

<div className=' bg-black text-white p-10 flex flex-col items-center text-center gap-5'>
<p className='uppercase font-bold text-4xl'>Our Games</p>
<hr className="w-full max-w-5xl border-gray-700 mb-6" />
<GamesSection/>
</div>


<div className=' bg-black text-white p-10 flex flex-col items-center text-center gap-5'>
<p className='uppercase font-bold text-4xl'>Our Studios</p>
<hr className="w-full max-w-5xl border-gray-700 mb-6" />
<Studio/>
</div>

<Teams/>
    </div>
  );
}

export default Mission;