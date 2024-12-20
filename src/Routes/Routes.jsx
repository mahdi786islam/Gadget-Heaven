import { createBrowserRouter } from "react-router-dom";
import HomePageLayout from "../Layouts/HomePageLayout";
import Banner from "../Components/Banner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePageLayout></HomePageLayout>,
    children:[
      {
        path: "/",
        element: <Banner></Banner>
      }
    ]
  },
]);


export default router;