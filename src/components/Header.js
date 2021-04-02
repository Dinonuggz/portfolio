import React from 'react'
import content from "../data/index"
import {motion} from "framer-motion"
import webpic from "../assets/webpic.png"

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
        <div className="mb-8 md:mb-0 pt-16">
        <div className="flex flex-col md:flex-row items-center md:items-start sm:pt-8 md:pt-16 justify-center font-hero font-black text-white w-10/12 md:w-9/12 mx-auto">
            <div className="text-center md:text-left">
            <motion.h1 variants={containerVariants} initial="hidden" animate="visible" className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-6xl mt-8 md:mt-1 lg:mt-24 mb-1 md:mb-4">{content.header.text[0]} {content.header.text[1]}
            <h1 className="text-sm text-left text-green-400 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-8 lg:mb-16">UX/UI designer with <br></br><span span className="text-green-400">Industrial design background.</span></h1></motion.h1>
            <motion.a variants ={buttonVariants} whileHover="hover" className="w-64 text-center border block border-blue-500 px-10 py-3 text-sm mt-10 mb-8" 
            href= "mailto: adriantimothypetersson@gmail.com">Get in touch</motion.a></div>
            <div className="mt-10 hidden md:block w-6/12 md:mt-0 md:w-4/12 2xl:w-4/12"><img src={webpic} alt=""/></div>
           
        </div>
        </div>
    )
}

export default Header
