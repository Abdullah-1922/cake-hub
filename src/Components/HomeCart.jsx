import { useLoaderData } from "react-router-dom";
import Cart from "./Cart";

const HomeCart = () => {
 
    const carts= useLoaderData()

    return (
        <div className="py-20 bg-purple-200  relative px-10">
            <h2 className="text-[25px] pb-10 font-black md:text-4xl text-center md:font-bold">Chooses Yours Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    carts?.map(cart=><Cart key={cart.id} cart={cart}></Cart>)
                }
            </div>
        </div>
    );
};

export default HomeCart;