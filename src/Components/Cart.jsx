import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Cart = ({ cart }) => {
  const {id, description, name, image } = cart;
  

 
  return (
    
      <div className='card h-[500px] glass'>
        <figure>
          <img
          className="w-full h-[300px]"
            src={image}
            alt={name}
          />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>{name}</h2>
          <p>{description}</p>
          <p className="text-lg flex gap-2  font-semibold"> Price :
            {
            cart?.cakes[0]? <p>{cart?.cakes[0]?.price} -  {cart?.cakes[1]?.price}</p>
            : <p>Contact us</p>    
            }      
             </p>
          <div className='card-actions justify-end'>
          <Link to={`/cart/${id}`}> <button className='btn hover:text-white hover:bg-slate-700 bg-purple-400'>see Cakes</button></Link> 
          </div>
        </div>
      </div>
    
  );
};

export default Cart;
