import Header from "../Header"
import Stack from "../Stack"
import Projects from "../Projects"
import React from 'react'
import {motion} from "framer-motion"
import About from "./About"


const containerVariants = {
    hidden: {
        opacity:0,
      
    },
    visible: {
        opacity: 1,
        transition: {delay:0.2, duration:0.3},

    },
    exit: {
        x: "-100vw",
        transition: {ease: "easeInOut"}
    }
}
const Home = () => {
   
    return (
        <motion.div variants={containerVariants} initial="hidden" animate="visible"  exit="exit" className="bg-gradient-to-b from-gray-900 to-gray-800">
        <Header />
        <Projects />
        <About />
        <Stack />
        </motion.div>
    )
}

export default Home
