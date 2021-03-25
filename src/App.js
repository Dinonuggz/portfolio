
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import CaseStudy from "./components/pages/CaseStudy"
import {Route, Switch, useLocation} from "react-router-dom";
import Home from "./components/pages/Home"
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
   
     <>
     
     <Navbar />
     <AnimatePresence>
     <Switch location={location} key={location.key}>
     <Route path="/" exact component={Home} />
     <Route path="/:id" component={CaseStudy} />
     </Switch>
     </AnimatePresence>
     <Footer />
  
     </>
     
  );
}

export default App;
