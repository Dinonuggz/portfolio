import React from 'react'
import profilepic from "../../assets/webpic.png"

const About = () => {
    return (
        <div id="about" className="flex flex-col lg:flex-row items-center md:items-center lg:items-start justify-center font-hero font-black text-white w-10/12 md:w-6/12 mx-auto">
            <div>
         <h1 className="text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-4xl mt-8 md:mt-16 mb-1 md:mb-4">More About me.</h1>
        
         <h2 className="text-sm text-gray-400 sm:text-lg md:text-xl lg:text-xl xl:text-2xl mb-4 leading-loose">
I'm a Product Designer with a background in both <span className="text-yellow-500">Film Production</span>  and <span className="text-yellow-500"> Industrial Design.</span>  I love the infusion of technology and design and that's why <span className="text-yellow-500">I enjoy working in the digital UX- design realm.</span> When I'm not designing I try to keep on improving my JavaScript knowledge to further my <span className="text-yellow-500">Full-stack designer skills.</span></h2>  
</div>
         <img className=" sm:w-8/12 md:w-7/12" src={profilepic} alt=""/>   
        </div>
    )
}               

export default About
