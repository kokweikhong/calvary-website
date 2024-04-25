import Image from "next/image";

const ASSETS_URL = process.env.NEXT_PUBLIC_WEBSITE_ASSETS_URL;

const teak1Img = `${ASSETS_URL}/websites/wood-and-timber/teak1.jpeg`;
const teak2Img = `${ASSETS_URL}/websites/wood-and-timber/teak2.jpg`;
const merbau1Img = `${ASSETS_URL}/websites/wood-and-timber/merbau1.jpg`;
const merbau2Img = `${ASSETS_URL}/websites/wood-and-timber/merbau2.jpg`;
const chengal1Img = `${ASSETS_URL}/websites/wood-and-timber/chengal1.jpg`;
const novawood1Img = `${ASSETS_URL}/websites/wood-and-timber/novawood1.jpeg`;

const novaWoodBenefits: { name: string; img: string }[] = [
  {
    name: "Dimensional stability",
    img: `${ASSETS_URL}/websites/wood-and-timber/novawood-benefits/dimensional-stability.svg`,
  },
  {
    name: "Weatherproof",
    img: `${ASSETS_URL}/websites/wood-and-timber/novawood-benefits/weatherproof.svg`,
  },
  {
    name: "Easy maintenance",
    img: `${ASSETS_URL}/websites/wood-and-timber/novawood-benefits/easy-maintenance.svg`,
  },
  {
    name: "Non toxic",
    img: `${ASSETS_URL}/websites/wood-and-timber/novawood-benefits/non-toxic.svg`,
  },
  {
    name: "Sustainability",
    img: `${ASSETS_URL}/websites/wood-and-timber/novawood-benefits/sustainability.svg`,
  },
];

const novaWoodCertifications: string[] = [
  `${ASSETS_URL}/websites/wood-and-timber/novawood-certifications/web-novawood-1.jpg`,
  `${ASSETS_URL}/websites/wood-and-timber/novawood-certifications/web-novawood-2.jpg`,
  `${ASSETS_URL}/websites/wood-and-timber/novawood-certifications/web-novawood-3.jpg`,
  `${ASSETS_URL}/websites/wood-and-timber/novawood-certifications/web-novawood-4.jpg`,
  `${ASSETS_URL}/websites/wood-and-timber/novawood-certifications/web-novawood-5.jpg`,
  `${ASSETS_URL}/websites/wood-and-timber/novawood-certifications/web-novawood-6.jpg`,
  `${ASSETS_URL}/websites/wood-and-timber/novawood-certifications/web-novawood-7.jpg`,
  `${ASSETS_URL}/websites/wood-and-timber/novawood-certifications/web-novawood-8.jpg`,
  `${ASSETS_URL}/websites/wood-and-timber/novawood-certifications/web-novawood-9.jpg`,
  `${ASSETS_URL}/websites/wood-and-timber/novawood-certifications/web-novawood-10.jpg`,
];

const Discover = () => {
  return (
    <div className="container-cp space-y-8 py-4">
      <div className="space-y-4">
        <h2 className="text-center text-2xl font-medium mb-2">Teak</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div>
            <Image
              src={teak1Img}
              alt="Teak 1"
              width={600}
              height={600}
              priority
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <Image
              src={teak2Img}
              alt="Teak 2"
              width={600}
              height={600}
              priority
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="space-y-2">
          <p>{`
            Teak is a top tier wood material in the market, especially in the Southeast Asia region. There is a high demand for it because of its exquisite natural patterns and natural oils. The natural oils act as a defense mechanism to harmful insect infestation as well as emollient for the timber. 
          `}</p>
          <p>{`
            It also acts as a barrier for water. It deters water from seeping in that might cause damage in the long run. This makes teak one of the best timber decking material for both outdoor and indoor usage. Even though it’s Janka hardness is in the middle range, it has high dimensional stability. It is a popular timber material for making decking in yachts. If left unvarnished under the sun it will start to discolour over a period of time. The colour will turn to a greyish tone which some might find a liking to.
          `}</p>
        </div>
        <div className="flex flex-col items-center justify-center text-center space-y-1">
          <a
            href="#"
            className="bg-[#A9862B] text-white py-2 px-4 rounded-md uppercase hover:bg-white hover:text-[#A9862B] transition-all"
          >
            Discover more about teak
          </a>
          <a
            href="https://www.linkedin.com/pulse/finding-right-wood-singapores-humid-weather-calvary-carpentry/?trackingId=Gzz1q35G4CQtbEAJWlsUrA%3D%3D"
            className="underline"
          >
            {`Read more about why Teak is the right wood for Singapore's humid weather`}
          </a>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-center text-2xl font-medium mb-2">Merbau</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div>
            <Image
              src={merbau1Img}
              alt="Merbau 1"
              width={600}
              height={600}
              priority
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <Image
              src={merbau2Img}
              alt="Merbau 2"
              width={600}
              height={600}
              priority
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="space-y-2">
          <p>{`
            Over the past years, modifications of wood have seen a substantial improvement,currently in the market one of the latest type of wood modification would be thermally treated wood. The increasing demand for high quality and long lasting organic wood has brought about this change.
          `}</p>
          <p>{`
            Wood modification can be done without adding any chemicals thanks to advancement in research and development in America and also Europe. Through the diverse species of wood, there’s a variability in terms of density, strength and colour.
          `}</p>
          <p>{`
            The main concern for wood would be its biodegradability and instability under changing moisture levels in the environment. Most industrial grown wood species tend to deteriorate rapidly under biological and physical influences.
          `}</p>
        </div>
        <div className="flex flex-col items-center justify-center text-center space-y-1">
          <a
            href="#"
            className="bg-[#A9862B] text-white py-2 px-4 rounded-md uppercase hover:bg-white hover:text-[#A9862B] transition-all"
          >
            Discover more about merbau
          </a>
          <a
            href="https://www.linkedin.com/pulse/reconstituted-bamboo-timber-vs-hardwood-composite-comprehensive/?trackingId=zb1%2BBTS3WFKUFBmEwfEanQ%3D%3D"
            className="underline"
          >
            {`Read more here for about Hadrwood VS other timebrs.`}
          </a>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-center text-2xl font-medium mb-2">Chengal</h2>
        <div className="grid grid-cols-1">
          <div className="w-full h-auto">
            <Image
              src={chengal1Img}
              alt="Chengal 1"
              width={600}
              height={600}
              priority
              className="object-cover w-full h-full"
            />
          </div>
          <span className="text-center text-sm text-gray-500 uppercase">
            Chengal decking in Tanjong Beach Club
          </span>
        </div>
        <div className="space-y-2">
          <p>{`
            Chengal Wood has been very popular in the southeast Asia region because it is one of the hardiest and durable timber decking material in the market. It has a very high Janka hardness rating amongst Merbau and Teak. Nonetheless, we do not condone the use of it as the first choice as a timber decking material.
          `}</p>
          <p>{`
            Chengal supply in Singapore mostly comes from Malaysia, and the supply of mature trees are scarce due to high demand. Due to the value of the timber and the tree getting rare, Chengal receives special attention from the Forestry Department.
          `}</p>
          <p>{`
            There is a minimum and maximum cutting limit to chop down this tree. The tree is rightly classified as Vulnerable on the IUCN Red List. This leads to logging of plantation Chengal to meet demands.
          `}</p>
        </div>

        <div className="flex flex-col items-center justify-center text-center space-y-1">
          <a
            href="#"
            className="bg-[#A9862B] text-white py-2 px-4 rounded-md uppercase hover:bg-white hover:text-[#A9862B] transition-all"
          >
            Discover more about chengal
          </a>
          <a
            href="https://www.linkedin.com/pulse/reconstituted-bamboo-timber-vs-hardwood-composite-comprehensive/?trackingId=zb1%2BBTS3WFKUFBmEwfEanQ%3D%3D"
            className="underline"
          >
            {`Read more here for about Hadrwood VS other timebrs.`}
          </a>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-center text-2xl font-medium mb-2">Novawood</h2>
        <div className="grid grid-cols-1">
          <div className="w-full h-auto">
            <Image
              src={novawood1Img}
              alt="Novawood 1"
              width={600}
              height={600}
              priority
              className="object-cover w-full h-full"
            />
          </div>
          <span className="text-center text-sm text-gray-500 uppercase">
            Novawood decking in gardens by the bay 2023
          </span>
        </div>
        <div className="flex flex-wrap gap-4 justify-center items-center py-4">
          {novaWoodBenefits.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-8 h-8">
                <Image
                  src={item.img}
                  alt={item.name}
                  width={32}
                  height={32}
                  priority
                  className="object-cover w-full h-full"
                />
              </div>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
        <div className="space-y-2">
          <p>{`
            Chengal Wood has been very popular in the southeast Asia region because it is one of the hardiest and durable timber decking material in the market. It has a very high Janka hardness rating amongst Merbau and Teak. Nonetheless, we do not condone the use of it as the first choice as a timber decking material.
          `}</p>
          <p>{`
            Chengal supply in Singapore mostly comes from Malaysia, and the supply of mature trees are scarce due to high demand. Due to the value of the timber and the tree getting rare, Chengal receives special attention from the Forestry Department.
          `}</p>
          <p>{`
            There is a minimum and maximum cutting limit to chop down this tree. The tree is rightly classified as Vulnerable on the IUCN Red List. This leads to logging of plantation Chengal to meet demands.
          `}</p>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 py-2">
          <h3 className="uppercase w-full">Certificate</h3>
          {novaWoodCertifications.map((item, index) => (
            <div key={index}>
              <Image
                src={item}
                alt={`Novawood certification ${index + 1}`}
                width={52}
                height={52}
                priority
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center text-center space-y-1">
          <a
            href="#"
            className="bg-[#A9862B] text-white py-2 px-4 rounded-md uppercase hover:bg-white hover:text-[#A9862B] transition-all"
          >
            Discover more about novawood
          </a>
        </div>
      </div>
    </div>
  );
};

export default Discover;
