import React from 'react'
import logo from "../assets/logo.svg"
import { Link } from "react-router-dom"
import {Link as Link1} from "react-scroll"
import {useLocation} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
    const location = useLocation()

    const locationHandler= () => {
        if (location.pathname !== "/") {
    return (
        <Link to="/"><FontAwesomeIcon icon={faArrowLeft} className="mr-2"/>Home</Link> 
    )} return (
        <>
        <Link1 to="work" smooth={true} duration={1000} className="cursor-pointer"><li className="mr-4">Work</li></Link1>
        <Link1 to="about" smooth={true} duration={1000}  className="cursor-pointer"><li>About</li></Link1>
        </>)
    }
     
    return (
        <div className="bg-white w-full shadow-md  fixed z-50">
        <div className="flex items-center justify-between w-10/12 md:w-9/12 mx-auto py-3 text-black font-black">
        <Link to="/">
             <img className="max-h-12" src={logo} alt=""/>
             </Link>
            <ul className="flex text-md">
            {locationHandler()
            }  
            
            </ul>
        </div>
        </div>

       
        
    )
}

export default Navbar
