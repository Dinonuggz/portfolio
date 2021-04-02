import React from 'react'
import review1 from "../../../../assets/f247/appreview1.png"
import review2 from "../../../../assets/f247/appreview2.png"
import wireframe1 from "../../../../assets/f247/wireframe1.png"
import lofiwire from "../../../../assets/f247/lofiwireframe.png"

const CustomSection4= () => {
    return (
        <div>
         <p>To kickstart the ideation phase I used the original app to highlight current painpoints identified throughout my research , but also to identify and envision how additional identified user needs could be implemented. It would be important to not let new additions to the app impact the overall user experience negatively by cluttering the UI.</p>
         <div className="w-full flex flex-col items-center justify-center lg:flex-row pt-4 lg:pt-10">
             <div className="mb-6 lg:mb-0"><img src={review1} alt=""/> </div>
             <div><img className="" src={review2} alt=""/> </div>
             </div> 
             
             <h2 className="text-2xl font-bold mb-2 mt-4">Initial wireframes</h2>
             <p>The initial wireframes focused on the homescreen and class bookings. One of the major changes are workout stats displayed on the home screen along with showing booked classes on the homescreen. In addressing the booking section I tried to implement a fly-out filter menu along with active filters embedded into the top bar of the booking screen.</p>
             <div className="mt-4 md:mt-8 lg:mt-12 w-full lg:w-9/12">
                <img src={wireframe1} alt=""/>
             </div>
             <h2 className="text-2xl font-bold mb-2 mt-4">User Feedback</h2>
             <p className="mt-4">At this point I reached out to my previous research participants by sending them a prototyped version of the above wireframe where they where asked to perform certain actions. Here, two testers who mainly use the app to book classes experienced the homescreen was now cluttered with stats which could be a stressor for certain people. Additionally, the filter fly-out was covering important content and a better class overview was still needed.</p>
             <div className="bg-blue-200 mt-2 sm:mt-4 md:mt-8 text-lg p-2 md:text-xl w-full lg:w-6/12">
            <p className="italic">"I would have liked to see a cleaner homescreen, stats should be choice, they could be a trigger for some people who just want to go workout and have a good time without thinking about how much time they invest into working out" -<strong>Vicky, 24</strong></p>
             </div>
             <h2 className="text-2xl font-bold mb-2 mt-4">New wireframes</h2>
             <p>A new lo-fi wireframe was created utilizing the feedback from my testers. I removed any tracking from the homescreen and moved it to the profile screen. The Booking experience was condensed down to one screen with embedded filtering - no flyout-menu. To further assist users when selecting a class the class overview includes bar-chart based stats (e.g. class intensity). Also added was a barebones workout planner & the Home menu now includes a calendar displaying booked & planned workouts along with room for a news section (e.g. home workouts). Upon letting users revisit the wireframe & receiving positive feedback i moved forward with this concept.</p>
             <div className="mt-4 md:mt-8 lg:mt-12 w-full lg:w-9/12">
                <img src={lofiwire} alt=""/>
             </div>
    </div>
    )
}

export default CustomSection4