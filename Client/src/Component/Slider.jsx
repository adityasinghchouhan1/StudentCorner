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
            >
              <div className="absolute bottom-5 sm:left-20 left-2 flex flex-col justify-start items-start gap-4 text-white bg-gradient-to-r from-cyan-500 ps-2 pb-1 border-l-4 border-Myorange">
                <h1 className="sm:text-6xl text-2xl font-bold font-Playfair">
                  Heading
                </h1>
                <p className="text-sm sm:text-base font-CormorantGaramond">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
                  libero ipsa ratione ea, aliquid voluptatem?
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Slider
