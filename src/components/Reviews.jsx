import React from 'react'
import { REVIEWS } from '../constants'
const Reviews = () => {
  return (
    <section className="max-w-7xl  border-b-2 mx-3  pb-12 " id="reviews">
       <div className="p-13 ">
       <h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase mb-12 mt-10">Avis Clients</h2>
        <p className="max-w-2xl text-lg   text-justify mx-auto">{REVIEWS.text}</p>
        <div className="flex flex-wrap  justify-center p-6 ">
          {REVIEWS.reviews.map((review, index) => (
            <div key={index} className="flex flex-col items-center justify-center rounded-2xl border border-neutral-300 p-7 mx-2 mt-10 max-w-xs">
              <p className="mb-4 text-justify">{review.review}</p>
             <div className="flex flex-row justify-center items-center">
             <div>
                <img src={review.image} alt={review.name}
                  className="w-12 h-12 rounded-full mr-4" />
              </div>
              <div className="">
              <p className="text-sm font-bold">{review.name}</p>
              <p className="">{review.title}</p>
              </div>
             </div>
            </div>
          ))}
        </div>
       </div>
    </section>
  );
}   
export default Reviews
