// import React from 'react'
import { FaCameraRetro } from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";
import { PiVirtualRealityBold } from "react-icons/pi";

const FeaturesData = [
  {
    name: "Capture Videos",
    icon : (<FaCameraRetro className="text-5xl text-primary group-hover:text-black duration-300"/>),
    link: "#",
    description: "lorem ipsum dolor sit amet, consectetur adip",
    aosDelay: "300"
  },
  {
    name: "Safe Transition",
    icon : (<GrTransaction className="text-5xl text-primary group-hover:text-black duration-300"/>),
    link: "#",
    description: "lorem ipsum dolor sit amet, consectetur adip",
    aosDelay: "500"
  },
  {
    name: "Experiance Reality",
    icon : (<PiVirtualRealityBold className="text-5xl text-primary group-hover:text-black duration-300"/>),
    link: "#",
    description: "lorem ipsum dolor sit amet, consectetur adip",
    aosDelay: "700"
  },
]
function Features() {
  return (
    <>
    <div className="container py-14 sm:min-h-[600px]">
      <div>
        <h1 data-aos="fade-up"  className="text-3xl font-semibold text-center sm:text-4xl mb-12 ">Why VR World ?</h1>

        {/* card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 ">
          {
            FeaturesData.map((item, index) => {
              return (
                <div key={index} data-aos="fade-up" data-aos-delay={item.aosDelay} className="text-center group space-y-3 sm:space-y-6 p-4 sm:py-10 bg-dark hover:bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_40px_#007cfff0] text-white hover:text-black rounded-lg duration-300 " >
                  <div className="grid place-items-center">
                    {item.icon}
                  </div>
                  <h1 className="text-2xl font-semibold text-center sm:text-3xl">{item.name}</h1>
                  <p className="text-center sm:text-lg">{item.description}</p>
                  <a href={item.link} className="inline-block text-lg font-semibold py-3 text-primary group-hover:text-black duration-300">Learn more</a>
                  
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
    </>
  )
}

export default Features