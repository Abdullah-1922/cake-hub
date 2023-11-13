import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import { useContext } from 'react';
import  { AuthContext } from '../ContextApi/Authprovider';
import auth from '../Firebase/Firebase.config.';
const Navbar = () => {
  const {user,logOut} =useContext(AuthContext)
  console.log(user);
  const handleLogout=()=>{
    logOut(auth)
  }
  const NavLinks = (
    <>
      <NavLink
        to={'/'}
        className='inline-block   lg:ml-5 rounded bg-amber-600 px-8 py-2 text-sm font-medium text-black transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500'>
        <button>Home</button>
      </NavLink>
      <NavLink
        to={'/card/all'}
        className='inline-block  my-2 lg:my-0 lg:ml-5  rounded bg-amber-600 px-8 py-2 text-sm font-medium text-black transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500'>
        <button>Show all</button>
      </NavLink>
      <NavLink to={'/login'} className='inline-block  lg:ml-5 rounded bg-amber-600 px-8 py-2 text-sm font-medium text-black transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500'>
        <button>Login</button>
      </NavLink>
    </>
  );

  return (
    <div className='h-[88px] md:h-[68px] bg-purple-200'>
      <div className='navbar'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'>
              {NavLinks}
            </ul>
          </div>
          <img className='w-[60px] h-[50px]' src="https://i.ibb.co/2WkzD8X/well-png-2.png" alt="" />
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1'>{NavLinks}</ul>
        </div>
        <div className='navbar-end'>
          {
            user ? 
            <div className='flex flex-col md:flex-row items-center gap-1'>
              <div className='flex items-center gap-2'>
              <p className='bg-red-300 p-1 rounded-xl  px-2'> {
                user.displayName
              }</p>
              <img className='w-[40px] h-[40px] rounded-full' src={user.photoURL} alt="UserProfile" />
              </div>
              <div onClick={handleLogout} className=''> <button className='btn btn-sm md:btn-md bg-red-500  text-white'>LogOut</button></div>
             
            </div>
            :
            <div>
              <Link to={'/login'}><button  className='btn bg-purple-700'>Login</button></Link>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
