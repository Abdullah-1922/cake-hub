
import { createBrowserRouter } from 'react-router-dom';
import Root from '../../Root/Root';
import Home from '../../Pages/Home/Home';
import CartDetails from '../../Pages/CartDetails';
import AllCarts from '../../Pages/AllCarts';
import Login from '../../Pages/Login';
import Register from '../../Pages/Register';
import PrivateRoute from '../PrivateRoute';






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
                element:<PrivateRoute><CartDetails></CartDetails></PrivateRoute>,
                loader:()=>fetch('/data.json')
            },
            {
                path:'/card/all',
                element:<PrivateRoute><AllCarts></AllCarts></PrivateRoute>,
                loader:()=>fetch('/cake.json')
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]

    }
])


    

export default router;