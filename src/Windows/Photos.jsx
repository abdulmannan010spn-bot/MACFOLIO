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
        <h3 className="font-medium text-lg">
          Open Source Software Research & Development Centre
        </h3>
        <p>
          Snapshots from OSS — organizing events, collaborating with the team.
        </p>

        <ul className="grid grid-cols-3 gap-3">
          {gallery.map((item) => (
            <li
              key={item.id}
              onClick={() => openImage(item)}
              className="cursor-pointer"
            >
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

const PhotosWindow = WindowWrapper(Photos, "photos", { top: "5%" });

export default PhotosWindow;
