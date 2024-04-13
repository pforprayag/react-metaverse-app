// import React from 'react'
import BannerImg from "../assets/banner2.png";
import { BiPlayCircle } from "react-icons/bi";
// eslint-disable-next-line react/prop-types
function Banner2({togglePlay}) {
  return (
    <div className="py-12 sm:py-0 relative ">
      <div className="container min-h-[620px] flex items-center ">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center">
          {/* text */}
          <div className="order-2 sm:order-1 lg:pr-20 relative">
            <div className="relative z-10 space-y-5">
              <h1 data-aos="fade-up" data-aos-delay="300" className="text-4xl font-semibold">
                THE METAVERSE PLATFORM :{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                transforming the ways we interact with information
                </span>
              </h1>
              <p data-aos="fade-up" data-aos-delay="300">
                Make new friends, explore diverse events, and spark your
                creativity in a virtual world built and owned by its community.
                Create and sell Wearables & Emotes, construct captivating scenes
                and interactive experiences, or set up a personal space in your
                own World.
              </p>
              <div className="flex gap-6 ">
                <button data-aos="fade-up" data-aos-delay="700" className="primary-btn">Get Started</button>
                <button  data-aos="fade-up" data-aos-delay="700" onClick={togglePlay} className="flex items-center">
                  <BiPlayCircle className="text-3xl"></BiPlayCircle>See Demo
                </button>
              </div>
              {/* Bg color */}
              <div className="h-[300px] w-[300px] bg-gradient-to-r from-primary to-secondary rounded-full absolute bottom-[-50px] left-[300px] blur-3xl opacity-50"></div>
            </div>
          </div>
          {/* Img */}
          <div data-aos="fade-up"  className="order-1 sm:order-2 ">
            <img
              className="relative w-full max-w-[400px]"
              src={BannerImg}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner2;
