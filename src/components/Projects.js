import React from 'react'
import content from "../data/index"
import Project from "./Project"

const Projects = () => {
    return (
        <div className="overflow-hidden">
        <div className="pb-2 pt-4 sm:pt-8 md:pt-16 font-hero md:text-3xl  text-white w-10/12 sm:w-8/12 md:w-6/12 mx-auto">
        <h1 id="work" className="text-gray-300">Featured Projects</h1>
        </div>
        {content.projects.projectData.map(item => <Project 
        key={item.id}
        name={item.name}
        desc={item.desc}
        category={item.category}
        link={item.link}
        img={item.img}
        external={item.external}
        ext={item.ext}
        />)} 
        </div> 
       
    )
}

export default Projects
