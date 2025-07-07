import React from 'react'
import {HOME_CONTENT} from "../constants"
const Home = () => {
  return (
    <section className="max-w-7xl mx-auto border-b-2">
        <div className="flex flex-col items-center my-16">
        <h1 className="text-6xl lg:text-8xl p-2 uppercase font-bold">{HOME_CONTENT.title}</h1>
        <p className="lg:mt-8 text-sm mb-4 font-medium tracking-tighter">{HOME_CONTENT.subtitle}</p>
        <img 
          src={HOME_CONTENT.image} 
          className="w-full h-[65vh] object-cover rounded-2xl p-2" 
          alt="Hero" 
        />
        </div>
    </section>
  )
}

export default Home
