import Meta from "./Meta"
import Footer from "./shared/Footer"
import Header from "./shared/Header"

const Layout = ({children}) => {
    return (
        <main>
            <Meta />
            <Header/>            
            {children}
            <Footer/>
        </main>
    )
}

export default Layout
