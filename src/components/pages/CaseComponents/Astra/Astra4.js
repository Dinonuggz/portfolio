import React from 'react'
import wireframe from "../../../../assets/astra/wireframe.png"
import hifiwireframe from "../../../../assets/astra/hifiwireframe.png"
const CustomSection1= () => {
    return (
        <div>
        <p>Utilizing e-commerce experience funneling principles alongside insights from user flows i wireframed the landing page. A key takeaway from the lo-fi wireframe was that that the brand mission-statement section & newsletter section could be condensed down to one section as it leads to less scrolling.</p>
        <div className="flex flex-col lg:flex-row mt-8">
        <div className="mb-4 lg:mb-0"><img className="" src={wireframe} alt=""/></div>
        <div className=""><img className="" src={hifiwireframe} alt=""/></div>
        </div>

        </div>
    )
}

export default CustomSection1