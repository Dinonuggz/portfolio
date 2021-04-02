import React from 'react'



const CaseHeader = (props) => { 
    return (
        <div className="bg-gray-900 text-white pt-16">
            <img src={props.dataArray[props.index].img} alt=""/>
            <div className="w-10/12 md:w-9/12 lg:w-9/12 mx-auto py-3">
          <h1 className="text-xl sm:text-2xl md:text-4xl font-bold mb-2 mt-2 xs:mt-4 sm:mt-4 md:mt-8">{props.dataArray[props.index].name}</h1>
          <p className="mt-4 leading-relaxed mb-2 xs:mb-4 sm:mb-2 md:mb-4 lg:mb-8">{props.dataArray[props.index].desc}</p>
          </div>     
        </div>
    )
}

export default CaseHeader
