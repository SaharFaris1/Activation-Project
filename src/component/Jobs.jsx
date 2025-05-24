import React, { useState } from 'react';

const jobs = [
    {
      id: 1,
      title: "Senior Gameplay Engineer - High Moon Studios",
      category: "Programming / Software Engineering",
      reference: "R024108",
      description:
        "Collaborate with designers and animators to create new gameplay systems and expand existing ones. Spearhead the development of innovative gameplay experiences. Proficiency in 3D math, related to game...",
    },
    {
      id: 2,
      title: "Lead Analytics Engineer",
      category: "Data Analytics",
      reference: "R024154",
      description:
        "You'll work closely with engineers, product managers, and analytics peers to build a foundational data layer that helps derive meaningful insights and recommendations, as well as furthering self-servi...",
    },
    {
      id: 3,
      title: "Expert Animation Engineer - Infinity Ward",
      category: "Programming / Software Engineering",
      reference: "R024307",
      description:
        "Infinity Ward is looking for a dedicated Expert Animation Engineer with a strong interest in crafting high fidelity, scalable animation systems and behaviors. Develop and upgrade workflows to allow th...",
    },
    {
      id: 4,
      title: "Senior AI Animator - Infinity Ward",
      category: "Animation",
      reference: "R022959",
      description:
        "Use motion capture and hand-keyed techniques to create high-fidelity NPC Animations that are genre-defining. A strong ability in hand-keyed animation. Strong Maya animation experience. A strong passio...",
    },
    {
      id: 5,
      title: "Level Designer",
      category: "Game/Level Design",
      reference: "R025221",
      description:
        "Work with design leadership, artists, and other level designers to deliver environments that embody the creative vision of the game. Work alongside other designers, artists, animators and engineers to...",
    },
  ];

function Jobs() {
  const [favoriteJobs, setFavoriteJobs] = useState([]);

  const toggleFavorite = (id) => {
    setFavoriteJobs((prevFavorites) =>
      prevFavorites.includes(id)
        ? prevFavorites.filter((jobId) => jobId !== id)
        : [...prevFavorites, id]
    );
  };

  

  return (
    <div className=" flex-col items-center  text-white p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Be the First to Apply</h1>
      </header>

 
      <div className=" px-15 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
        {jobs.map((job) => (
          <div key={job.id} className="bg-white rounded-lg shadow-md p-6 mb-4">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold">{job.title}</h2>
                <p className="text-gray-500 text-sm">
                  {job.category} &nbsp;&nbsp; {job.reference}
                </p>
              </div>
              <button
                onClick={() => toggleFavorite(job.id)}
                className={`text-black-500 hover:text-black transition duration-300 ${
                  favoriteJobs.includes(job.id) ? 'text-black' : ''
                }`}
                aria-label="Toggle favorite"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill={favoriteJobs.includes(job.id) ? "currentColor" : "none"}
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>
            <p className="mt-4 text-gray-700 leading-relaxed">
              {job.description}
            </p>
            <button className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition duration-300">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Jobs;