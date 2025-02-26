import { createBrowserRouter } from "react-router-dom";
import HomePageLayout from "../Layouts/HomePageLayout";
import Banner from "../Components/Banner";
import Gadgets from "../Components/Gadgets";
import Statistics from "../Components/Statistics";
import Dashboard from "../Components/Dashboard";
import Offers from "../Components/Offers";
import GadgetDetails from "../Components/GadgetDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePageLayout></HomePageLayout>,
    children:[
      {
        path: "/",
        element: <Banner></Banner>,
        children:[
          {
            path:"/",
            element: <Gadgets></Gadgets>
          }
        ]
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>
      },
      {
        path: "/offers",
        element: <Offers></Offers>
      },
      {
        path: "/details/:id",
        element: <GadgetDetails></GadgetDetails>
      }
    
    ]
  },
]);


export default router;