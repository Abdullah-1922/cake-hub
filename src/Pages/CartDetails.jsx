import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const CartDetails = () => {
  const [Cart, setCart] = useState({});
  const { id } = useParams();
 
  const data = useLoaderData();
  useEffect(()=>{
    
   setCart(data?.filter((card) => card.id == id));
 
  },[id,data])


return(
  <div className='pt-5'>
    {
        Cart && Cart.length >0 && Cart[0].cakes[0] ? <div className='card w-[50%] mx-auto bg-green-200 h-[500px] glass'>
        <figure>
          <img

          className="w-[100%]  h-[300px]"
            src={Cart[0].cakes[0].image}
            alt={Cart[0].cakes[0].name}
          />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>{Cart[0].cakes[0].name}</h2>
          <p>{Cart[0].cakes[0].description}</p>
          <p className='text-lg pt-3 font-bold'>Price:  {Cart[0].cakes[0].price}$</p>
         
          <div className='card-actions justify-end'>
        <button className='btn hover:text-white hover:bg-slate-700 bg-purple-400'>Order</button> 
          </div>
        </div>
      </div> :
      <p>fffff</p>
    }
  </div>
  )
};

export default CartDetails;
