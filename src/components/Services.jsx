import React from 'react'
import {SERVICES_CONTENT} from "../constants"

const Services = () => {
  return (
    <section id="services" className="max-w-7xl border-b-2 mx-auto">
      <div className="py-20">
        <h2 className='text-center text-xl lg:text-3xl font-semibold uppercase mb-20'>Nos services</h2>
        {SERVICES_CONTENT.map((service, index) => (
          <div key={index} className='mx-4 mb-12 flex flex-col lg:flex-row items-center lg:pl-[3rem] lg:pr-[3rem]'>
            {/* Conteneur Image - Modification cruciale ici */}
            <div className={`
              lg:w-1/2 
              mb-8 lg:mb-0
              ${index % 2 === 0 ? 'lg:order-1 mr-[2rem]' : 'lg:order-2 '}
            `}>
              <img 
                src={service.image} 
                alt={service.alt} 
                className="w-full max-w-[500px] h-auto object-cover rounded-lg shadow-xl"
              />
            </div>

            {/* Conteneur Texte */}
            <div className={`
              lg:w-1/2 
              flex flex-col max-w-[500px]
              ${index % 2 === 0 ? 'lg:order-2  ' : 'lg:order-1  '}
            `}>
              <h3 className="text-xl lg:text-2xl font-medium mb-2">{service.title}</h3>
              <p className="text-gray-600 lg:text-lg text-justify">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services