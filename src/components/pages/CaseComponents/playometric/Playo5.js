import React from 'react'
import prototype from "../../../../assets/portfolio/prototype.png"
import test from "../../../../assets/portfolio/test.png"
const CustomSection5= () => {
    return (
        <div className="">
            <div className="shadow-md p-4 bg-white border border-gray-100 mb-4 rounded md:w-6/12">Plyometric training is another word for jump training</div>
        <p>Using Solidworks I designed and 3d-Printed a prototype in biodegradable polylactic-acid (PLA), the product uses an arduino micro, 32x8 led-matrix, a piezo-buzzer, copper plating for capacitive touch and is powered by a 9v battery.</p>
        <img src={prototype} alt=""/>
        
        <div className="flex flex-col lg:flex-row justify-center items-center w-full mt-8">
            <div className="w-11/12">
            <h3 className="font-bold text-2xl mb-4">User testing</h3>
        <p>User testing was done in a fitness center where both physical education students and high school students tested the prototype. I did not provide any instructions and testers where initially confused by the prototype however by interacting with testers soon learned how it worked.</p>
        </div>
        <div className="md:px-8">
        <img className="" src={test} alt=""/>
        <p className="mt-2 text-xs">User testing was made using only one prototype, the gray play.ometrics indicate how the product would be used in the context of a gym class.</p>
        </div>
        </div>
        </div>
    )
}

export default CustomSection5