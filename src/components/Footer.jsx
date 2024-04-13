// import React from 'react'
import { FaInstagram, FaLinkedin, FaMobileAlt, FaLocationArrow   } from "react-icons/fa";
import { FaXTwitter, FaThreads  } from "react-icons/fa6";

const FooterLinks = [
  {
    id:1, 
    name : 'Home',
    link : '#'
  },
  {
    id:2, 
    name : 'About',
    link : '#'
  },
  {
    id:3, 
    name : 'Contact',
    link : '#'
  },
  {
    id:4, 
    name : 'Blogs',
    link : '#'
  },
]
function Footer() {
  return (
    <>
    <div className="bg-gray-100 dark:bg-dark mt-14 rounded-t-3xl ">
      <div data-aos="fade" className="container">
        <div className="grid md:grid-cols-3 py-4">
          {/* Details */}
          <div className="py-8 px-4 ">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              Mrtaverse
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, accusantium.</p><br />
            {/* Contact */}
            <div>
              <div className="flex items-center gap-3 ">
              <FaLocationArrow />
              <p>Gandhinagar, Gujarat</p>
              </div>
              <div className="flex items-center gap-3 ">
              <FaMobileAlt />
              <p>+91 9033987588</p>
              </div>
            </div>

            {/* Social media */}
            <div className="flex gap-3 items-center mt-6 ">
              <a href="https://www.instagram.com/accounts/login/" >
                <FaInstagram className="text-2xl hover:text-primary duration-300"/>
              </a>
              <a href="https://www.linkedin.com/feed/">
                <FaLinkedin className="text-2xl hover:text-primary duration-300"/>
              </a>
              <a href="https://twitter.com/i/flow/login">
                <FaXTwitter className="text-2xl hover:text-primary duration-300"/>
              </a>
              <a href="https://www.threads.net/login">
                <FaThreads className="text-2xl hover:text-primary duration-300"/>
              </a>
            </div>
          </div>

          {/* Footer links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
            <div>
              <div className="py-8 px-4 ">
                <h1 className="text-xl font-bold mb-3">Quick Links </h1>
                <ul className="space-y-3 ">
                  {
                    FooterLinks.map(({id,name,link}) => {
                      return (
                        <li key={id} className="hover:translate-x-1 duration-300 ">
                          <a href={link} className="cursor-pointer hover:text-primary">
                            {name}
                          </a>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>

            <div>
              <div className="py-8 px-4 ">
                <h1 className="text-xl font-bold mb-3">Quick Links </h1>
                <ul className="space-y-3 ">
                  {
                    FooterLinks.map(({id,name,link}) => {
                      return (
                        <li key={id} className="hover:translate-x-1 duration-300 ">
                          <a href={link} className="cursor-pointer hover:text-primary">
                            {name}
                          </a>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>

            <div>
              <div className="py-8 px-4 ">
                <h1 className="text-xl font-bold mb-3">Quick Links </h1>
                <ul className="space-y-3 ">
                  {
                    FooterLinks.map(({id,name,link}) => {
                      return (
                        <li key={id} className="hover:translate-x-1 duration-300 ">
                          <a href={link} className="cursor-pointer hover:text-primary">
                            {name}
                          </a>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
          </div>

          <div className="pl-4">
          Copyright © 2024 p_for_prayag®. All rights reserved.
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer