import { useLoaderData } from "react-router-dom";
import AllCart from "../Components/AllCart";

const AllCarts = () => {
    const data=useLoaderData()
    console.log(data);
    return (
        <div>
            <h2>Choose yours cake</h2>
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