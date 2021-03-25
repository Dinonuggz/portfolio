import React from 'react'
import Typical from 'react-typical'
import content from "../data/index"
import {motion} from "framer-motion"

const containerVariants = {
    hidden: {
     x:200   
    },
    visible:{
        x:0,
        transition: {
            type: "spring",
            delay: 0.3
        }
    }
}
const buttonVariants = {
    hover: {
        scale: 1.05,
        transition: {
            duration: 0.3,
            yoyo: Infinity
        }
    }
}

const Header = () => {

    


    return (
        <div className="shadow-xl">
        <div className="flex flex-col items-center md:items-start sm:pt-8 md:pt-16 justify-center font-hero font-black text-white w-10/12 md:w-6/12 mx-auto">
            <motion.h1 variants={containerVariants} initial="hidden" animate="visible" className="text-xl sm:text-xl md:text-2xl lg:text-4xl xl:text-6xl mt-8 md:mt-16 mb-1 md:mb-4">{content.header.text[0]} {content.header.text[1]}</motion.h1>
            <h1 className="text-sm text-green-400 sm:text-lg md:text-xl lg:text-2xl xl:text-4xl mb-4"><Typical
        steps={content.header.typical}
        loop={Infinity}
        className="inline-block"
      /></h1>
       <motion.a variants ={buttonVariants} whileHover="hover" className="border border-blue-500 px-10 py-3 text-sm mt-10 mb-8" href= "mailto: adriantimothypetersson@gmail.com">Get in touch</motion.a>
        </div>
        </div>
    )
}

export default Header
