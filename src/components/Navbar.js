import {Link} from "react-router-dom";
import "../styles/Navbar.css";
import {FormattedMessage} from "react-intl";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top" data-bs-theme={"dark"}>
            <div className="container-fluid">
                <Link to={"/"} className={"navbar-brand"}>
                    <FormattedMessage id="page_title"/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <button type="button" className={"btn btn-danger btn-sm"}>
                                <Link to={"/home"} className={"nav-link"}>
                                    <FormattedMessage id="navbar_home"/>
                                </Link>
                            </button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className={"btn btn-danger btn-sm"}>
                                <Link to={"/dictionary"} className={"nav-link"}>
                                    <FormattedMessage id="navbar_dictionary"/>
                                </Link>
                            </button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className={"btn btn-danger btn-sm"}>
                                <Link to={"/conjugation"} className={"nav-link"}>
                                    <FormattedMessage id="navbar_conjugation"/>
                                </Link>
                            </button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className={"btn btn-danger btn-sm"}>
                                <Link to={"/declension"} className={"nav-link"}>
                                    <FormattedMessage id="navbar_declension"/>
                                </Link>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;