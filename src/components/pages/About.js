import React from 'react'
import profilepic from "../../assets/webpic.png"

const About = () => {
    return (
        <div id="about" className="flex flex-col items-center justify-center font-hero font-black text-white w-10/12 md:w-6/12 mx-auto mt-16 ">
             <hr className="w-8/12 mb-4"/>
            <div>
         <h2 className="text-lg text-gray-400 sm:text-lg md:text-xl lg:text-xl xl:text-3xl mb-4 leading-loose">
I'm a UX-designer with a background in both <span className="text-yellow-500">Film Production</span>  and <span className="text-yellow-500"> Industrial Design.</span>  I love the infusion of technology and design and that's why <span className="text-yellow-500">I enjoy working in the digital UX- design realm.</span> When I'm not designing I try to keep on improving my JavaScript knowledge to further my <span className="text-yellow-500">Full-stack designer skills.</span></h2>  

</div>
<hr className="w-4/12"/>
        </div>
    )
}               

export default About
