import React from 'react'
import mindmap from "../../../../assets/astra/Mindmap.jpg"
import packaging from "../../../../assets/astra/packaging.png"
import packages from "../../../../assets/astra/astrapackages.png"
import system from "../../../../assets/astra/designsystem.png"
const CustomSection1= () => {
    return (
        <div>
          <p>Starting out with a mindmap I expanded upon design attributes from the watch-design process to come up with potential ideas for a guide-style and branding. </p>
          <img className="w-12/12 lg:w-9/12" src={mindmap} alt=""/>
          <h2 className="text-2xl font-bold mb-2 mt-4">Logo design and style guide. </h2>
          <p>The naval aspect of the watch became a key feature in the logo design to represent the adventurous aspect of the brand. The logo represents a ship sailing by a mountainy coastline under a night sky. The color is inspired by the gold accents of the watch.</p>
          <div className="w-full flex flex-col-reverse lg:flex-row mt-4">
           <div><img src={packages} alt=""/></div>
           <div><img src={packaging} alt=""/></div>
          </div>
          <img className="mt-6" src={system} alt=""/>
        </div>
    )
}

export default CustomSection1