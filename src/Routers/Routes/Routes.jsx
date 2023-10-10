
import { createBrowserRouter } from 'react-router-dom';
import Root from '../../Root/Root';
import Home from '../../Pages/Home/Home';
import CartDetails from '../../Pages/CartDetails';
import AllCarts from '../../Pages/AllCarts';






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
            },
            {
                path:'/card/all',
                element:<AllCarts></AllCarts>,
                loader:()=>fetch('/cake.json')
            }
        ]

    }
])


    

export default router;