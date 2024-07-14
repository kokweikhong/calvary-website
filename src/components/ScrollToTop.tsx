"use client";

import Image from "next/image";
import backToTop from "../../public/svgs/backtotop.svg";

const ScrollToTop = () => {
  return (
    <button
      className="border border-black bg-[#f5f5f5] flex items-center justify-center"
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      <Image
        src={backToTop}
        alt="Back to Top"
        width={56}
        height={56}
        priority
        className="w-14 h-14"
      />
    </button>
  );
};

export default ScrollToTop;
