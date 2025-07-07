import React from 'react'
import aboutImage from "../assets/about.webp";
const About = () => {
  return (
    <section id="about" className='max-w-7xl mx-auto lg:pt-[4rem] mb-24 border-b-2 pb-20'>
      <h2 className="text-xl  lg:text-3xl text-center mb-12 uppercase tracking-tight font-semibold ">Apropos de nous</h2>
      <div className="">
        <div className="flex flex-col justify-center items-center">
          <img className=" max-w-[300px] md:max-w-[500px] lg:max-w-[800px] h-auto" src={aboutImage} alt='company house about image' />
        </div>
        <p   className="  mx-auto w-full px-10 lg:max-w-5xl  md:max-w-2xl mt-5 text-justify font-light">
          Chez DécoDar, nous croyons en la transformation des maisons en foyers de rêve.
          Avec une passion pour le design et un engagement envers la qualité, notre équipe
          de professionnels qualifiés s'engage depuis plus d'une décennie à fournir des
          services de rénovation exceptionnels. Nous nous spécialisons dans la création
          d'espaces magnifiques et fonctionnels qui reflètent les goûts et les modes de
          vie uniques de nos clients. Des cuisines modernes aux salles de bain luxueuses,
          en passant par des espaces de vie extérieurs sereins et des bureaux à domicile
          chaleureux, nous apportons notre expertise à chaque projet, veillant à ce que
          chaque rénovation soit adaptée à vos besoins et désirs spécifiques. Notre mission
          est d'améliorer la beauté et la fonctionnalité de votre maison, en en faisant
          un lieu où vous pouvez véritablement vous épanouir.
        </p>
      </div>
    </section>
  )
}

export default About
