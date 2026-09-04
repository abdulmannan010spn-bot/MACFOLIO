import WindowControls from "../Components/WindowControls";
import { gallery } from "../Constants";
import WindowWrapper from "../Hoc/WindowWrapper";
import useWindowStore from "../Stores/Window";

const Photos = () => {
  const { openWindow } = useWindowStore();

  const openImage = (item) => {
    openWindow("imgfile", { name: `Photo ${item.id}`, imageUrl: item.img });
  };

  return (
    <>
      <div id="window-header">
        <WindowControls target="photos" />
        <h2>Gallery</h2>
      </div>

      <div className="p-5 space-y-5">
        <h3>A Few Moments</h3>
        <p>Some snapshots from behind the screen.</p>

        <ul className="grid grid-cols-3 gap-3">
          {gallery.map((item) => (
            <li key={item.id} onClick={() => openImage(item)} className="cursor-pointer">
              <img
                src={item.img}
                alt={`Gallery photo ${item.id}`}
                className="w-full aspect-square object-cover rounded-lg"
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const PhotosWindow = WindowWrapper(Photos, "photos", { top: "25%" });

export default PhotosWindow;