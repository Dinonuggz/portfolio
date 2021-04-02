import React from 'react'
import pwireframe from "../../../../assets/portfolio/portfoliowireframe.png"
const CustomSection1= () => {
    return (
        <div className="flex flex-col lg:flex-row w-full">
          <p className="w-full lg:w-8/12 mr-2">My main goal was to create an easily digestible portfolio. I opted to build it from the ground up using React & and tailwind CSS as this would enable me to have full control over my wireframes. Below is the initial wireframe I used to later build my portfolio, already in the wireframing phase I took notes and thought about how various elements and features could be developed. This enabled me to work efficently during the development phase in React without having to do major revisions to the original wireframe. The finished portfolio is fully responsive across all break-points and fetches dynamic-data.</p>
         <div className=""><img src={pwireframe} alt=""/></div>
        </div>
    )
}

export default CustomSection1