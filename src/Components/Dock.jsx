import { Tooltip } from "react-tooltip";
import { useRef } from "react"
import { dockApps } from "../Constants"
import useWindowStore from "../Stores/Window";


const Dock = () => {
 const { openWindow, closeWindow, windows } = useWindowStore();
    const dockRef = useRef(null)
    const toggleApp = (app) =>{
      if(!app.canOpen) return;

      const window = windows[app.id];
      if(window.isOpen){
        closeWindow(app.id)
      }else{
        openWindow(app.id)
      }
      console.log(app)
    }
  return (
    <section id="dock">
       <div ref={dockRef} className="dock-container">
        {dockApps.map(({id,name,icon,canOpen})=>(
            <div key={id} className="relative flex justify-center">
                <button type="button"
                className="dock-icon transition-all duration-300 hover:-translate-y-5 hover:scale-100"
                aria-label={name}
                data-tooltip-id ="dock-tooltip"
                data-tooltip-content={name}
                data-tooltip-delay-show={150}
                disabled={!canOpen}
                onClick={()=>toggleApp({id,canOpen})}>

                  <img src={`/images/${icon}`} alt={name} 
                  loading="lazy"
                  className={canOpen ? "" : "opacity-60"}/>

                </button>
            </div>
        ))}
        <Tooltip id="dock-tooltip" place="top" className="tooltip"/>
        </div> 
    </section>
  )
}
export default Dock