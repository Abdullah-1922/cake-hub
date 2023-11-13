import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SnackbarProvider, enqueueSnackbar } from 'notistack';
import { BiShow } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../ContextApi/Authprovider';

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const { signIn ,googleLogin} = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    const password = e.target.password.value;
    const terms = e.target.terms.checked;

    if (
      !/^(?=.*[A-Z])(?=.*[*&@%$#])(?=.*\d.*\d)[A-Za-z*&@%$#\d]{8,}$/.test(
        password,
      )
    ) {
      enqueueSnackbar(
        'Invalid password. Requirements: 1 Capital, 1 Special (*&%$#), 2 Numbers, Min 8 characters!',
        { variant: 'error' },
      );
    }
    console.log(terms);
    if (!terms) {
      console.log('accept terms');
      toast.warn('Accept terms and condition', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      return;
    }
    signIn(email, password)
      .then((res) => {
        console.log(res);

        toast.success(' Login Successfully', {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      })
      .catch((err) => {
        console.log(err);

        toast.error(`${err.message}`, {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      });
  };
  const handleGoogleLogin=()=>{
    googleLogin()
  }
  return (
    <div className='bg-red-100  py-20'>
      <div className=' flex  pt-16 justify-center min-w-[320px] max-w-[600px] mx-auto p-10 rounded-3xl bg-gradient-to-br from-fuchsia-300 via-violet-300 to-purple-200'>
        <div className='relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none'>
          <h4 className='block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased'>
            Login
          </h4>
          <p className='mt-1 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased'>
            Enter your email and password to Login.
          </p>
          <ToastContainer />
          <SnackbarProvider />
          <form
            onSubmit={handleSubmit}
            className='mt-8 mb-2 w-80 max-w-screen-lg sm:w-96'>
            <div className='mb-4 flex flex-col gap-6'>
              <div className='relative h-11 w-full min-w-[200px]'>
                <input
                  required
                  name='email'
                  className='peer border-black  h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50'
                />

                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Email
                </label>
              </div>

              <div className='relative h-11 w-full min-w-[200px]'>
                <input
                  required
                  name='password'
                  type={showPass ? 'text' : 'password'}
                  className='peer h-full border-black  w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50'
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Password
                </label>
                <div
                  onClick={() => setShowPass(!showPass)}
                  className='absolute bottom-2 right-3'>
                  <BiShow className='text-3xl'></BiShow>{' '}
                </div>
              </div>
            </div>

            <div className='inline-flex items-center'>
              <label
                className='relative -ml-2.5 flex cursor-pointer items-center rounded-full p-3'
                htmlFor='checkbox'
                data-ripple-dark='true'>
                <input
                  name='terms'
                  type='checkbox'
                  className="before:content[''] border-black peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:bg-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
                  id='checkbox'
                />
                <span className='pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4  opacity-0 transition-opacity peer-checked:opacity-100'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-3.5 w-3.5 '
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    stroke='currentColor'>
                    <path d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'></path>
                  </svg>
                </span>
              </label>
              <label
                className='mt-px cursor-pointer select-none font-light text-gray-700'
                htmlFor='checkbox'>
                <p className='flex items-center font-sans text-sm font-normal leading-normal text-gray-700 antialiased'>
                  I agree the
                  <a
                    className='font-medium transition-colors hover:text-pink-500'
                    href='#'>
                    &nbsp;Terms and Conditions
                  </a>
                </p>
              </label>
            </div>

            <button
              className='mt-6 block w-full select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
              type='submit'
              data-ripple-light='true'>
              Login
            </button>
            <div className='w-fit mx-auto my-5 '>
              <button
              onClick={handleGoogleLogin}
                type='button'
                className='text-white bg-gradient-to-br from-fuchsia-400 via-violet-500 to-purple-500  focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2'>
                <svg
                  className='w-4 h-4    me-2'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 18 19'>
                  <path
                    d='M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z'
                    
                  />
                </svg>
                Sign in with Google
              </button>
            </div>
            <p className='mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased'>
              Do not have an account?
              <Link
                to={'/register'}
                className='font-medium text-pink-500 transition-colors hover:text-blue-700'>
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
