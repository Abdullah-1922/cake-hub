
import { createBrowserRouter } from 'react-router-dom';
import Root from '../../Root/Root';
import Home from '../../Pages/Home/Home';
import CartDetails from '../../Pages/CartDetails';






const router=createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=> fetch('/data.json')
            },
            {
                path:'/cart/:id',
                element:<CartDetails></CartDetails>,
                loader:()=>fetch('/data.json')
            }
        ]

    }
])


    

export default router;