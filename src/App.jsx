import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Home from "./Pages/Home"
import Discover from "./Pages/Discover"
import {BrowserRouter,Routes,Route} from "react-router"
import Projects from "./Pages/Projects"
import Jobs from "./Pages/Jobs"
import Events from "./Pages/Events"
import About from "./Pages/About"
import PrivacyPolicy from "./Pages/PrivacyPolicy"
import Login from "./Pages/Login"
import { Provider } from "react-redux";
import appStore from './utils/appStore'

function App() {
  return (
    <>
     <Provider store={appStore}>
      <BrowserRouter basename="/">
        <div className="min-h-screen bg-white text-gray-700">
          <Navbar />  
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/events" element={<Events />}/>
            <Route path="/about" element={<About />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
