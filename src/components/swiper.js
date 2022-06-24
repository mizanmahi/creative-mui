import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper';
import './swiper.css';

function SwiperSlider() {
   return (
      <>
         <Swiper
            slidesPerView={4}
            // spaceBetween={40}
            centeredSlides={true}
            pagination={{
               clickable: true,
            }}
            breakpoints={{
               1024: {
                  slidesPerView: 4,
                  spaceBetween: 40,
               },
               960: {
                  slidesPerView: 3,
                  spaceBetween: 30,
               },
               640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
               },
               0: {
                  slidesPerView: 1,
                  spaceBetween: 20,
               },
            }}
            modules={[Pagination]}
            className='my_swiper'
         >
            <SwiperSlide>
               <img
                  src='https://i.ibb.co/8Pg1KDJ/Rectangle-16.png'
                  alt=''
                  style={{ width: '100%' }}
               />
            </SwiperSlide>
            <SwiperSlide>
               <img
                  src='https://i.ibb.co/Bq6tmFL/Mask-Group.png'
                  alt=''
                  style={{ width: '100%' }}
               />
            </SwiperSlide>
            <SwiperSlide>
               <img
                  src='https://i.ibb.co/8Pg1KDJ/Rectangle-16.png'
                  alt=''
                  style={{ width: '100%' }}
               />
            </SwiperSlide>
            <SwiperSlide>
               <img
                  src='https://i.ibb.co/Bq6tmFL/Mask-Group.png'
                  alt=''
                  style={{ width: '100%' }}
               />
            </SwiperSlide>
         </Swiper>
      </>
   );
}

export default SwiperSlider;
