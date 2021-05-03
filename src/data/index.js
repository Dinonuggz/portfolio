import astrahero from "../assets/astrahero.png"
import f247hero from "../assets/f247hero.png"
import portfoliohero from "../assets/portfoliohero.png"
import playometrichero from "../assets/playometrichero.png"
import playohero from "../assets/playohero.png"
/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
    header: {
     text: ['Hi!', "I'm Adrian Petersson", 'I am '],
      typical: [
        'UX designer ✍',
        2000,
        'Web developer 💻',
        2000,
        'Product designer 📏',
        2000
      ],
      btnText: 'Discover More',
    },
    projects: {
        title: 'projects',
        projectData:[
            {id:"f247", category: ["UX/UI"], role: "UX Researcher, UX Designer", year:"2020", name:"Fitness 24 Seven Redesign", desc: "A redesign of the current app of a popular Scandinavian fitness chain by making the app more accessible to all members.", link:"f247",img:f247hero,icon:f247hero, external:"Live Prototype", ext:"https://www.figma.com/proto/0hdiXgXRgr9iMXYLZ6BCVl/Fitness24%2F7-Redesign?kind=&node-id=626%3A605&scaling=scale-down&viewport=400%2C914%2C0.26390525698661804"},

            {id:"astra", category: ["UX/UI", "Development"], role: "UX Researcher, UX Designer, Developer", year:"2020-2021", name:"Astra Watches E-Commerce", desc: "Conceptual logo-design and a designed & developed landing-page concept for an watch e-commerce store.", link:"astra", img:astrahero,icon:astrahero, external:"Live Website", ext:"https://astrawatches.netlify.app/" },

            {id:"playo", category: ["Interaction Design", "Industrial Design"],role: "Industrial Designer, Interaction designer", year:"2019",name:"Play.ometric", desc: "A university interaction design project where I designed an inclusive interactive jumping exercise for high-schoolers based on gamification & nudging. ", link:"playo", img:playometrichero,icon:playohero, external:"" },

            {id:"portfolio", category: ["UX/UI", "Development"],role: "UX Designer, Developer", year:"2021",name:"Portfolio", desc: "This responsive portfolio you're currently viewing was designed, wireframed and ultimately developed using React & Tailwind CSS.", link:"", img:portfoliohero,icon:portfoliohero, external:"Currently viewing!" },
        ],
      }
  };