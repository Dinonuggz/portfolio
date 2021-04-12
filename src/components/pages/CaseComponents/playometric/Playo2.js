import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketballBall } from '@fortawesome/free-solid-svg-icons'
import { faRunning } from '@fortawesome/free-solid-svg-icons'
import persona from "../../../../assets/portfolio/persona1.png"
import persona1 from "../../../../assets/portfolio/persona2.png"
import journeymap from "../../../../assets/portfolio/journeymap.png"
const CustomSection1= () => {
    return (
        <div className="">
        <div className="shadow-md p-4 bg-white border border-gray-100 mb-4 rounded">
            <p className="font-bold">Inclusive design</p>
            <p className="">The first thing I considered was usability & inclusiveness. As studies show that training needs and attitudes to training within the target group (14-17) can be very varied, the project aims to propose a solution tailored to all students needs</p></div>

<h3 className="font-bold text-2xl mb-4">Interviews | 7 students | 3 High-schools </h3>
<p>During the initial research phase I conducted interviews where I asked students about their favorite jumping activities, their gymclass curriculum and how the gym environment was perceived from an inclusivness standpoint. </p>
<div className="md:p-4 mb-4 mt-4 rounded flex flex-col md:flex-row items-center justify-start ">
<FontAwesomeIcon icon={faBasketballBall} className="text-4xl mr-2"/>
<p className="font-bold">Ball sports</p>
<div className="flex flex-col">
<li className="ml-4 mb-1">Most common jumping related exercises</li>
<li className="ml-4 mb-1">Most favored exercise</li>
<li className="ml-4 mb-1">Competitive environment</li>
</div>
</div>
<div className="md:p-4   mb-4 rounded flex flex-col md:flex-row items-center justify-center ">
<FontAwesomeIcon icon={faRunning} className="text-4xl mr-2"/>
<p className="font-bold">Hurdles & Long jump</p>
<div className="flex flex-col">
<li className="ml-4 mb-1">Second most common jumping exercises</li>
<li className="ml-4 mb-1">Not very inclusive</li>
<li className="ml-4 mb-1">Scared of embarrassment in front of peers</li>
</div>
</div>
<h3 className="font-bold text-2xl mb-4">Personas</h3>
<p>After sorting the interview answers two distinct user personas emerged, one user that though of gym-class as an opportunity to have fun, while the other considered gym class as more of a competitive environment.</p>
<div className="flex items-center flex-col">
<img className="md:px-12 lg:px-24 mb-4 mt-4" src={persona1} alt=""/>
<img className="md:px-12 lg:px-24" src={persona} alt=""/>
</div>
<h3 className="font-bold text-2xl mt-8 mb-4">User journey map</h3>
<p>As the synthesized user-data revealed that competitive sports are the most favored exercised, utilizing the personas I created a user journey map of a scenario where a competitive exercise is introduced in gym-class. </p>
<img className="md:px-12 lg:px-24 mb-4 mt-4" src={journeymap} alt=""/>
<div className="shadow-md p-4 bg-white border border-gray-100 mb-4 rounded">
<p>Both users share excitement about an competitive sport however motivations vary -<br/> <span className="font-bold">One users main goal is having fun while the others is winning</span></p> 
        </div>
        </div>
    )
}

export default CustomSection1