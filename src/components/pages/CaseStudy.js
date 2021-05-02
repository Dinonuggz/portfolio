import React from 'react'
import CaseHeader from "./CaseComponents/CaseHeader.js"
import CaseSection from "./CaseComponents/CaseSection"
import data from "../../data/index"
import projectdata from "../../data/projectData"
import content from "../../data/index"
import { motion } from 'framer-motion'
import {Link} from "react-router-dom"
const CaseStudy = ({match}) => {
 
  const DataId = match.params.id
  const dataArray = data.projects.projectData
  let index = dataArray.findIndex(id => id.id ===DataId);
  let sMap = match.params.id
  let filt = content.projects.projectData.filter(item => item.id !== sMap); 

  const containerVariants = {
    hidden: {
        opacity:0,
    },
    visible: {
        opacity: 1,
        transition: {delay:0.2, duration:0.3}
    },
    exit: {
        x: "-100vw",
        transition: {ease: "easeInOut"}
    }
}
    return (
        <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="exit" className="bg-white overflow-hidden">
        <CaseHeader index={index} dataArray={dataArray}/>
        {projectdata.projects.[sMap + "Data"].map(item => <CaseSection
    key={item.id}
    id={item.id}
    component={item.component}
    tag={item.tag}
    name={item.name}
    text={item.text}
    img={item.img}
    style={item.style}
    link={item.link}
    linkText={item.linkText}/>)}
    <hr className=" mx-4 md:mx-12 lg:mx-20 mb-4 md:mb-8"/>
    <div className="w-10/12 md:w-9/12 lg:w-8/12 mx-auto py-3 mb-2 xs:mb-4 sm:mb-2 md:mb-8 mt-2 xs:mt-4 sm:mt-4 md:mt-8">
    <h2 className="text-xl text-gray-900 sm:text-2xl md:text-4xl font-bold mb-2 mt-2 xs:mt-4 sm:mt-4 md:mt-8">Want to see more?</h2>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 w-10/12 md:w-8/12 mx-auto text-white mb-4 md:mb-12">
     {filt.slice(0,2).map(item => <div key={item.id} className="bg-gray-900">
        <img src={item.img} alt=""/>
        <div className="p-4 mb-2 relative md:h-52">
        <h1 className="text-md mb-2 sm:text-lg lg:text-xl">{item.name}</h1>
        <h2 className="text-sm mb-6 text-gray-300">{item.desc}</h2>
        {item.link ?
         <Link className="mt-4 inline w-44 px-5 bottom-0 mb-2  py-2 bg-blue-700 font-sans text-sm md:absolute hover:bg-blue-600 text-center shadow-md" to={`/${item.link}`}>View Case Study</Link>
        :<p className=" mt-4 inline w-44 px-5 py-2 bg-gray-700 bottom-0 mb-2 font-sans text-sm md:absolute  text-center shadow-md">In Progress</p>}
        </div>
        
        </div> )}  
    </div>
        </motion.div>
    )
}

export default CaseStudy
