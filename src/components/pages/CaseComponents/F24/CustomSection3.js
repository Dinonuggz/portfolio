import React from 'react'
import persona1 from "../../../../assets/f247/persona1.png"
import persona2 from "../../../../assets/f247/persona2.png"

const CustomSection3= () => {
    return (
        <div>
         <p>The affinity mapping process made it clear that a holistic approach was necessary in redesigning the current app by appealing to both the current main user base (booking classes) and the broadened target audience without any compromises. By creating two personas, one that frequently books classes & that only uses the gym facilities it was easier to pinpoint how and which changes would need to be implemented.</p>
         <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center pt-4 md:pt-8 lg:pt-12">
          <img className="mr-4 w-full mb-2 lg:mb-0 lg:w-5/12" src={persona1} alt=""/>   
          <img className="w-full lg:w-5/12" src={persona2} alt=""/>   
         </div>

        </div>
    )
}

export default CustomSection3