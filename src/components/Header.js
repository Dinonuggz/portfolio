import React from 'react'
import content from "../data/index"
import {motion} from "framer-motion"
import {Link as Link1} from "react-scroll"
import webpic from "../assets/webpic.png"

const container = {
    hidden: { y: 100,opacity:0 },
    visible: {
      y: 0,
      opacity:1,
      transition: {
        type: "spring",
        delay: 0.3,
        delayChildren: 0.5,
        staggerChildren: 0.3
      }
    }
  }
  
    const item = {
        hidden: { y:-200 },
        visible: {y:0,
            transition: {
                type: "spring",
                delay: 0.3, }}
      }
      const item1 = {
        hidden: { x:200 },
        visible: {x:0,
            transition: {
                type: "spring",
                delay: 0.3, }}
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
        <motion.div variants={container}  initial="hidden" animate="visible"  className="flex flex-col lg:flex-row items-start justify-between  sm:pt-8 md:pt-16 font-hero font-black text-black w-10/12 md:w-9/12 mx-auto">
            <div  className="w-full text-center lg:text-left flex flex-col items-center lg:items-start lg:justify-between">
            <motion.h1 variants={item} className="text-center lg:text-left text-4xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-6xl 2xl:text-8xl 3xl:text-9xl mt-8 md:mt-1 lg:mt-12 lg:mb-4">{content.header.text[0]} {content.header.text[1]}</motion.h1>
            <motion.h2 variants={item1} className="text-center md:text-left text-lg rounded-md md:inline p-2 text-left bg-green-500 text-gray-100 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 3xl:text-5xl mt-4 md:mt-4">UX/UI designer & Front-end developer </motion.h2>
            <Link1 to="work" smooth={true} duration={1000} className="cursor-pointer">
            <motion.button variants ={buttonVariants} animate="hover" className=" focus:outline-none mt-8 md:mt-12 text-white w-44 text-center block rounded-full bg-blue-500 px-10 py-4 text-sm" 
            >View projects</motion.button></Link1>
            </div>
            <img className="hidden lg:block md:w-2/5" src={webpic} alt=""/>
            
          
        </motion.div>
        </div>
    )
}

export default Header
