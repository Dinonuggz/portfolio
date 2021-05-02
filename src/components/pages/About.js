import React from 'react'
import {motion} from "framer-motion"
import { useInView } from 'react-intersection-observer';
import {useEffect} from "react"
import {useAnimation} from "framer-motion"





const About = () => {
    const {ref, inView} = useInView({
        threshold: 0.5
    });
    const animation =useAnimation();

    useEffect(() => {
        if(inView){
        animation.start({
           scale:1,
           opacity:1,
           transition: {
               type:"spring", duration:2,
           } 
        })   
        }
        if(!inView){
            animation.start({scale:0.95, opacity:0})
        }
       
    },[inView,animation])

 
    return (
        <motion.div ref={ref} animate={animation} id="about" className="flex flex-col items-center justify-center font-hero font-black text-white w-10/12 md:w-6/12 mx-auto mt-16 ">
             <hr className="w-8/12 mb-4"/>
            <div>
         <h2 className="text-lg text-gray-400 sm:text-lg md:text-xl lg:text-xl xl:text-3xl mb-4 leading-loose">
 I love the infusion of design and technology, which is why I'm passionate about <span className="text-yellow-500">UX-design</span> & <span className="text-yellow-500">front-end development</span>. There is no greater feeling then designing a <span className="text-yellow-500">beautiful user experience </span>and being able to bring it to life using <span className="text-yellow-500">JS frameworks </span>like<span className="text-yellow-500"> React</span>.When I'm not designing or developing digital solutions I love to dissect & solve everyday problems utilizing  <span className="text-yellow-500">3D-Printing</span> and <span className="text-yellow-500">Arduino development.</span></h2>  

</div>
<hr className="w-4/12"/>
        </motion.div>
    )
}               

export default About
