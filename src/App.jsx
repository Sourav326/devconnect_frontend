import Navbar from "./Navbar"
import Footer from "./Footer"
import Home from "./Home"
import Discover from "./Discover"
import {BrowserRouter,Routes,Route} from "react-router"
import Projects from "./Projects"
import Jobs from "./Jobs"
import Events from "./Events"
import About from "./About"
import PrivacyPolicy from "./PrivacyPolicy"

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Navbar />  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/events" element={<Events />}/>
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
