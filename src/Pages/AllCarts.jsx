import { useLoaderData } from "react-router-dom";
import AllCart from "../Components/AllCart";
import { useEffect } from "react";

const AllCarts = () => {
    const data=useLoaderData()
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return (
        <div className="bg-purple-100 pb-20 px-10">
            <h2 className="text-4xl p-5 py-10 text-center font-bold">Choose yours cake</h2>
            <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    data.map(allCard=><AllCart key={
                        allCard.id}
                        allCard={allCard}
                    ></AllCart>)
                }
            </div>
        </div>
    );
};

export default AllCarts;