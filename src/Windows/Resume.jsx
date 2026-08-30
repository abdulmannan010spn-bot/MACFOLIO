
import { Download } from "lucide-react"
import WindowControls from "../Components/WindowControls"
import WindowWrapper from "../Hoc/WindowWrapper"

const Resume = () => {
  return (
    <>
    <div id="window-header">
        <WindowControls target="resume"/>
        <h2>Resume.pdf</h2>

        <a href="file/resume.pdf" download className="cursor-pointer" title="Download resume">
        
        <Download className="icon" />
        </a>
    </div>
    <div className="">
        <img src="https://pngmagic.com/webp_images/Plain-white-background-image.webp" className="object-cover" alt="" />
    </div>

    </>
  )
}

const ResumeWindow = WindowWrapper(Resume ,'resume')

export default ResumeWindow