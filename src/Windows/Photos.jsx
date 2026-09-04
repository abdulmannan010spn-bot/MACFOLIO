import WindowControls from "../Components/WindowControls";
import { gallery } from "../Constants";
import WindowWrapper from "../Hoc/WindowWrapper";

const Photos = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="photos" />
        <h2>Gallery</h2>
      </div>

      <div className="p-5 space-y-5">
        <h2 className="font-medium text-lg">Open Source Software Research & Development Centre </h2>
        <p>Snapshots from Team OSS organizing events, collaborating with the team.</p>

        <ul className="grid grid-cols-3 gap-3">
          {gallery.map(({ id, img }) => (
            <li key={id}>
              <img
                src={img}
                alt={`Gallery photo ${id}`}
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