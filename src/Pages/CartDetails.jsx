import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const CartDetails = () => {
  const [Cart, setCart] = useState({});
  const { id } = useParams();
  
  const data = useLoaderData();
  console.log(Cart);
  useEffect(() => {
    setCart(data?.filter((card) => card.id == id));
    window.scrollTo(0, 0);
  }, [id, data]);
   const handleOrder=()=>{
    Swal.fire({
      title: "Good job!",
      text: "Your order placed successfully!",
      icon: "success"
    });
   }
  return (
    <div className='pt-5 bg-violet-300 min-h-screen'>
      <h4 className='text-center my-10 text-3xl font-bold uppercase'>Available cakes</h4>
      <div className=''>
        <div className='justify-center flex flex-col md:flex-row px-10 gap-10 '>
          {Cart[0] &&
            Cart[0].cakes.length > 0 ?
            Cart[0]?.cakes.map((cart) => (
              <div key={cart.id} className='card h-[500px] glass'>
                <figure>
                  <img
                    className='w-full h-[300px]'
                    src={cart.image}
                    alt={cart.name}
                  />
                </figure>
                <div className='card-body'>
                  <h2 className='card-title'>{cart.name}</h2>
                  <p>{cart.description}</p>
                  <p className='text-lg flex gap-2  font-semibold'>
                    {' '}
                    Price : {cart.price}$
                  </p>
                  <div className='card-actions justify-end'>
                    <button onClick={handleOrder} className='btn hover:text-white hover:bg-slate-700 bg-purple-400'>
                      Order
                    </button>
                  </div>
                </div>
              </div>
            )):
            <p className='text-4xl mt-20'>Contact us for your Custom Cake</p>
        
        }
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
