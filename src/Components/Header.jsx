
const Header = () => {
    return (
        <div className="hero h-calc-vh " style={{backgroundImage: 'url(https://i.ibb.co/6RrhXhZ/bannernew.jpg)'}}>
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-[80vh]">
            <h1 className="mb-5  text-5xl text-purple-300 md:text-7xl font-black">Delicious Cakes for Every Occasion</h1>
            <p className="mb-5   text-purple-300   font-bold">Indulge in our exquisite cakes crafted with love and creativity. Whether it`s a birthday, anniversary, wedding, or any special event, we have the perfect cake for you.</p>
            <button className="btn btn-primary">Explore Cakes</button>
          </div>
        </div>
      </div>
    );
};

export default Header;