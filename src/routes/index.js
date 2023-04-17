import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Header from "../component/navbar/Navbar";
import { privateRoutes } from "./routesData";
import Footer from "../component/footer/Footer";
import Contact from "../component/footer/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "./Use";
const Routing = () => {
    useEffect(() => {
        AOS.init({
          duration: "1500",
        });
      }, []);
    return (
        <div >
            {/* style={{backgroundColor:"lightgray"}} */}
       {/* ================routing===================  */}
  <ScrollToTop>
            <Header/>
            <Routes>
                {
                 privateRoutes.map((route, index) => (
                     <Route
                         key={index}
                         path={route.path}
                         element={route.element}>
                        </Route>
                    ))
                   }
            </Routes>
            {/* footer */}
            <Contact/>
            <Footer/>
            </ScrollToTop>
        </div>
    );
};

export default Routing;