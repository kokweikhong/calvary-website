"use client";

import { FC } from "react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { getAllClients } from "./svg/clients";

// const clients = [client1, client2, client3, client4, client5, client6, client7];

type ClientsSliderProps = {
  backgroundColor?: string;
  iconColor?: string;
};

const ClientsSlider: FC<ClientsSliderProps> = ({
  backgroundColor = "black",
  iconColor = "white",
}) => {
  const clients = getAllClients({
    height: "38",
    fill: iconColor,
  });
  return (
    <div>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={5}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        style={{ backgroundColor: backgroundColor }}
        className="!p-4"
      >
        {clients.map((client, index) => (
          <SwiperSlide key={`client-${index}`}>
            <div className="h-[38px] w-auto relative">
              {client}
              {/* <Image src={client} alt="client" fill className="w-full h-full" /> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ClientsSlider;
