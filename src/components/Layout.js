import Navbar from "./Navbar";

const Layout = ({children}) => {
    return(
        <div className="container-fluid">
            <Navbar />
            <div className={"row"}>
                {children}
            </div>
        </div>
    )
}

export default Layout;