// import React from 'react'
import PlayImg from '../assets/play_store.png'
import AppImg from '../assets/app_store.png'
// import GreenBg from '../assets/green_bg.png'

function Playstore() {
  return (
    <>
    <div className="container py-10 sm:min-h-[400px] sm:grid sm:place-items-center">
      <div className='space-y-6 max-w-xl mx-auto '>
        <h1 data-aos="fade-up"  className='text-2xl text-center sm:text-4xl font-semibold'>Get started with our app</h1>
        <p data-aos="fade-up" data-aos-delay="300" className='text-center sm:px-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, delectus.</p>
        <div className='flex flex-wrap justify-center gap-4 items-center'>
        <a data-aos="fade-up" data-aos-delay="500" href="#">
          <img src={PlayImg} alt="" className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'/>
        </a>
        <a data-aos="fade-up" data-aos-delay="700" href="#">
          <img src={AppImg} alt="" className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'/>
        </a>
        </div>
      </div>
    </div>
    </>
  )
}

export default Playstore