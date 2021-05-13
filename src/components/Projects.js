import React, {useState} from 'react'
import content from "../data/index"
import Project from "./Project"

const Projects = () => {

    const [projectType,setProjectType] = useState("all")
    return (
        <div className="overflow-hidden">
        
        <div className="pb-2 pt-4 sm:pt-8 md:pt-16 font-hero md:text-3xl flex flex-col items-center justify-center  text-white w-10/12 sm:w-8/12 md:w-6/12 mx-auto">
        <h1 id="work" className="text-xl md:text-3xl text-black">Projects</h1>
        <div className="flex items-center justify-center py-2 px-1 rounded-full bg-gray-300 mt-4">
        <button onClick={() => setProjectType("all")} className={projectType === "all" ?"focus:outline-none block w-16 md:w-24 bg-blue-900 rounded-full font-hero font-sans text-sm py-2 px-4  text-center shadow-md mx-2": "focus:outline-none block w-16 md:w-24  bg-blue-700 rounded-full font-hero font-sans text-sm py-2 px-4 hover:bg-blue-600 text-center shadow-md mx-2"}>all</button>
        <button onClick={() => setProjectType("dev")} className={projectType === "dev" ?"focus:outline-none block w-16 md:w-24  bg-blue-900 rounded-full font-hero font-sans text-sm py-2 px-4  text-center shadow-md mx-2": " focus:outline-none block w-16 md:w-24  bg-blue-700 rounded-full font-hero font-sans text-sm py-2 px-4 hover:bg-blue-600 text-center shadow-md mx-2"} >dev</button>
        <button onClick={() => setProjectType("ux")} className={projectType === "ux" ?" focus:outline-none block w-16 md:w-24 bg-blue-900 rounded-full font-hero font-sans text-sm py-2 px-4  text-center shadow-md mx-2": "focus:outline-none block w-16 md:w-24  bg-blue-700 rounded-full font-hero font-sans text-sm py-2 px-4 hover:bg-blue-600 text-center shadow-md mx-2"} >UX</button>
        </div>
        </div>
        <div className="mt-8 lg:mt-16 flex items-center justify-center">
        <div className="flex flex-wrap w-12/12 md:w-11/12 xl:w-9/12 -mt-8">
        {content.projects.projectData.map((item,index) => 
        content.projects.projectData[index].sortby.includes(projectType) &&
        <Project 
        key={item.id}
        item={item}
        index={index}
        />)} 
        </div>
        </div>
        </div> 
       
    )
}

export default Projects
