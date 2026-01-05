import accdrediation1 from "@/../public/images/home/accdrediations/BCA.svg";
import accdrediation2 from "@/../public/images/home/accdrediations/Bizsafe.svg";
import accdrediation3 from "@/../public/images/home/accdrediations/LEED.svg";
import accdrediation4 from "@/../public/images/home/accdrediations/NWFA.svg";
import accdrediation5 from "@/../public/images/home/accdrediations/SGBC.svg";
import accdrediation6 from "@/../public/images/home/accdrediations/SGMA.svg";
import accdrediation7 from "@/../public/images/home/accdrediations/SQASC.svg";
import accdrediation8 from "@/../public/images/home/accdrediations/TOP BUSINESS.svg";
import Image from "next/image";

const accdrediations = [
  accdrediation1,
  accdrediation2,
  accdrediation3,
  accdrediation4,
  accdrediation5,
  accdrediation6,
  accdrediation7,
  accdrediation8,
];

const Accdrediations = () => {
  return (
    <section className="container mx-auto sm:px-6 lg:px-8 mt-[50px]">
      <div className="flex flex-wrap gap-4 mt-[30px]">
        {accdrediations.map((accdrediation, index) => (
          <div
            key={`accdrediation-${index}`}
            className="h-[38px] w-auto min-w-[70px] flex-1 relative"
          >
            <Image
              src={accdrediation}
              alt="accdrediation"
              fill
              // sizes="100vw"
              className="w-full h-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Accdrediations;
