import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
const Slider = () => {
  return (
    <>
      <div className="w-full z-0 overflow-hidden h-[100vh]">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          loop={true}
        >
          <SwiperSlide></SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

export default Slider
