"use client";

import Image from "next/image";

import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import feature4 from "@/../public/images/home/feature_Reconstituted Bamboo Timber vs. Hardwood vs.Composite.png";
import feature2 from "@/../public/images/home/feature_The right wood for humidy in singapore .jpeg";
import feature1 from "@/../public/images/home/feature_archidex_2023.jpg";
import feature3 from "@/../public/images/home/feature_archifest_2023.png";

type Feature = {
  title: string;
  description: string;
  period: string;
  image: any;
};

const features: Feature[] = [
  {
    title: "Archidex 2023",
    description: "2 min read. Awardee of Booth Display Star Award",
    period: "26 July - 29 July 2023",
    image: feature1,
  },
  {
    title: "The right wood for humidy in Singapore",
    description: "2 min read. Featuring Accoya and Teak.",
    period: "7 October 2023",
    image: feature2,
  },
  {
    title: "Archifest 2023",
    description: "2 min read. Featuring Accoya and Calvary Composite.",
    period: "1 November 2023",
    image: feature3,
  },
  {
    title:
      "Reconstituted Bamboo Timber vs. Hardwood vs. Composite: A Comprehensive Guide",
    description: "2 min read. Featuring Bamboo, Composite and Teak.",
    period: "7 October 2023",
    image: feature4,
  },
];

const Features = () => {
  return (
    <div>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={2}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 0,
            loop: false,
          },
        }}
        loop={true}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {features.map((feature, index) => (
          <SwiperSlide key={`feature-${index}`} className="relative">
            <div className="h-[200px] md:h-[250px] w-auto relative">
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="w-full h-full"
              />
            </div>
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="bg-black bg-opacity-50 text-white p-4 h-full relative">
                <h5 className="text-[16px] font-bold mb-1">{feature.title}</h5>
                <p className="text-[14px]">{feature.period}</p>
                <div className="flex justify-between items-center text-white absolute bottom-0 pb-6 pr-4">
                  <p className="text-[12px] mr-4">{feature.description}</p>
                  <span className="w-0 h-0 border-t-[20px] border-t-transparent border-l-[35px] border-l-white border-b-[20px] border-b-transparent"></span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Features;
