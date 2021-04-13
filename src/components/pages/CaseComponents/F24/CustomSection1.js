import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons'
const CustomSection1= () => {
    return (
        <div>
         <p>Fitness 24/7 is one of the fastest growing fitness chains in Scandinavia, their mission is to keep expanding globally and to become an industry leader providing affordable gym memberships with high consumer value. Having been a member for a long time, I noticed considerable flaws & members around me complaining about the current app.</p>
        <div className="mt-6">
        <h3 className="text-2xl font-bold mb-4">What are users saying?</h3>
            <div className="shadow-md p-4 bg-white border border-gray-100 mb-4 rounded">   
        <p className="font-bold"> <FontAwesomeIcon icon={faMinusCircle} className="mr-2 text-red-500"/> Class Booking</p>
        <p>Within the app members can book fitness classes but the booking process itself can be quite tedious as the filter screen obstructs the users view of the main booking screen forcing the user to go back and forth between filter and booking to find the desired class.</p>
        </div>
        <div className="shadow-md p-4 bg-white border border-gray-100 mb-4 rounded">
        <p className="font-bold"> <FontAwesomeIcon icon={faMinusCircle} className="mr-2 text-red-500"/> What if you only use the gym facilities?</p>
        <p>Many members are just interested in going to the gym, myself and others around me have noticed the app really doesn't cater to other members. However occasionally you do need to check the app, check your membership status, your payments or to aquire payment receipts and then the app remains dormant in the app drawer, not to be used again until maybe a few weeks or months later.</p>
        </div>
        </div>

        </div>
    )
}

export default CustomSection1