import Image from "next/image";

import Link from "next/link";
import { services } from "@/constants/services";

const Services = () => {
  return (
    <section id="home-services" className="container mx-auto sm:px-6 lg:px-8">
      <div className="relative z-3 my-[50px]">
        <div className="grid grid-cols-12 auto-rows-fr gap-6 justify-center mx-auto">
          {services.map((service) => (
            <div
              key={service.title}
              className="col-span-full md:col-span-6 lg:col-span-4 mx-auto"
            >
              <Link href={service.href}>
                <div className="bg-[#fff] shadow-lg h-full py-[55px] px-[40px] text-center mb-[30px] hover:-mt-[10px] transition-all duration-300 flex flex-col justify-between">
                  <div className="w-[60px] h-[60px] block mb-[30px] mx-auto">
                    <Image
                      src={service.icon}
                      alt="interior"
                      className="w-full h-full"
                    />
                  </div>
                  <h5 className="text-headingDark text-[16px] font-normal tracking-[0.7px] mb-[15px]">
                    {service.title}
                  </h5>
                  <p className="text-textDark trackng-[0.88px] leading-[26px] mb-[20px]">
                    {service.description}
                  </p>
                  <div className="dark-btn m-auto group">
                    <span className="group-hover:left-0">READ MORE</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
