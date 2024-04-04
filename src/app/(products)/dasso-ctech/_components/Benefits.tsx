"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { cn } from "@/lib/utils";
import type { DassoBenefit } from "@/constants/dasso-about-applications";
import "swiper/css";
import "swiper/css/pagination";

type BenefitsProps = {
  data: DassoBenefit[];
};

const Benefits = (props: BenefitsProps) => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={3}
      loop={true}
      pagination={true}
      modules={[Pagination]}
      breakpoints={
        {
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
        }
      }
      className="dasso-swiper container-cp"
    >
      {props.data.map((item, index) => (
        <SwiperSlide key={index} className="text-center mb-10">
          <div className="text-center w-24 h-24 mx-auto">
            <Image
              src={item.image}
              alt={item.name || "Image"}
              width={24}
              height={24}
              className="w-full h-full object-cover"
            />
          </div>
          <h4 className="font-medium text-gray-700 mt-4">{item.name}</h4>
          <p className="text-sm text-gray-600 mt-2">{item.description}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Benefits;
