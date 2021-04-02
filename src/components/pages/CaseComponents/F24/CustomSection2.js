import React from 'react'
import affinitymap from "../../../../assets/f247/mappingf24.png"

const CustomSection2= () => {
    return (
        <div>
         <p>To identify if the perceived pain-points where valid I started my user research by taking a closer look at app reviews, both on Google Play and IOS app store.</p> 
         <h2 className="text-2xl font-bold mb-2 mt-4">Quotes from app reviews (Android & IOS)</h2>
         <div className="bg-gray-100 p-4 w-full flex flex-col lg:flex-row">
        <p className="italic bg-blue-200 p-2 shadow mb-2   mx-4 text-sm">"UI does not follow any logic and feels clumsy*"</p>
        <p className="italic bg-blue-200 p-2 shadow mb-2  mx-4 text-sm">"I don't understand the purpose of the app? I can't find my gym, nor track workouts, nor use it to get access to the gym. Why have an app that fills no purpose? And it is slow."</p>
        <p className="italic bg-blue-200 p-2 shadow mb-2  mx-4 text-sm">"App is useless. Only useful to book classes...You can't track your check-ins, you should add a workout schedule**"</p>
        <p className="italic bg-blue-200 p-2 shadow mb-2 mx-4 text-sm">"An improvement would be being able to track your workouts, which would be much more useful than days being a member *"</p>
        <p className="italic bg-blue-200 p-2 shadow mb-2 mx-4 text-sm">"Please add booked classes to homescreen!*"</p>
         </div>
         <div className="text-xs flex opacity-70 mt-1">
         <p className="mr-2">*Translated from swedish.</p>
         <p className="">*Translated & omission of words.</p>
         </div>
         <hr className="sm:w-6/12 md:w-4/12 mt-1"/>
         <h2 className="text-2xl font-bold mb-2 mt-4">Contextual inquiries & semi-structured Interviews</h2>
         <p>To further consolidate findings 4 active contextual inquiries were conducted with three users who frequently book classes and one user who has never used the app before. During the contextual inquiries users where observed when navigating the app and where given the task to book a class.</p>
         <p className="mt-2">
         To try to identify the the needs of the gym-goer semi-structured interviews with 4 current gymgoers who do not go to fitness classes were conducted. They were asked about how often they use the app, what actions they perform using the app and what needs where currently not met. </p>
         <h2 className="text-2xl font-bold mb-2 mt-4">Affinity mapping</h2>
         <p>Affinity mapping was ultimately used to categorize and try to understand the gathered data, containing both user needs and current identified pain-points.</p>
        <img className="pt-4 md:pt-8 lg:pt-12 lg:w-6/12" src={affinitymap} alt=""/>
        </div>
       
    )
}

export default CustomSection2