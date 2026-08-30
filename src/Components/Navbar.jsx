import { useEffect, useState } from "react";
import { navIcons, navLinks } from "../Constants";
import useWindowStore from "../Stores/Window";

const Navbar = () => {
  const { openWindow } = useWindowStore();

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="logo" />

        <p className="font-medium">Abdul Mannan</p>

        <ul>
          {navLinks.map(({ id, name, type }) => (
            <li key={id} onClick={() => openWindow(type)}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>

      <ul className="flex items-center gap-4">
        {navIcons.map(({ id, img }) => (
          <li key={id}>
            <img
              src={img}
              className="hover:opacity-70 cursor-pointer"
              alt={`icon-${id}`}
            />
          </li>
        ))}

        <li className="text-sm font-medium whitespace-nowrap">
          {time.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          })}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
