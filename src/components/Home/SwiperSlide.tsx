import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';

function SwiperSlideField() {
  return (
    <div className="w-full h-[200px] sm:h-[350px] xl:h-[450px] rounded-lg overflow-hidden z-10">
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
            priority
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/curva-2.jpg"
            alt="foto_banda_curva_d_hill_2"
            fill
            priority
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/curva-3.jpg"
            alt="foto_banda_curva_d_hill_3"
            fill
            priority
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/curva-4.jpg"
            alt="foto_banda_curva_d_hill_4"
            fill
            priority
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/curva-5.jpg"
            alt="foto_banda_curva_d_hill_5"
            fill
            priority

          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SwiperSlideField;
