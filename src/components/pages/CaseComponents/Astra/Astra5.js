import React from 'react'
import devgif from "../../../../assets/astra/devgif.gif"
const CustomSection1= () => {
    return (
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center">
          <div>
          <p>The website was ultimately developed using React & tailwind CSS and was developed mobile first, is fully responsive across all break-points while still maintaining a homogenous visual hierarchy. I also built a functioning cart to give the developed prototype more depth in user-testing. While the website was not a fully developed prototype no large-scale user-testing was conducted other then unmoderated remote usability testing where users (4) concluded the MVP-user-flow was as expected.
          </p>
          <h3 className="text-2xl font-bold mb-2 mt-4">Challenges</h3>
        <p>I believe limiting the project to a narrow scope by just designing a landing-page, makes it hard to draw conclusions about the finished concept. As the project resulted in a minimum viable product any user-testing can not account for any unforseen actions the user takes when navigating the app.</p>
        <h3 className="text-2xl font-bold mb-2 mt-4">What can be improved & what's next?</h3>
          <ul className="pl-4 lg:pl-6 list-disc">
            <li>In-depth user-research & testing</li>
            <li>Personas - To account for unexpected user-flows other than MVP</li>
            <li>Create Persona-based user flows</li>
            <li>Full-scale sitemap</li>
            <li>Full-scale wireframe</li>
          </ul>
          <a href="https://astrawatches.netlify.app/" className="block w-12/12 sm:w-6/12 md:w-6/12 lg:w-4/12 text-center mt-8 bg-green-600 px-7 py-3 text-sm text-white hover:bg-green-400" target="_blank"  rel="noreferrer">View Live Website</a>
          </div>
          <img className="" src={devgif} alt=""/>
          
        </div>
    )
}

export default CustomSection1