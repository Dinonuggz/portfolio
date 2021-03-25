import React from 'react'

const CaseSection = (props) => {
    return (
        <div className="w-10/12 md:w-9/12 lg:w-8/12 mx-auto py-3 mb-2 xs:mb-4 sm:mb-2 md:mb-8 mt-2 xs:mt-4 sm:mt-4 md:mt-8">
        <h4 className="text-xs text-white py-1 px-2 rounded bg-yellow-500 inline mr-2">{props.id}</h4>
        <h4 className="text-xs text-white py-1 px-2 rounded bg-yellow-500 inline uppercase">{props.tag}</h4>
        <h2 className="text-lg mt-4 font-bold">{props.name}</h2>
        <p className="mt-4 leading-relaxed">{props.text}</p>
        <img className={props.style} src={props.img} alt=""/>
        <div className="w-full flex items-center justify-center lg:mt-10">
        <a className={props.link ? "block w-12/12 sm:w-6/12 md:w-6/12 lg:w-4/12 text-center mt-4 bg-green-600 px-7 py-3 text-sm text-white hover:bg-green-400" : ""}href={props.link} target="_blank"  rel="noreferrer">{props.linkText}</a>
        </div>     
        </div>
    )
}

export default CaseSection
