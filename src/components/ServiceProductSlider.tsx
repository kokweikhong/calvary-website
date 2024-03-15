"use client";

import { FC } from "react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type ServiceProductSliderProps = {
  products: string[];
  backgroundColor?: string;
  textColor?: string;
};

const ServiceProductSlider: FC<ServiceProductSliderProps> = ({
  products,
  backgroundColor = "black",
  textColor = "white",
}) => {
  return (
    <div>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={products.length}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        loop={true}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        style={{ backgroundColor: backgroundColor }}
        className="!p-4"
      >
        {Array.from({ length: 10 }, () => products)
          .flat()
          .map((product, index) => (
            <SwiperSlide
              key={`product-${index}`}
              style={{ color: textColor }}
              className="!w-auto whitespace-nowrap"
            >
              <span>{product}</span>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default ServiceProductSlider;
