import gsap from "gsap"
import Dock from "./Components/Dock"
import Navbar from "./Components/Navbar"
import Window from "./Components/Window"
import { Draggable } from "gsap/Draggable" 
import Terminal from "./Windows/Terminal"
import Safari from "./Windows/Safari"

gsap.registerPlugin(Draggable)

const App = () => {
  return (
    <main>
      <Navbar />
      <Window />
      <Dock />
      <Terminal />
      <Safari />
    </main>
  )
}
export default App