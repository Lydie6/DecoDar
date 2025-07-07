import React from 'react'
import { RiPhoneLine } from "@remixicon/react"
import { CONTACT_INFO } from "../constants"

const Conctacts = () => {
  return (
   <section className=" max-w-7xl mb-12 mt-14">
    <div className="">
        <h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase mb-12">Contactez Nous</h2>
        <p className=" max-w-[300px] md:max-w-2xl lg:max-w-2xl lg:text-lg mb-12 text-center mx-auto ">{CONTACT_INFO.text}</p>
        <div className="flex flex-col items-center justify-start md:flex-row md:justify-between lg:flex-row lg:justify-between  px-20">
            <div className=" flex flex-row justify-center  items-start ml-[-1rem] ">
                <RiPhoneLine className=' lg:text-3xl lg:mr-2 flex-shrink-0'/>
                <div>
                    <p className="text-lg font-semibold">{CONTACT_INFO.phone.label}</p>
                    <p className="text-neutral-600">{CONTACT_INFO.phone.value}</p>
                </div>
            </div>
            <div className="   flex flex-row  items-star justify-center  ">
                <RiPhoneLine className='lg:text-3xl lg:mr-2 flex-shrink-0'/>
                <div>
                    <p className="text-lg font-semibold">{CONTACT_INFO.email.label}</p>
                    <p className="text-neutral-600">{CONTACT_INFO.email.value}</p>
                </div>
            </div>
            <div className=" max-xs:ml-[40px] flex  items-star flex-row justify-center ml-4 ">
                <RiPhoneLine className='lg:text-3xl lg:mr-2 flex-shrink-0'/>
                <div>
                    <p className="text-lg font-semibold">{CONTACT_INFO.address.label}</p>
                    <p className="text-neutral-600">{CONTACT_INFO.address.value}</p>
                </div>
            </div>
        </div>
    </div>
   </section>
  )
}

export default Conctacts
