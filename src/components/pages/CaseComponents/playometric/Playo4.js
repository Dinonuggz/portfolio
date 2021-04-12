import React from 'react'
import ideas from "../../../../assets/portfolio/ideas.png"
import concept from "../../../../assets/portfolio/concept.svg"
import moodboard from "../../../../assets/portfolio/moodboard.jpg"
import designevo from "../../../../assets/portfolio/designevo.png"
import conceptsketch from "../../../../assets/portfolio/conceptsketch.svg"
import flow2 from "../../../../assets/portfolio/flow2.png"
const CustomSection4= () => {
    return (
        <div className="">
        <img className="md:p-5" src={ideas} alt=""/>
        <p>The primary ideation sketching phase resulted in two concepts, both based around inclusivity & gamifiying the user experience. The hurdle-concept would utilize ultrasonic sensors to measure jumping height which would remove the fear of embarrassment from peers due to not being able to jump over the physical barrier. The light-up cube idea revolves around a low-learning-curve exercise which could make it more inclusive. Having several cubes positioned in a gymnasium could result in fun game-based activities.</p>
        <div className="shadow-md p-4 bg-white border border-gray-100 mb-4 rounded">
        <p className="font-bold">Light-up cube most interesting concept </p>
            <p className="">User feedback suggested that the cube-concept was interesting due to its innovative nature and students even presented ideas of how it could be used.</p></div>
            <h3 className="font-bold text-2xl mb-4">Flowchart</h3>
            <p className="mb-4">The initial phase of the first design was to map a userflow of how the product would work:</p>
            <img src={concept} alt=""/>
            <hr className="w-full mt-8"/>
            <div className="flex flex-col lg:flex-row justify-center items-center w-full mt-8">
                <div>
                <h3 className="font-bold text-2xl mb-4">Moodboard</h3>
            <p className="mb-4">I then proceeded to create a moodboard to find inspiration for the product design and help me in my decision making process over form & functionality.</p></div>
            <img className="md:w-7/12" src={moodboard} alt=""/></div>
            <hr className="w-full mt-8"/>
            <div className="flex flex-col lg:flex-row justify-center items-center w-full mt-8">
            <div>
                <h3 className="font-bold text-2xl mb-4 mr-2">Co-design driven process</h3>
            <p className="mr-2">Throughout the design process I continously consulted end-users with mock-concepts to find the right suitable shape. </p></div><img className="md:w-8/12" src={designevo} alt=""/></div>
            <div className="flex flex-col lg:flex-row justify-center items-center w-full mt-8">
            <div>
                <h3 className="font-bold text-2xl mb-4 mr-2">The refined concept</h3>
            <p className="mr-2">As usability was a key driver during the design process I looked for user insights on the functionality aspect. As the finished product would have to be easy to use it soon became clear that only displaying light cues was not enough from a usability standpoint. Upon going back to the moodboard, I discovered that utilizing an LED-matrix could dramatically enhance usability with instructional cues. </p></div><img className="md:w-5/12" src={conceptsketch} alt=""/></div>
            <h3 className="font-bold text-2xl mb-4 mr-2">Prototype & guerilla testing </h3>
            <p>In close contact with end-users I revised the user-flow & created a functioning prototype (see above) made with Arduino. By utilizing both visual, text & sound cues, the usability was significantly improved and the "game" was quickly understood when guerilla testing of the prototype was conducted.</p>
            <img src={flow2} alt=""/>
           
        </div>
    )
}

export default CustomSection4