import { navIcons, navLinks } from "../Constants"
import useWindowStore from "../Stores/Window"

const Navbar = () => {
    const {openWindow} = useWindowStore()
  return (
    <nav>

        <div>
            <img src="/images/logo.svg" alt="logo" />
            <p className="font-medium">
                Abdul Mannan
            </p>

            <ul>
                {navLinks.map(({id,name,type})=>(
                    <li key={id} onClick={() => openWindow(type)}>
                        <p>{name}</p>
                    </li>
                ))}
            </ul>
        </div>

        <ul>
            {navIcons.map(({id,img})=>(
                <li key={id}>
                    <img src={img} className="icon-hover" alt={`icon-${id}`}/>
                </li>
            ))}
        </ul>

    </nav>
  )
}
export default Navbar