import React from 'react'
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'



const Project = (item) => {

    return (
        <div className="text-white font-display w-10/12 sm:w-8/12 md:w-6/12 mx-auto overflow-hidden mt-4 md:mt-16 mb-4 md:mb-16 transition transform duration-500 ease-in-out hover:-translate-y-1 rounded-lg hover:scale-110">
        <h4 className="text-xs py-1 px-2 rounded-t bg-yellow-500 inline uppercase font-bold text-gray-200">{item.category}</h4>
        <img className="" src={item.img} alt=""/>
        <div className="bg-gray-900 p-4">
        <h3 className="text-xl mb-1 text-red-400 mt-1">{item.name}</h3>
        <hr className="border-indigo-100 my-2"/>
         <p className="text-sm text-gray-200 mb-4">{item.desc}</p>
         <div className="flex justify-between flex-col md:flex-row">
         <Link className="bg-blue-800 px-7 py-3 text-sm mt-10 md:w-6/12 hover:bg-blue-700 text-center" to={`/${item.link}`}>View Case Study</Link>
        <a href={item.ext} target="_blank" rel="noreferrer" className="md:w-4/12 text-xs py-2 px-2 flex items-center justify-center mt-6 md:mt-9 cursor-pointer border border-gray-600 text-center hover:bg-gray-800">{item.external}<FontAwesomeIcon icon={faExternalLinkAlt} className={item.ext ? "text-xl ml-6 text-yellow-400" : "text-xl ml-6 text-gray-600"  }/></a>
        </div>
         <div className="h-4"></div>   
        </div>
        </div>
    )
}

export default Project
