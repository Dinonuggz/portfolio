import React from 'react'
import content from "../data/index"
import Project from "./Project"

const Projects = () => {
    return (
        <div className="overflow-hidden">
        <div className="pb-2 pt-4 sm:pt-8 md:pt-16 font-hero md:text-3xl flex flex-col items-center justify-center  text-white w-10/12 sm:w-8/12 md:w-6/12 mx-auto">
        <h1 id="work" className="text-xl md:text-3xl text-black">Featured work</h1>
        <hr className="mt-4 w-5/12"></hr>
        </div>
        <div className="mt-8 lg:mt-16 flex items-center justify-center">
        <div className="flex flex-wrap w-12/12 md:w-11/12 xl:w-9/12 -mt-8">
        {content.projects.projectData.map(item => 
        <Project 
        key={item.id}
        item={item}
        />)} 
        </div>
        </div>
        </div> 
       
    )
}

export default Projects
