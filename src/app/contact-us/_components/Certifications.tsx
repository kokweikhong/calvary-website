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
    <div className="py-8">
      <div className="flex flex-wrap justify-center items-center gap-8">
        {certifications.map((certification, index) => (
          <div
            key={index}
            className="flex justify-center items-center h-[50px] w-auto"
          >
            <Image
              src={certification}
              alt="Certification"
              width={50}
              height={50}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
