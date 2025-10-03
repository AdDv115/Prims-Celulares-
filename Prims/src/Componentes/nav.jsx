import { Link } from "react-router-dom";
import { SiPrisma } from "react-icons/si";
import { FaUserCircle } from "react-icons/fa";
import "./css/nav.css"

const Nav = () => (
     <div className="NavCont">
        <Link to="/"> <p> <SiPrisma className="icon" /> </p></Link>
        <Link to="/"> <p> Marcas </p></Link>
        <Link to="/catalogo"> <p> Catalogo </p></Link>
        <Link to="/login"> <p> <FaUserCircle className="icon" /> </p></Link>
     </div>
)

export default Nav