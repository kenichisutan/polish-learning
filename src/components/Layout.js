import Navbar from "./Navbar";

const Layout = ({children}) => {
    return(
        <>
            <header>
                <Navbar />
            </header>
            <div  className="main-page">
                <div>
                    {children}
                </div>
            </div>
        </>
    )
}

export default Layout;