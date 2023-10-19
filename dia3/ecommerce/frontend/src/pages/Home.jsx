import Catalog from "../components/Catalog"
import Footer from "../components/Footer"
import Header from "../components/Header"
import NavBar from "../components/NavBar"

function Home(){
    return(
        <>
        <NavBar/>
        <Header/>
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    <Catalog/>
                </div>
            </div>
        </section>
        <Footer/>
        </>
    )
}

export default Home