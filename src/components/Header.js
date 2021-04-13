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
            delay: 0.3,
        }
    }
}
const childVariants = {
    hidden: {
     y:-500,  
    },
    visible:{
       y:0,
       transition: {
           type: "spring",
           damping: 10
           
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
        <div className="mb-8 md:mb-0 pt-16 pb-20 bg-gray-50">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col md:flex-row items-start justify-between sm:pt-8 md:pt-16 font-hero font-black text-black w-10/12 md:w-9/12 mx-auto">
            <div  className="text-left">
            <h1 className="text-4xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-6xl mt-8 md:mt-1 lg:mt-12 md:mb-4">{content.header.text[0]} {content.header.text[1]}</h1>
            <h1 className="text-xl text-left text-green-400 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mt-2 md:mt-4">UX/UI designer with <br></br><span className="text-green-400">Industrial design background</span></h1>
            <motion.a variants ={buttonVariants} whileHover="hover" className="mt-8 md:mt-12 text-white w-44 text-center block rounded-full bg-blue-500 px-10 py-4 text-sm" 
            href= "mailto: adriantimothypetersson@gmail.com">Get in touch</motion.a>
            </div>
            <motion.div variants={childVariants} drag className="mr-16 hidden md:block w-6/12 md:w-4/12 2xl:w-4/12"><motion.img className="cursor-pointer" drag  dragConstraints={{
      top: -50,
      left: -50,
      right: 50,
      bottom: 50,
    }} src={webpic} alt=""/></motion.div>
            
          
        </motion.div>
        </div>
    )
}

export default Header
