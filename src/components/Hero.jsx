// import React from 'react'
import Img from '../assets/hero.png';
import { BiPlayCircle } from "react-icons/bi";

// eslint-disable-next-line react/prop-types
function Hero({togglePlay}) {
  return (
    <>
      <div className='py-12 sm:py-0 dark:bg-black dark:text-white duration-300 overflow-hidden  '>
        <div className="container min-h-[700px] flex relative"> 
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center relative z-10">
            {/* text */}
            <div className='order-2 sm:order-1 space-y-5 lg:pr-20 relative z-30'> 
              <h1 data-aos="fade-up" data className='text-4xl font-semibold'>THE METAVERSE PLATFORM : <span className='bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>We believe in the future of connection in the metaverse</span></h1>
              <p data-aos="fade-up" data-aos-delay="300">Make new friends, explore diverse events, and spark your creativity in a virtual world built and owned by its community.
              Create and sell Wearables & Emotes, construct captivating scenes and interactive experiences, or set up a personal space in your own World.
              </p>
              <div className='flex gap-6 '>
                <button data-aos="fade-up" data-aos-delay="600" className='primary-btn'>Get Started</button>
                <button data-aos="fade-up" data-aos-delay="600" onClick={togglePlay} className='flex items-center'><BiPlayCircle className='text-3xl'></BiPlayCircle>See Demo</button>
              </div>

            </div>
            {/* img  */}
              <div data-aos="fade-up" data-aos-offset="0" className='order-1 sm:order-2 '>
                <img className='max-h-[600px]' src={Img} alt="" />
              </div>
            
          </div>

          {/* Animation */}
          <div className='h-[300px] w-[300px] bg-gradient-to-r from-primary to-secondary rounded-full absolute top-0 left-0 blur-3xl animated-wrapper '></div>
        </div>
      </div>
    </>
  )
}

export default Hero