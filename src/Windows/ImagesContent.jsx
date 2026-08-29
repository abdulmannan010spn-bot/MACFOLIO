import WindowControls from "../Components/WindowControls";
import WindowWrapper from "../Hoc/WindowWrapper";
import useWindowStore from "../Stores/Window";

const ImagesContent = () => {
  const {windows} = useWindowStore()
  const data = windows.imgfile?.data;

  if(!data) return data;
  const {name ,imageUrl} = data
  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />
        <h2>{name}</h2>
      </div>

      <div className="p-5 bg-white">
        {imageUrl ? (
          <div className="w-full">
            <img className="w-full h-auto max-h-[70vh] object-contain rounded" src={imageUrl} alt={name} />
          </div>
        ):null}
      </div>
    </>
  )
}
const ImagesContentWindow = WindowWrapper(ImagesContent, "imgfile");

export default ImagesContentWindow