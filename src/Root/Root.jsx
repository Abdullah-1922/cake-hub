import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Root = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar></Navbar>
           <div className="flex-grow "><Outlet></Outlet> </div>
           <div className="flex-grow-0 "><Footer></Footer></div>
        </div>
    );
};

export default Root;