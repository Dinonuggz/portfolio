import React from 'react'
import home from "../../../../assets/f247/home.png"
import homeold from "../../../../assets/f247/homeold.png"
import planner from "../../../../assets/f247/planner.png"
import profile from "../../../../assets/f247/Profile.png"
import profileold from "../../../../assets/f247/profileold.png"
import onboarding from "../../../../assets/f247/onboarding.png"
import booking from "../../../../assets/f247/booking.gif"
import oldbooking from "../../../../assets/f247/oldbooking.png"
import designsystem from "../../../../assets/f247/designsystem.png"


const CustomSection5= () => {
    return (
        <div className="">
         <div className="">
             <div className="flex flex-col lg:flex-row justify-center items-center w-full">
                 <div className="">
            <p className="text-2xl font-bold mb-2 mt-4">Home</p>
             <p>Membership details were moved from the home-screen to the profile screen as this information was redundant. Newly added in its place is a simple calendar displaying workout scheduling and booked classes. The prototype also indicates how the home screen could be used to display links to external data like news or in this case home workouts.</p>
             </div>
             <img className="w-12/12 md:w-8/12 lg:w-4/12" src={home} alt=""/> 
             <img className="hidden lg:block lg:w-2/12 p-4" src={homeold} alt=""/> 
             </div>
             <div className="flex flex-col-reverse lg:flex-row justify-center items-center w-full">   
             <img className="hidden lg:block lg:w-2/12 p-4" src={oldbooking} alt=""/> 
             <img className="w-10/12 md:w-7/12 lg:w-3/12" src={booking} alt=""/> 
             
             <div className="lg:ml-4">
            <p className="text-2xl font-bold mb-2 mt-4">Booking</p>
             <p>The booking experience has been condensed down to a single screen to improve user overview and flow. During research it became clear that having a separate filtering screen was an inconvenience for many users as they would have to navigate back and forth to update the results and view active filters. The concept designed booking system enables users to easily adjust and view active filters on the booking screen itself. In addition, instead of using icons, descriptive images are used. This change was made as users indicated that the icons didn't offer much help to distinguish classes at a glance. </p>
             </div>
             </div>
             <div className="flex flex-col lg:flex-row justify-center items-center w-full"> 
             <div className="">
            <p className="text-2xl font-bold mb-2 mt-4">Profile</p>
             <p>The Profile screen now displays workout statistics to keep the user motivated. The user flow has been altered with an additional screen now displaying membership information. This was done as membership information isn't necessarily essential information for the recurring user.</p>
             </div>
             <img className="w-12/12 md:w-8/12 lg:w-4/12" src={profile} alt=""/> 
             <img className="hidden lg:block lg:w-2/12 p-4" src={profileold} alt=""/> 
             </div>

             <div className="flex flex-col-reverse lg:flex-row justify-center items-center w-full">
             <img className="w-12/12 md:w-8/12 lg:w-4/12" src={planner} alt=""/> 
             <div className="">
            <p className="text-2xl font-bold mb-2 mt-4">Workout Planner</p>
             <p>A very simple workout planning tool came to fruition to help the users stay motivated by planning their workouts. Users can add workouts & pick recurring days of the weeks for their workouts, reminders would be notification based.</p>
             </div>
             </div>

             <div className="flex flex-col lg:flex-row justify-center items-center w-full">
                 <div className="">
            <p className="text-2xl font-bold mb-2 mt-4">Onboarding</p>
             <p>Added to the user experience was also an onboarding section displaying helpful information which could help Fitness24 reach out to their members more efficiently.</p>
             </div>
             <img className="w-12/12 md:w-10/12 lg:w-7/12" src={onboarding} alt=""/> 
             </div>
              <img className="w-12/12 md:w-10/12 lg:w-7/12" src={designsystem} alt=""/> 
             </div>
    </div>
    )
}

export default CustomSection5