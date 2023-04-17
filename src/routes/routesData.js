
import Blog from "../pages/blog/Blog";
import MainCompany from "../pages/company/MainCompany";
import DetailsProgrames from "../pages/expertise/DetailsProgrames";
import Expertise from "../pages/expertise/Expertise";
import Home from "../pages/home/Home";
import Indestry from "../pages/indestries/Indestry";
import MainProjec from "../pages/project/MainProjec";
import Detail from "../pages/services/Detail";
import Service from "../pages/services/Service";



// ================rout data===================  //

export const privateRoutes = [
  
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/industries",
        element: <Indestry />,
    },
    {
        path: "/services",
        element: <Service />,
    },
    {
        path: "/expertise",
        element: <Expertise />,
    },
    {
        path: "/blog",
        element: <Blog/>,
    },
    {
        path: "/company",
        element: <MainCompany/>,
    },
    {
        path: "/detail",
        element: <DetailsProgrames/>,
    },
    {
        path: "/servicesdetail",
        element: <Detail/>,
    },
    {
        path: "/project",
        element: <MainProjec />,
    },
]

