import React from 'react'
import figma from "../assets/svgs/figma.svg"
import illustrator from "../assets/svgs/adobeillustrator.svg"
import photoshop from "../assets/svgs/adobephotoshop.svg"
import ae from "../assets/svgs/adobeaftereffects.svg"
import js from "../assets/svgs/javascript.svg"
import ract from "../assets/svgs/react.svg"
import tailwind from "../assets/svgs/tailwindcss.svg"

const Stack = () => {
    return (
        <div className="min-h-1/2 max-h-1/2 flex items-center justify-center font-display font-black text-white">
            <div className="mt-4 md:mt-6 lg:mt-8 flex-col items-center justify-center text-center mb-4 w-9/12 md:w-7/12">
        <div className="">
            <h1 className="text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl mb-4">Some of my favorite toolkits.</h1>
            <div className="flex items-center justify-around lg:mt-12 mb-4 w-full flex-wrap font-light">
            <div className="w-4/12 sm:w-3/12 md:w-2/12 lg:w-1/12 text-xs flex flex-col items-center justify-center p-4"><img src={figma} alt=""/> <p className="mt-4 text-gray-300">Figma</p></div>
            <div className="w-4/12 sm:w-3/12  md:w-2/12 lg:w-1/12 text-xs flex flex-col items-center justify-center p-4"><img src={illustrator} alt=""/><p className="mt-4 text-gray-300">Illustrator</p></div>
            <div className="w-4/12 sm:w-3/12  md:w-2/12 lg:w-1/12 text-xs flex flex-col items-center justify-center  p-4"><img src={photoshop}  alt=""/><p className="mt-4 text-gray-300">Photoshop</p></div>
            <div className="w-4/12 sm:w-3/12  md:w-2/12 lg:w-1/12 text-xs flex flex-col items-center justify-center  p-4"><img src={ae}  alt=""/><p className="mt-4 text-gray-300">AEffects</p></div>
            <div className="w-4/12 sm:w-3/12  md:w-2/12 lg:w-1/12 text-xs flex flex-col items-center justify-center  p-4"><img src={js}  alt=""/><p className="mt-4 text-gray-300">JavaScript</p></div>
            <div className="w-4/12 sm:w-3/12  md:w-2/12 lg:w-1/12 text-xs flex flex-col items-center justify-centerw-1/12 text-xs flex flex-col items-center justify-center  p-4 "><img src={ract}  alt=""/><p className="mt-4 text-gray-300">React</p></div>
            <div className="w-4/12 sm:w-3/12 md:w-2/12 lg:w-1/12 text-xs flex flex-col items-center justify-center p-4"><img src={tailwind}  alt=""/><p className="mt-4 text-gray-300">TailwindCSS</p></div>
            </div>
        </div>    
        </div>
        </div>
    )
}

export default Stack
