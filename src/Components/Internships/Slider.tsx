import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./Internships.css";

type Slide = {
  date: string;
  title: string;
  Company: string;
  img: string;
  desc: string;
};

interface ImageSliderProps {
  slides: Slide[];
}

const ImageSlider: FC<ImageSliderProps> = ({ slides }) => {
  return (
    <Swiper
      slidesPerView={1}
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      className="mySwiper"
      modules={[Pagination, Autoplay]}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="img"
            style={{ backgroundImage: `url(${slide.img})` }}
          ></div>
          <div className="content text-start">
            <div className="text">{slide.date}</div>
            <div className="title">{slide.title}</div>
            <div className="text">{slide.Company}</div>
            <div className="desc">
              <ul>
                {slide.desc.split("&").map((desc, index) => (
                  <li>{desc}</li>
                ))}
              </ul>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
