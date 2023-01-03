import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const HomeSlider = () => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            className="h-full cursor-pointer"
        >
            <SwiperSlide>
                <Image src={'/images/slideshow_3.webp'} className="rounded-md pointer" alt="" fill sizes='700px' priority/>
            </SwiperSlide>
            <SwiperSlide>
                <Image src={'/images/slideshow_8.webp'} className="rounded-md pointer" alt="" fill sizes='700px'/>
            </SwiperSlide>
            <SwiperSlide>
                <Image src={'/images/slideshow_10.webp'} className="rounded-md pointer" alt="" fill sizes='700px'/>
            </SwiperSlide>
            <SwiperSlide>
                <Image src={'/images/slideshow_13.webp'} className="rounded-md pointer" alt="" fill sizes='700px'/>
            </SwiperSlide>
      </Swiper>
    )
}

export default HomeSlider;