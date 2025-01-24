"use client"
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';

// export default () => {
//   return (
//     <Swiper
//       spaceBetween={50}
//       slidesPerView={3}
//       onSlideChange={() => console.log('slide change')}
//       onSwiper={(swiper) => console.log(swiper)}
//     >

//       <SwiperSlide>
//         <img src="https://m.media-amazon.com/images/I/71C4nKuCgDL._SL1499_.jpg" alt="" />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src="https://m.media-amazon.com/images/I/71Woa0eX37L._SL1499_.jpg" alt="" />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src="https://m.media-amazon.com/images/I/61nEuBLaxcL._SL1500_.jpg" alt="" />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src="https://m.media-amazon.com/images/I/61VjFvXOOAL._SL1500_.jpg" alt="" />
//       </SwiperSlide>
//     </Swiper>
//   );
// };
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        slidesPerView={3}
        spaceBetween={10}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://m.media-amazon.com/images/I/71C4nKuCgDL._SL1499_.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://m.media-amazon.com/images/I/71Woa0eX37L._SL1499_.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://m.media-amazon.com/images/I/61nEuBLaxcL._SL1500_.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://m.media-amazon.com/images/I/61VjFvXOOAL._SL1500_.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
