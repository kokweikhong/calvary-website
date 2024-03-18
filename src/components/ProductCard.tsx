"use client";

import myImageLoader from "@/lib/imageLoader";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Product } from "@/interfaces/product";

type ProductCardProps = {
  data: Product;
};

const ProductCard: FC<ProductCardProps> = ({
  data
}) => {
  return (
    <Link
      href={data.href}
      className="h-full mb-[30px] group hover:pb-[10px] transition-all ease-in-out duration-300"
    >
      <div className="w-full h-[228px] relative overflow-hidden">
        <Image
          loader={myImageLoader}
          src={data.thumbnail}
          alt={data.title}
          sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 33vw"
          fill
          placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOcMnNKPQAFzAJCeSI5iwAAAABJRU5ErkJggg=="
          className="w-full h-full object-cover"
        />
      </div>
      <div className="bg-white shadow-[0_2px_48px_0_rgba(0,0,0,0.08)] w-11/12 m-auto relative z-[2] -mt-[30px] text-left px-[30px] py-[25px] group-hover:-mt-[40px] transition-all ease-in-out duration-300">
        <h3 className="uppercase text-base text-headingDark tracking-[0.7px] mb-[30px]">
          {data.title}
        </h3>
        <div className="w-auto h-[30px] relative mb-[10px]">
          <Image
            loader={myImageLoader}
            src={data.logo}
            alt={data.title}
            width={100}
            height={100}
            className="w-auto h-full object-fill"
          />
        </div>
        <p className="mb-0 text-textDark tracking-[0.88px] leading-[26px]">
          {data.description}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
