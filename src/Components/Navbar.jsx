import { NavLink } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
  const NavLinks = (
    <>
      <NavLink
        to={'/'}
        className='inline-block  rounded bg-amber-600 px-8 py-2 text-sm font-medium text-black transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500'>
        <button>Home</button>
      </NavLink>
      <NavLink
        to={'/card/all'}
        className='inline-block  mx-5  rounded bg-amber-600 px-8 py-2 text-sm font-medium text-black transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500'>
        <button>Show all</button>
      </NavLink>
      <NavLink className='inline-block rounded bg-amber-600 px-8 py-2 text-sm font-medium text-black transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500'>
        <button>Home</button>
      </NavLink>
    </>
  );

  return (
    <div className='h-[68px] bg-purple-200'>
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
          <a className='btn btn-ghost normal-case text-xl'>daisyUI</a>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1'>{NavLinks}</ul>
        </div>
        <div className='navbar-end'>
          <a className='btn'>Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
