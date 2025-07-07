import React from 'react'
import { PORTFOLIO_PROJECTS } from "../constants";
const Portfolio = () => {
  return (
    <section className="max-w-7xl mx-auto border-b-2 lg:pt-[5rem] " id='portfolio'>
      <div className="mb-20">
        <h2 className='text-center text-xl lg:text-3xl font-semibold tracking-tight  uppercase  mb-12'>Projets réalisés</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:px-4 lg:grid-cols-3 lg:pt-[1rem] px-2">
        {
          PORTFOLIO_PROJECTS.map((project)=>(
            <div className="group relative" key={project.id}>
              <img className="h-full w-full object-cover rounded-2xl" src={project.image} alt={project.name} />

              {/* clickable div */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100">
              <h3 className="text-x font-medium mb-2">{project.name}</h3>
              <p className="text-sm p-2 text-center">{project.description}</p>
              
            </div>
            </div>
          ))
        }
        </div>
      </div>
    </section>
  )
}

export default Portfolio
