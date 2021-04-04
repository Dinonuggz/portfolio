import design2herofull from "../assets/f247hero.png"

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
    projects: {
        title: 'projects',
        f247Data:[
            
            {id: 0, component: "CustomSection1", tag:"THE PROBLEM", name:"Defining the problem", text: "There is currently no real incentive to download & keep the app if you only use the gym facilities and don't need to book classes. Many competitors offer their members training overviews etc. however Fitness24/7 does not. Having been an avid gymgoer & around other members for over 3 years it became apparent that others around me also have voiced this issue. This led me to the idea to improve upon the existing app by enabling the gymgoer who does not attend fitness classes to make use of the app.", style:"w-12/12 mt-8"},

            {id: 1, component: "CustomSection2", tag:"Research", name:"User research", text: "To get an understanding of how to make the app useful to more members I started my research by looking at the current app user.  Initially, current reviews on the Google Play & IOS app store where analyzed and pain points & positives were rated from low to high based on reoccurrence. To further consolidate findings, contextual inquiries & semistructed interviews were conducted. In the contextual inquiries users where observed when navigating the app and where given tasks, e.g. how they would usually book a fitness class. The main purpose of the interview was to get more information on what pain points users would experience and what currently worked well with the app.Painting a clear picture of the prospective users needs was significantly harder, however the same research procedure was conducted, starting with app reviews. After these had been analyzed, semi-structured interviews with 4 current gymgoers  who do not go to fitness classes were conducted. Affinity mapping was ultimately used to categorize and understand the gathered data, containing both user needs and current pain points.", style:"w-11/12 sm:w-10/12 md:w-6/12 mt-8" },

            {id: 2, component: "CustomSection3", tag:"Research", name:"Personas", text: "The affinity mapping process made it clear that a holistic approach was necessary in redesigning the current app by appealing to both the current user base and the broadened target audience without any compromises. By creating two personas, one that frequently books classes & that only uses the gym facilities it was easier to pinpoint how and which changes would need to be implemented.", style:"w-12/12 mt-8"  },

            {id: 3, component: "CustomSection4", tag:"IDEATION", name:"Design & wireframes", text: "the ideation phase began with taking a closer look at the current app and highlighting some of the current pain points users expressed. In doing so it was also easier to envision how new features e.g. workout tracking could be implemented without negatively impacting the current user experience.", style:"w-12/12 mt-8" },

            {id: 4, component: "CustomSection5", tag:"Prototype", name:"The prototype", text: "This design tried to resemble the original app in some of the core functionality such as the class booking system. Here I worked with a high fidelity prototype as simply wireframing the user experience wasn't enough to fully compare it to the original app. Some of the major changes included workout stats on the home screen (weekly workouts & hours spent at the gym) and a booked classes card displayed on the home screen. Also overall usability enhancement where tested with a filter fly-out menu on the booking screen and active filters embedded directly on the booking screen. ", style:"w-12/12 mt-8"},

            {id: 5, component: "CustomSection6", tag:"Conclusion", name:"Conclusion & Reflection", text: "At this point I reached out to users from the research stage and let them navigate the design prototype through the Figma Mirror Application. It became clear that while the design was honing in on appealing to a larger member base the overall user experience was still in need of improvement. Testers experienced the home screen was now too cluttered and an easier overview of classes was still needed. Further, the filter fly-out menu prototype covered important content but also the filter option training goals was considered redundant. Users also expressed that the workout tracking feature could be condensed down to a single screen.",img:"placecholder" },          
        ],
        astraData:[
            
            {id: 6, tag:"Background", name:"Background", text: "This case study explored landing page designs for my own creation, that is , Astra Watches - a fictional brand based on real designs. When designing the astra watch my intention was to create a high-end watch, an infusion of retro-tech watch elements ( LCD display similar to Casio watches) and traditional Swiss luxury watchmaking. In the design of the Astra Genesis watch naval accents were added to embrace the more adventurous side to the brand. These attributes would essentially be the foundation for building an e-commerce landing page.", style:"mt-4"
            },

            {id: 7, tag:"style-guide", name:"Branding & style-guides", text: "Since the watch itself has naval features, it was clear early on that navy blue accents would be used on the website to encapsulate the naval brand image. Moreover, utilizing the gold tones of the watch itself would be used to add luxurious flair to the website. Being able to render the watch designs and created packaging ultimately allowed me to art-direct the presentation of the watch very precisely for the website.", style:"mt-4" },

            {id: 8, tag:"Research", name:"E-commerce funneling & user flows", text: "The initial approach was a magazine inspired layout that showcases the design and features of the Genesis watch (see below). Having sections stretching above 100% view height and overlapping each other was an intended idea to keep the visitor scrolling to unravel details about the watch and the brand itself with bold copy.", style:"mt-4"},

            {id: 9, tag:"Wireframes", name:"Wireframes", text: "In this instance I wanted to further explore the possibilities of visual storytelling and designed an about page. Similarly to the landing page i wanted a seamless experience by creating an arrow based timeline consisting of mission statements, brand identity & background.", style:"mt-4" },

            {id: 10, tag:"Development", name:"Development & Conclusion", text: "Making the website responsive across all break-points was key, ",img:design2herofull, style:"",link:"https://astra-011ca1.webflow.io/",linkText:"Explore the live website" },

        ],
        portfolioData:[
            
            {id: 11, tag:"Background", name:"From idea to development", text: "To showcase my projects i opted for a portfolio built from scratch using React to allow myself maximum design versatility. Although one could argue it's also a way of saying - I have knowledge to propose UX solutions that are feasible in developement. The idea for the portfolio quite straight forward, clear CTA's, an easy overview of projects and a not too overbearing about section, focusing on essentials. For the project page i wanted clear sections for ease of readability and an overall homogenic layout for the same reason. Below are initial wireframe sketches that laid the foundation for the portfolio. ", style:"mt-4" },
        ]
      }
  };