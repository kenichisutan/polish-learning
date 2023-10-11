import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
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
                            <Link to={"/home"} className={"nav-link"}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/dictionary"} className={"nav-link"}>Dictionary</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/conjugation"} className={"nav-link"}>Conjugation</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/declension"} className={"nav-link"}>Declension</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;