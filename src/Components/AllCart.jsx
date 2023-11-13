/* eslint-disable react/prop-types */
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
import Swal from "sweetalert2";

const AllCart = ({allCard}) => {
    
    const { description, name, image,price } = allCard;
    
    const handleOrder=()=>{
      Swal.fire({
        title: "Good job!",
        text: "Your order placed successfully",
        icon: "success"
      });
    }
    return (
        
        <div   data-aos="flip-left" className='card h-[500px]  glass'>
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
            {price}$
             </p>
          <div className='card-actions justify-end'>
          <button onClick={handleOrder} className='btn hover:text-white hover:bg-slate-700 bg-purple-400'>Order Cake</button>
          </div>
        </div>
      </div>
    );
};

export default AllCart;