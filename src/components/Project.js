import React from 'react'
import {Link} from "react-router-dom"




const Project = (item) => {


 
    return (

        <div className=" relative text-white font-display p-2 w-12/12 sm:w-9/12 md:w-8/12 lg:w-6/12 mx-auto flex flex-col overflow-hidden ">
        <div  className="absolute transition-all duration-500 ease-in-out transform bg-center relative bg-cover h-halfscreen md:rounded-sm" style={{ backgroundImage: `url('${item.icon}')` }} >
        <div className="hiddenrounded-b-sm absolute bottom-0 right-0 bg-clip-padding py-4 px-4">
            {item.link ?
         <Link className="float-right mt-4 block w-44 bg-blue-600 rounded-full font-sans text-sm py-3 px-4 hover:bg-blue-700 text-center shadow-md" to={`/${item.link}`}>View Case Study</Link>
        :<p className="float-right mt-4 block w-44 bg-gray-600 rounded-full font-sans text-sm py-3 px-4 hover:bg-blue-700 text-center shadow-md">In Progress</p>}
         </div>
        </div>
        <h3 className="text-xl mb-1 font-black text-indigo-600 mt-1">{item.name}</h3>
         <p className="text-sm text-black">{item.desc}</p>
        </div>
    )
}

export default Project
