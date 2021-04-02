import React from 'react'
import CustomSection1 from "./F24/CustomSection1"
import CustomSection2 from "./F24/CustomSection2"
import CustomSection3 from "./F24/CustomSection3"
import CustomSection4 from "./F24/CustomSection4"
import CustomSection5 from "./F24/CustomSection5"
import CustomSection6 from "./F24/CustomSection6"
import Astra1 from "./Astra/Astra1"
import Astra2 from "./Astra/Astra2"
import Astra3 from "./Astra/Astra3"
import Astra4 from "./Astra/Astra4"
import Astra5 from "./Astra/Astra5"
import Portfolio1 from "./Portfolio/Portfolio1"



const CaseSection = (props) => {
    const components = [
        CustomSection1,
        CustomSection2,
        CustomSection3,
        CustomSection4,
        CustomSection5,
        CustomSection6,
        Astra1,
        Astra2,
        Astra3,
        Astra4,
        Astra5,
        Portfolio1, 
    ];
    const CurrentComponent = components[props.id]
        return (
        <div className="w-10/12 md:w-9/12 lg:w-7/12  mx-auto py-3 mb-2 xs:mb-4 sm:mb-2 md:mb-8 mt-2 xs:mt-4 sm:mt-4 md:mt-8 leading-loose">
        <h4 className="text-xs text-white py-1 px-2 rounded bg-yellow-500 inline uppercase">{props.tag}</h4>
        <h2 className="text-4xl mb-4 mt-4 font-bold">{props.name}</h2>
        <CurrentComponent />
        </div>
    )
}

export default CaseSection
