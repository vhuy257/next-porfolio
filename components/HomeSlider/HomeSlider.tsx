import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

const HomeSlider = () => {
    return (
        <Swiper
            modules={[Navigation]}
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }}
            spaceBetween={50}
            slidesPerView={1}
            className="h-full cursor-pointer"
        >
            <SwiperSlide>
                <Image src={'/images/slideshow_3.webp'} className="rounded-md pointer" alt="" fill sizes='700px'/>
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
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
      </Swiper>
    )
}

export default HomeSlider;