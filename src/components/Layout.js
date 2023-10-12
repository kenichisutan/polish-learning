import Navbar from "./Navbar";

const Layout = ({children}) => {
    return(
        <div  className="main-page">
            <Navbar />
            <div>
                {children}
            </div>
        </div>
    )
}

export default Layout;