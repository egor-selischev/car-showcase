import React from 'react'
import styles from "../styles/Slider.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/scrollbar';
SwiperCore.use([Scrollbar]);

const Slider = ({images}) => {

  return (
    <div className={styles.slider}>
      <Swiper
        modules={[Scrollbar]}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        scrollbar={{
          draggable: true,
          hide: false
        }}
        grabCursor={true}
      >
        {images.map(img =>
          <SwiperSlide key={img.url.toString()} >
            <div className={styles.container__slider}>
              <img src={img.urlThumb} alt="preview"/>
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </div>

  )
}

export default Slider
