"use client";

import Image from "next/image";
import backToTop from "../../public/svgs/backtotop.svg";

const ScrollToTop = () => {
  return (
    <div className="fixed bottom-5 right-5 z-50">
      <button
        className="border border-black bg-[#f5f5f5]"
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
    </div>
  );
};

export default ScrollToTop;
