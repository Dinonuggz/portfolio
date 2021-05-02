import React from 'react'
import {Link} from "react-router-dom"
import {motion} from "framer-motion"
import { useInView } from 'react-intersection-observer';
import {useEffect} from "react"
import {useAnimation} from "framer-motion"


const Project = (item) => {
    const {ref, inView} = useInView({
        threshold: 0.5
    });
    const animation =useAnimation();

    useEffect(() => {
        if(inView){
        animation.start({
           scale:1,
           opacity:1,
           borderRadius:"0%",
           transition: {
               type:"spring", duration:1,
           } 
        })   
        }
        if(!inView){
            animation.start({scale:0.95, opacity:0.5, borderRadius:"5%",})
        }
       
    },[inView,animation])

 
    return (

        <div className=" relative text-white font-display p-2 w-12/12 sm:w-9/12 md:w-8/12 lg:w-6/12 mx-auto flex flex-col overflow-hidden ">
        <motion.div  ref={ref}  animate={animation}  
     className="absolute bg-center relative bg-cover h-halfscreen md:rounded-sm" style={{ backgroundImage: `url('${item.icon}')` }} >
        <div className="hiddenrounded-b-sm absolute bottom-0 right-0 bg-clip-padding py-4 px-4">
            {item.link ?
         <Link className="float-right mt-4 block w-44 bg-blue-700 rounded-full font-sans text-sm py-3 px-4 hover:bg-blue-600 text-center shadow-md" to={`/${item.link}`}>View Case Study</Link>
        :<p className="cursor-pointer float-right mt-4 block w-44 bg-gray-600 rounded-full font-sans text-sm py-3 px-4 text-center shadow-md">In Progress</p>}
         </div>
        </motion.div>
        <div className="flex items-center">
        <h3 className="text-xl mb-1 font-black text-indigo-600 mt-1">{item.name}</h3>
        <p className="bg-yellow-400 text-xs md:text-sm ml-2 px-2 rounded-full text-center hidden sm:block">{item.category[0]}</p>
        <p className="bg-yellow-400 text-xs md:text-sm ml-2 px-2 rounded-full text-center hidden sm:block">{item.category[1]}</p>
        </div>
         <p className="text-sm text-black">{item.desc}</p>
        </div>
    )
}

export default Project
