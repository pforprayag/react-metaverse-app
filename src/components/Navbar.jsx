import React from 'react'
import Logo from '../assets/logo1.png'
import { BiMenuAltRight , BiMenuAltLeft } from "react-icons/bi";
import Darkmode from './Darkmode';


const NavLinks = [
  {
    id: 1,
    name : 'Home',
    link : '#'
  },
  {
    id: 2,
    name : 'Products',
    link : '#'
  },
  {
    id: 3,
    name : 'Pricing',
    link : '#'
  },
  {
    id: 4,
    name : 'Documents',
    link : '#'
  },
  {
    id: 5,
    name : 'Contacts',
    link : '#'
  },

  
  
];
function Navbar() {

  const [showMenu, setShowMenu] = React.useState(false);
  const toggleMenu = ()=> setShowMenu(!showMenu);
  return (
    <div className='relative z-[999] text-black dark:text-white duration-300'>
      <div className='container py-2 md:py-0 '>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className='flex items-center gap-1 '>
            <img src={Logo} alt="" className='h-16 ' />
            <p className='text-3xl '><span className='font-bold '>World</span></p>
          </div>

          {/* Menu */}
          
            <nav className='hidden md:block'>
              <ul className='flex items-center gap-8'>
                {
                  NavLinks.map(({links,id,name}) => {
                    return (
                      <li className='py-4' key={id}>
                        <a className='text-xl font-semibold hover:text-primary py-2 hover:border-b-2 hover:border-secondary transition-colors duration-500 cursor-pointer' href={links}>{name}</a>
                      </li>
                    );
                    
                  })
                }
                {/* Darkmode*/}
                 <Darkmode></Darkmode>
              </ul>
            </nav>
          {/* Phone view */}
          <div className='md:hidden block '>
            <div className='flex items-center gap-5'>
               <Darkmode></Darkmode>
            {
              showMenu ? (<BiMenuAltLeft 
                onClick={toggleMenu}
                className='cursor-pointer' size={30}></BiMenuAltLeft> ): (<BiMenuAltRight
                  onClick={toggleMenu}
                  className='cursor-pointer' size={30}></BiMenuAltRight>)
            }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar