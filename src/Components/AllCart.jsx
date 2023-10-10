/* eslint-disable react/prop-types */

const AllCart = ({allCard}) => {
    console.log(allCard);
    const { description, name, image,price } = allCard;
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
            {price}$
             </p>
          <div className='card-actions justify-end'>
          <button className='btn hover:text-white hover:bg-slate-700 bg-purple-400'>see Cakes</button>
          </div>
        </div>
      </div>
    );
};

export default AllCart;