import gsap from "gsap"
import Dock from "./Components/Dock"
import Navbar from "./Components/Navbar"
import Window from "./Components/Window"
import { Draggable } from "gsap/Draggable" 
import Terminal from "./Windows/Terminal"
import Safari from "./Windows/Safari"
import Resume from "./Windows/Resume"
import Finder from "./Windows/Finder"
import Text from "./Windows/Text"
import ImagesContent from "./Windows/ImagesContent"
import Contact from "./Windows/Contact"
import Home from "./Components/Home"
import MobileBlocker from "./Components/MobileBlocker"

gsap.registerPlugin(Draggable)

const App = () => {
  return (
    <main>
      
      <MobileBlocker />
      <Navbar />
      <Window />
      <Dock />
      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <ImagesContent />
      <Contact />
      <Home />
    </main>
  )
}
export default App