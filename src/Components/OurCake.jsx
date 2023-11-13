/* eslint-disable react/no-unescaped-entities */
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import slide1 from '../assets/slide1.svg'
import slide2 from '../assets/slide2.svg'
import slide3 from '../assets/slide3.svg'
// Import Swiper styles
import './ourCake.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';
const OurCake = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'>
        <SwiperSlide>
          <div>
            <div className='card h-full lg:h-[400px] my-16 p-10 py-16 lg:card-side max-w-[800px] mx-auto bg-purple-200'>
              <figure>
                <img
                className='  object-cover object-center'
                  src={slide1}
                  alt='Album'
                />
              </figure>
              <div className='card-body'>
                <h2 className='card-title'>In time delivery </h2>
                <p>It don't matter how much you order, we will deliver on time perfectly.</p>
                <div className='card-actions justify-end'>
                  <Link to={'/card/all'}><button className='btn uppercase btn-primary'>View Cakes</button></Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className='card h-full lg:h-[400px]  my-16 p-10 py-16 lg:card-side max-w-[800px] mx-auto bg-purple-200'>
              <figure>
                <img
                className='  object-cover object-center'
                  src={slide2}
                  alt='Album'
                />
              </figure>
              <div className='card-body'>
                <h2 className='card-title'> Pre order cake for birthday party</h2>
                <p>We give the special discount on pre order.</p>
                <div className='card-actions justify-end'>
                  <Link to={'/card/all'}><button className='btn uppercase btn-primary'>View Cakes</button></Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      
        <SwiperSlide>
          <div>
            <div className='card my-16 h-full lg:h-[400px]  p-10 py-16 lg:card-side max-w-[800px] mx-auto bg-purple-200'>
              <figure>
                <img
                className='  object-cover object-center'
                  src={slide3}
                  alt='Album'
                />
              </figure>
              <div className='card-body'>
                <h2 className='card-title'>We arrange special cake for any special ceremony.</h2>
                <p>Make you day special with well food testy cake.</p>
                <div className='card-actions justify-end'>
                  <Link to={'/card/all'}><button className='btn uppercase btn-primary'>View Cakes</button></Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OurCake;
