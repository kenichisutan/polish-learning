import {Link} from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg" data-bs-theme={"dark"}>
            <div className="container-fluid">
                <Link to={"/"} className={"navbar-brand"}>Polish Learning</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <button type="button" className={"btn btn-danger btn-sm"}>
                                <Link to={"/home"} className={"nav-link"}>Home</Link>
                            </button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className={"btn btn-danger btn-sm"}>
                                <Link to={"/dictionary"} className={"nav-link"}>Dictionary</Link>
                            </button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className={"btn btn-danger btn-sm"}>
                                <Link to={"/conjugation"} className={"nav-link"}>Conjugation</Link>
                            </button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className={"btn btn-danger btn-sm"}>
                                <Link to={"/declension"} className={"nav-link"}>Declension</Link>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;