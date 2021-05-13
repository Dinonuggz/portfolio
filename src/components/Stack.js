import React from 'react'
import icondata from "../data/index"
import {motion} from "framer-motion"
import {useAnimation} from "framer-motion"
import { useInView } from 'react-intersection-observer';
const Stack = () => {   
    const {ref, inView} = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });
    const animation =useAnimation();

        if(inView){
        animation.start({
           y:0,
           opacity:1,
           transition: {
               type:"spring", duration:1,
           } 
        })   
        }
        if(!inView){
            animation.start({y:50, opacity:0})
        }
    return (
        <div className="min-h-1/2 mt-4 max-h-1/2 flex items-center justify-center font-display font-black text-black">
        <div className="mt-4 flex-col items-center justify-center text-center mb-4 w-9/12 md:w-7/12">
        <div className="">
            <h1 className="text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl mb-4">Some of my favorite toolkits.</h1>
            <div className="flex items-center justify-around lg:mt-12 mb-4 w-full flex-wrap font-light">

            {icondata.stack.icons.map((item,index)=> (
 <motion.div ref={ref} animate={animation} key={index} className="w-4/12 sm:w-3/12 md:w-2/12 lg:w-1/12 text-xs flex flex-col items-center justify-center p-4"><img src={item.img} alt=""/> <p className="mt-4 text-gray-700">{item.text}</p></motion.div>))
} 
        </div>
        </div>    
        </div>
        </div>
    )
}

export default Stack
