import { createBrowserRouter } from "react-router-dom";
import Page1 from "../componenets/PageOne";
import Page2 from "../componenets/PageTwo";
import App from "../App";
import Home from "../componenets/Home";

const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {path:'',element:<Home/>},
            {path:'page1',element:<Page1/>},
            {path:'page2',element:<Page2/>}
        ]
    },
])

export default router