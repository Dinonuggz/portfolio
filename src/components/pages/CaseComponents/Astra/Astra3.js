import React from 'react'
import userflow from "../../../../assets/astra/userflow.png"
const CustomSection1= () => {
    return (
        <div>
          <p>In designing for e-commerce, I utilized e-commerce experience funneling principles to structure the landing page. This gave me a good idea about how the later user flows on the landing-page might look like.</p>
            <ul className="list-disc"><li>Landing - Show users the offer</li>
                <li>Listings - Allow users to compare their options</li>
                <li>Product - Give user all the details of the product</li>
                <li>Checkout - Quick & convenient</li></ul>
          <h2 className="text-2xl font-bold mb-2 mt-4">MVP User flows</h2>
          <p>For this project I only focused on MVP-scale user flows as I would only design the landing page.</p>
          <img className="mt-4 w-10/12" src={userflow} alt=""/>

        </div>
    )
}

export default CustomSection1