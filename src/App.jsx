/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, {useEffect} from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Quotes from './components/Quotes'
import Banner from './components/Banner'
import Banner2 from './components/Banner2'
import Features from './components/Features'
import Playstore from './components/Playstore'
import Footer from './components/Footer'
import PopupPlayer from './components/PopupPlayer'

import AOS from 'aos'
import 'aos/dist/aos.css'
function App() {

  const [isPlay, setIsPlay] = React.useState(false);
  const togglePlay = ()=> setIsPlay(!isPlay);

  useEffect(()=>{
    AOS.init({
      
      offset: 100,
      duration: 1000,
      easing: 'ease-in-sine',
      delay: 100
    });
    AOS.refresh();
  }, [])
  return (
    <main className='overflow-x-hidden overflow-hidden bg-white dark:bg-black dark:text-white duration-300'>

      <Navbar></Navbar>
      <Hero togglePlay={togglePlay}></Hero>
      <Quotes></Quotes>
      <Banner togglePlay={togglePlay}></Banner>
      <Banner2 togglePlay={togglePlay}></Banner2>
      <Features></Features>
      <Playstore></Playstore>
      <Footer></Footer>

      {/* Video pop up */}
      <PopupPlayer isPlay={isPlay} togglePlay={togglePlay}></PopupPlayer>
    </main>
  )
}

export default App
