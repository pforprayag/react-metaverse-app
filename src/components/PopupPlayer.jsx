// import React from 'react'
import { IoMdClose } from "react-icons/io";

// eslint-disable-next-line react/prop-types
function PopupPlayer({isPlay, togglePlay}) {
  return (
    <>
     {
      isPlay && (
        <div className="fixed z-[999] left-0 top-0 w-full h-full bg-black/70 backdrop-blur-sm">
          <div className="absolute w-full sm:max-w-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
            <div className="bg-white dark:bg-dark p-5 m-3 rounded-lg shadow-md">
              {/* header */}
              <div className="flex items-center justify-between pb-3 ">
                <h1 className="text-2xl">Metaverse</h1>
                <IoMdClose onClick={togglePlay} className="cursor-pointer text-5xl hover:scale-110 duration-300 "/>
              </div>

              {/* video player */}
              <div>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/joBfw59FGBQ?si=KLx5_P_FZMwT8965" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen>
                
              </iframe>
              </div>
            </div>
          </div>
        </div>
      )
     }
    </>
  )
}

export default PopupPlayer