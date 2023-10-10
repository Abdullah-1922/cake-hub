import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const CartDetails = () => {
  const [Cart, setCart] = useState({});
  const { id } = useParams();

  const data = useLoaderData();
  useEffect(() => {
    setCart(data?.filter((card) => card.id == id));
  }, [id, data]);

  return (
    <div className='pt-5 bg-violet-300 h-[100vh]'>
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
                    <button className='btn hover:text-white hover:bg-slate-700 bg-purple-400'>
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
