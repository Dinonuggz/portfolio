import React from 'react'
import fullapp from "../../../../assets/f247/fullapp.png"


const CustomSection6= () => {
    return (
        <div className="">
        <img className="mb-4" src={fullapp} alt=""/> 
        <p>Upon conducting remote usability testing where users navigated the figma prototype, users rated the usability of the concept considerably higher than the original app. Overall, users expressed that the new user experience was more fluent than the original app, with considerable improvements to their booking experiences. Having the workout stats on the profile page was also considered a working solution - they could easily be found within the app, but hidden enough for those who wouldn’t benefit from them.</p>
        <h3 className="text-2xl font-bold mb-2 mt-4">Challenges</h3>
        <p>The biggest challenge by far was creating an intuitive booking experience with low-complexity. Since my direct contact with users was limited I ultimately had to make a few assumptions of how the user would book a class. Conducted contextual inquries did provide a valuable dataset, however the finished concept stayed far from the original interface and more close contact with the user throughout the final design process would have expedited the design process.</p>
        <h3 className="text-2xl font-bold mb-2 mt-4">What can be improved?</h3>
        <p>The workout planner itself was a big design challenge as complexity could easily snowball and could have been adressed as a project of its own. Though users who during the research stage suggested the addition of a workout planner would help them stay motivated, expressed that the concept version was a great start, however that added functionality to the planner would make it more helpful. So one could argue the finished workout planner to be considered a MVP that would need to be refined through further design iterations.</p>
        <h3 className="text-2xl font-bold mb-2 mt-4">What's next?</h3>
        <p>Since the project was conducted with a limited scope of user-testing, with a relatively small sample-size ( a total of 8 participants) further user-testing with new users would be very useful. This could provide more valuable insight into the current state of the concept and highlighted potential improvements to be made.</p>
        <a href={"https://www.figma.com/proto/0hdiXgXRgr9iMXYLZ6BCVl/Fitness24%2F7-Redesign?kind=&node-id=626%3A605&scaling=scale-down&viewport=400%2C914%2C0.26390525698661804"} target="_blank" rel="noreferrer" className="block w-12/12 sm:w-6/12 md:w-6/12 lg:w-4/12 text-center mt-8 bg-green-600 px-7 py-3 text-sm text-white hover:bg-green-400">Link To Figma Prototype</a>
        </div>
    )
}

export default CustomSection6