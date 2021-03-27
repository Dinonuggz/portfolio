import timelinef24 from "../assets/f247/timeline.svg"
import mappingf24 from "../assets/f247/mappingf24.png"
import f24colors from "../assets/f247/f24colors.svg"
import f24pain from "../assets/f247/f24pain-min.png"
import f24design1 from "../assets/f247/f24design1-min.png"
import f24final from "../assets/f247/f24final-min.png"
import f24home from "../assets/f247/f24home-min.png"
import f24wire from "../assets/f247/f24wire-min.png"
import f24workouts from "../assets/f247/f24workouts-min.png"
import f24profile from "../assets/f247/f24profile-min.png"
import f24gif from "../assets/f247/f24gif-min.gif"
import f24personas from "../assets/f247/f24personas.png"
import background from "../assets/astra/background_hero-min.png"
import colors from "../assets/astra/color-hero-min.png"
import design1herofull from "../assets/astra/design1_fullhero.png"
import design1aboutfull from "../assets/astra/design1_fullabout.png"
import design2herofull from "../assets/astra/design2_herofull.png"
import design3herofull from "../assets/astra/design3herofull.png"
import designfinalherofull from "../assets/astra/designfinalherofull.png"
import pwireframe from "../assets/portfolio/portfoliowireframe.png"
import coding from "../assets/portfolio/coding.png"



/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
    projects: {
        title: 'projects',
        f247Data:[
            
            {id: 1, tag:"THE PROBLEM", name:"How to make the app more useful?", text: "There is currently no real incentive to download & keep the app if you only use the gym facilities and don't need to book classes. Many competitors offer their members training overviews etc. however Fitness24/7 does not. Having been an avid gymgoer & around other members for over 3 years it became apparent that others around me also have voiced this issue. This led me to the idea to improve upon the existing app by enabling the gymgoer who does not attend fitness classes to make use of the app.", img:timelinef24, style:"w-12/12 mt-8"},

            {id: 2, tag:"USER RESEARCH", name:"Current & Prospective users", text: "To get an understanding of how to make the app useful to more members I started my research by looking at the current app user.  Initially, current reviews on the Google Play & IOS app store where analyzed and pain points & positives were rated from low to high based on reoccurrence. To further consolidate findings, contextual inquiries & semistructed interviews were conducted. In the contextual inquiries users where observed when navigating the app and where given tasks, e.g. how they would usually book a fitness class. The main purpose of the interview was to get more information on what pain points users would experience and what currently worked well with the app.Painting a clear picture of the prospective users needs was significantly harder, however the same research procedure was conducted, starting with app reviews. After these had been analyzed, semi-structured interviews with 4 current gymgoers  who do not go to fitness classes were conducted. Affinity mapping was ultimately used to categorize and understand the gathered data, containing both user needs and current pain points.",img:mappingf24, style:"w-11/12 sm:w-10/12 md:w-6/12 mt-8" },

            {id: 3, tag:"USER RESEARCH", name:"Personas", text: "The affinity mapping process made it clear that a holistic approach was necessary in redesigning the current app by appealing to both the current user base and the broadened target audience without any compromises. By creating two personas, one that frequently books classes & that only uses the gym facilities it was easier to pinpoint how and which changes would need to be implemented.",img:f24personas, style:"w-12/12 mt-8"  },

            {id: 4, tag:"IDEATION", name:"The current pain points", text: "the ideation phase began with taking a closer look at the current app and highlighting some of the current pain points users expressed. In doing so it was also easier to envision how new features e.g. workout tracking could be implemented without negatively impacting the current user experience.",img:f24pain, style:"w-12/12 mt-8" },

            {id: 5, tag:"IDEATION", name:"The ideation concept", text: "This design tried to resemble the original app in some of the core functionality such as the class booking system. Here I worked with a high fidelity prototype as simply wireframing the user experience wasn't enough to fully compare it to the original app. Some of the major changes included workout stats on the home screen (weekly workouts & hours spent at the gym) and a booked classes card displayed on the home screen. Also overall usability enhancement where tested with a filter fly-out menu on the booking screen and active filters embedded directly on the booking screen. ",img:f24design1, style:"w-12/12 mt-8"},

            {id: 6, tag:"PROTOTYPING", name:"Designing the new app", text: "At this point I reached out to users from the research stage and let them navigate the design prototype through the Figma Mirror Application. It became clear that while the design was honing in on appealing to a larger member base the overall user experience was still in need of improvement. Testers experienced the home screen was now too cluttered and an easier overview of classes was still needed. Further, the filter fly-out menu prototype covered important content but also the filter option training goals was considered redundant. Users also expressed that the workout tracking feature could be condensed down to a single screen.",img:"placecholder" },

            {id: 7, tag:"PROTOTYPING", name:"Design decisions", text: "The final design stage revolved around focusing on the essentials thus further optimizing the user flow by removing visual clutter and eliminating any redundancy. The Nav bar was condensed down to 3 choices (*later reversed as it negatively impacted usability), workout stats only displayed on Profile page & the Booking section was condensed down to one screen with embedded filtering - no flyout-menu. Also added was a barebones workout planner & the Home menu only shows a calendar (booked or planned workouts) along with room for a news section (e.g. home workouts)",img:f24wire, style:"w-12/12 mt-8" },

            {id: 8, tag:"CONCEPT", name:"FINAL CONCEPT - Home", text: "The membership details as seen on the before screen (right) have been moved to the profile page as this information was redundant here. Newly added in its place is a simple workout tracking feature where users can plan and track their workouts. Also included is an overview of booked classes which was a highly requested feature. The concept prototype also indicates how the home screen could be used to display links to external data like news or in this case home workouts.",img:f24home, style:"mt-8" },

            {id: 9, tag:"CONCEPT", name:"FINAL CONCEPT - Class booking", text: "The booking system has been condensed down to a single screen. During research it became clear that having a separate filtering screen was an inconvenience for many users as they would have to navigate back and forth to update the results and view active filters. The newly designed booking system enables users to easily adjust and view active filters right on the booking screen. In addition, instead of  using icons descriptive images are used to indicate what an offered class is all about. This change was made as users indicated that the icons didn't offer much help to distinguish classes (aside from the obvious icons, e.g. spinning bike).",img:f24gif, style:"mt-8 sm:w-5/12 md:w-3/12" },

            {id: 10, tag:"CONCEPT", name:"FINAL CONCEPT - Workout planner", text: "As the research stage showed, some form of workout tracking and planning was requested by the users. In the end a very simple planning came to fruition.By simply allowing users to add their custom workouts and plan their week accordingly infused with workout data this could be enough to garner interest & satisfaction by the target audience.",img:f24workouts, style:"mt-8" },

            {id: 11, tag:"CONCEPT", name:"FINAL CONCEPT - Profile", text: "The Profile page now displays workout statistics to keep the user motivated. The user flow has been altered with an additional screen now displaying membership information. This was done as membership information isn't necessarily essential information for the recurring user.",img:f24profile, style:"mt-8" },

            {id: 12, tag:"CONCEPT", name:"FINAL CONCEPT - Branding & identity", text: "In this concept version I stayed within the bounds of the original color profile since it already felt visually balanced. One of the main changes was a wider usage of orange (#F7A600) as the base color for graphs & statistics.For this design concept I designed some visual elements similar to what Fitness24/7 is currently using on their web & social media platforms but not their app. These where sparsely placed on certain screens to add brand identity to negative space. ",img:f24colors, style:"mt-8 md:w-6/12" },

            {id: 13, tag:"CONCLUSION", name:"User testing & conclusion", text: "One of the hardest aspects of this project was by far the booking screen as trying to not clutter the UI was a real challenge. In the end, when asked, users rated the final booking design considerably higher than the original. Overall, users expressed that the new user experience was more fluent than the original app and the new features did not have a negative impact.The workout planner was also quite the challenge as complexity could easily snowball affecting other aspects of the app design. Users expressed that the added workout scheduling functionality was quite simplistic but still felt like they could make use of it. Overall, the project is seen as a success. As this was an unsolicited project done by myself with no affiliation to Fitness24/7 I had to put the brakes on it eventually. A big contributing factor to the results in this case study is most likely the sample size of users who participated and have been interviewed in this study (a total of 8 participants). However I do believe the case study was built on a good foundation as a large amount of app reviews where also used when conducting research and creating affinity maps. Other than that, in particular the workout planner is something I feel could be further developed by adding more layers of complexity. This could be done by having an exercise database allowing users to customize and log every exercise and PR they make to keep progressing in their fitness journey.",img:f24final, style:"mt-8" },

            {id: 14, tag:"CONCLUSION", name:"The prototype", text: "Linked to the right is the final Figma prototype. Here you can get a sense of the onboarding process and the user flow.Please note that not every screen can be interacted with as some of the showcased content has been created with Adobe After Effects.",link:"https://www.figma.com/proto/0hdiXgXRgr9iMXYLZ6BCVl/Fitness24%2F7-Redesign?kind=&node-id=626%3A605&scaling=scale-down&viewport=400%2C914%2C0.26390525698661804",linkText:"Explore the Figma Prototype" },
                
        ],
        astraData:[
            
            {id: 1, tag:"Background", name:"Background", text: "This case study explored landing page designs for my own creation, that is , Astra Watches - a fictional brand based on real designs. When designing the astra watch my intention was to create a high-end watch, an infusion of retro-tech watch elements ( LCD display similar to Casio watches) and traditional Swiss luxury watchmaking. In the design of the Astra Genesis watch naval accents were added to embrace the more adventurous side to the brand. These attributes would essentially be the foundation for building an e-commerce landing page.",img:background, style:"mt-4"
            },

            {id: 2, tag:"Colors & assets", name:"Colors & assets", text: "Since the watch itself has naval features, it was clear early on that navy blue accents would be used on the website to encapsulate the naval brand image. Moreover, utilizing the gold tones of the watch itself would be used to add luxurious flair to the website. Being able to render the watch designs and created packaging ultimately allowed me to art-direct the presentation of the watch very precisely for the website.",img:colors, style:"mt-4" },

            {id: 3, tag:"Design 1", name:"Magazine layout", text: "The initial approach was a magazine inspired layout that showcases the design and features of the Genesis watch (see below). Having sections stretching above 100% view height and overlapping each other was an intended idea to keep the visitor scrolling to unravel details about the watch and the brand itself with bold copy.",img:design1herofull, style:"mt-4"},

            {id: 4, tag:"Design 1", name:"Building upon the landing page design", text: "In this instance I wanted to further explore the possibilities of visual storytelling and designed an about page. Similarly to the landing page i wanted a seamless experience by creating an arrow based timeline consisting of mission statements, brand identity & background.",img:design1aboutfull, style:"mt-4" },

            {id: 5, tag:"Design 2", name:"Scroll based interactions", text: "This landing page was designed to create an immersive experience through scroll based interactions. Similar to the previous design, this concept encourages scrolling to reveal more information, however does this on a much more personal level where the visitor can get to know the watch in a 3D environment. This website was carefully art-directed using Keyshot to render the various watch animations. The live website linked below was designed and developed using webflow, please note,  it is currently only optimized for bigger screens.",img:design2herofull, style:"",link:"https://astra-011ca1.webflow.io/",linkText:"Explore the live website" },

            {id: 6, tag:"Design 3", name:"Grid based (responsive)", text: "Designed for ease-of-overview , this grid-based layout is modular and efficient in organizing & laying out elements. Included below, is one of the wireframes created in Figma, my goal here was clear visual hierarchy and designing with CSS-grid in mind for ease of later development. The live website was developed using vanilla HTML & CSS and is fully responsive utilizing Flex-Box, CSS-GRID & media queries.",img:design3herofull, style:"mt-4",link:"https://astrawatches-ecommerce.netlify.app/",linkText:"Explore the live website" },

            {id: 7, tag:"Final Design", name:"Key takeaways & final Design", text: "Key takeaways from the previous design iterations as the scroll and magazine based was how they impacted usability. Conducted contextual inquiries with 4 participants indicated that while the initial wow-factor was more pronounced on these websites, a lack of clear sections and at-a-glance overview would most likely result in a lower conversion-rate and increased frustration. As a result, the final design largely builds upon the grid based design, however is not as blocky, which gives it a more overall premium feel. The resulting app is fully responsive and was developed using React & Tailwind CSS. ",img:designfinalherofull, style:"mt-4",link:"https://astrawatches.netlify.app/",linkText:"Explore the live website"}
        

        ],
        portfolioData:[
            
            {id: 1, tag:"Background", name:"Idea and wireframes", text: "To showcase my projects i opted for a portfolio built from scratch using React to allow myself maximum design versatility. Although one could argue it's also a way of saying - I have knowledge to propose UX solutions that are feasible in developement. The idea for the portfolio quite straight forward, clear CTA's, an easy overview of projects and a not too overbearing about section, focusing on essentials. For the project page i wanted clear sections for ease of readability and an overall homogenic layout for the same reason. Below are initial wireframe sketches that laid the foundation for the portfolio. ",img:pwireframe, style:"mt-4" },

            {id: 2, tag:"Development", name:"React and Tailwind CSS", text: "I am of firm belief that knowing the development process makes you a better designer as it allows for better communication with developers of how proposed design systems could be implemented. Below is merely a snippet of the backbones of what you are currently viewing, the portfolio itself is also responsive and fetches dynamic content.",img:coding, style:"mt-4"},
        ]
      }
  };