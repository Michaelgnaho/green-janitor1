import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import CTA from "./components/CTA.jsx";
import FAQ from "./components/FAQ.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import NavBar from "./components/NavBar.jsx";
import Project from "./components/Project.jsx";
import Team from "./components/Team.jsx";
import Testimonials from "./components/Testimonials.jsx";
// import Qr from "./components/Qr.jsx";
// import Newsletter from "./components/NewsLetter.jsx";
import Benefit from "./components/Benefit.jsx";
import Stats from "./components/Stats.jsx";
import './index.css'

function App() {

  return (
    <div className="">
    <NavBar/>
    <Home/>
    <About/>
    <Project/>
    <Stats/>
    <Benefit/>
    <Testimonials/>
    <Team/>
    <CTA/>
    <Contact/>
    {/* <Qr/>
    <Newsletter/> */}
    <FAQ/>
    <Footer/>
    
    

     </div>
  )
}

export default App
