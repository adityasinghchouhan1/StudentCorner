import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const data = [{ img: '/S1.jpg' }, { img: '/S2.webp' }, { img: '/S3.jpg' }]

const Slider = () => {
  return (
    <div className="w-full z-0 overflow-hidden h-[100vh]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-[100vh] w-full bg-cover bg-no-repeat bg-center flex justify-center items-center"
              style={{ backgroundImage: `url(${item.img})` }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Slider
