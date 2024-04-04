"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { cn } from "@/lib/utils";
import "swiper/css";
import "swiper/css/pagination";

type ImageSliderProps = {
  data: {
    name?: string;
    image: string;
  }[];
  className?: string;
};

const ImageSlider = (props: ImageSliderProps) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      loop={true}
      pagination={true}
      modules={[Pagination]}
      className="dasso-swiper"
    >
      {props.data.map((item, index) => (
        <SwiperSlide key={index} className="text-center mb-10">
          <div
            className={cn(
              "text-center w-full flex flex-col justify-start",
              props.className
            )}
          >
            <Image
              src={item.image}
              alt={item.name || "Image"}
              width={300}
              height={300}
              placeholder="blur"
              blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3C/svg%3E`}
              sizes="(max-width: 300px) 100vw, 300px"
              className="w-full h-full object-cover"
            />
          </div>
          {item.name && (
            <span className="text-sm text-center">{item.name}</span>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
