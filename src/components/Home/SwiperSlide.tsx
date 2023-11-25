import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';

function SwiperSlideField() {
  return (
    <div className="w-full h-[200px] sm:h-[350px] xl:h-[450px] rounded-lg shadow-md shadow-purple-300 overflow-hidden">
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="swiper"
      >
        <SwiperSlide>
          <Image
            src="/assets/curva-1.jpg"
            alt="foto_banda_curva_d_hill_1"
            fill
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/curva-2.jpg"
            alt="foto_banda_curva_d_hill_2"
            fill
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/curva-3.jpg"
            alt="foto_banda_curva_d_hill_3"
            fill
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/curva-4.jpg"
            alt="foto_banda_curva_d_hill_4"
            fill
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/curva-5.jpg"
            alt="foto_banda_curva_d_hill_5"
            fill
          />
        </SwiperSlide>

      </Swiper>
    </div>
  );
}

export default SwiperSlideField;
