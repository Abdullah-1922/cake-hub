import { useLoaderData, useParams } from "react-router-dom";

const CartDetails = () => {
    const id =useParams()
    console.log(id);
    const data=useLoaderData
    return (
        <div>
            
        </div>
    );
};

export default CartDetails;