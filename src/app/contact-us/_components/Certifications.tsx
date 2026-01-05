import Image from "next/image";

const ASSETS_URL = process.env.NEXT_PUBLIC_WEBSITE_ASSETS_URL;

const certifications = [
  `${ASSETS_URL}/websites/contact-us/certifications/sgma.svg`,
  `${ASSETS_URL}/websites/contact-us/certifications/tuv.svg`,
  `${ASSETS_URL}/websites/contact-us/certifications/sgs.svg`,
  `${ASSETS_URL}/websites/contact-us/certifications/bca.svg`,
  `${ASSETS_URL}/websites/contact-us/certifications/sqasc.svg`,
  `${ASSETS_URL}/websites/contact-us/certifications/stats.svg`,
  `${ASSETS_URL}/websites/contact-us/certifications/leed.svg`,
  `${ASSETS_URL}/websites/contact-us/certifications/sgbc.svg`,
  `${ASSETS_URL}/websites/contact-us/certifications/nwfa.svg`,
  `${ASSETS_URL}/websites/contact-us/certifications/top-business.svg`,
];

const Certifications = () => {
  return (
    <div className="container-cp py-8 sm:py-12">
      <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-10">
        {certifications.map((certification, index) => (
          <div
            key={index}
            className="flex justify-center items-center h-10 sm:h-12 md:h-14 w-auto grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
          >
            <Image
              src={certification}
              alt="Certification"
              width={56}
              height={56}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
