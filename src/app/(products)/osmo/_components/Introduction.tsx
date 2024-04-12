import Image from "next/image";

const ASSETS_URL = process.env.NEXT_PUBLIC_WEBSITE_ASSETS_URL;
const osmoIngredientsURL = `${ASSETS_URL}/websites/osmo/osmo-ingredients.png`;
const osmoCerticationsURL = `${ASSETS_URL}/websites/osmo/osmo-certifications.png`;
const osmoColourMatchURL = `${ASSETS_URL}/websites/osmo/calvary-colour-matching-osmo.jpg`;
const osmoLogoURL = `${ASSETS_URL}/websites/osmo/osmo-logo-white.svg`;
const calvaryLogoHorizontalURL = `${ASSETS_URL}/websites/osmo/calvary-logo-horizontal.svg`;

const Introduction = () => {
  return (
    <div id="explore-osmo" className="mt-8">
      <div className="container-cp space-y-8">

        <div className="text-center">
          <h2 className="font-semibold text-2xl">{`OSMO® - Colour That Protects`}</h2>
        </div>

        <div>
          <Image
            src={osmoIngredientsURL}
            alt="Osmo ingredients"
            width={1920}
            height={1080}
            priority
            className="w-full h-full object-cover"
          />
        </div>

        <h3 className="font-medium text-xl capitalize text-center">
          {`All natural Wood surfaces Finishing`}
        </h3>

        <div className="text-center">
          <p>{`
          OSMO Oil is the one-stop-solution for wood finishing, catering to both interior and exterior applications. With a variety of finishes and colors to choose from, it's also eco-friendly, boasting low VOCs and sustainably sourced natural ingredients. By utilizing carefully harvested natural oils and hard waxes, Osmo proudly labels its products as vegan and natural.
        `}</p>
        </div>

        <div className="w-1/2 h-auto mx-auto">
          <Image
            src={osmoCerticationsURL}
            alt="Osmo certifications"
            width={1920}
            height={1080}
            priority
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="relative py-8 space-y-8">
        <div className="absolute w-full h-full -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <Image
            src={osmoColourMatchURL}
            alt="Osmo colour matching"
            width={1920}
            height={1080}
            priority
            className="w-full h-full object-cover"
          />
        </div>

        <div className="text-center text-white container-cp max-w-lg">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="h-auto flex space-x-8 items-end justify-around mb-4">
              <Image
                src={calvaryLogoHorizontalURL}
                alt="Calvary logo"
                width={200}
                height={50}
                priority
                className="h-full w-1/2"
              />

              <Image
                src={osmoLogoURL}
                alt="Osmo logo"
                width={200}
                height={50}
                priority
                className="w-1/2 h-full"
              />
            </div>

            <div className="text-center">
              <h2
                className="tracking-wider text-4xl font-bold drop-shadow-2xl font-montserrat"
              >
                Personalised Colour Blend</h2>
            </div>

            <div className="bg-white p-4 text-black">
              <p>{`
              Our timber coating product offers a versatile range of over 60 colors, with the flexibility to customize to your exact specifications. With such an extensive palette, we empower architects and interior designers to unleash their creativity and achieve any design vision without limitations.
            `}</p>
            </div>

            <a href="#contact-us-footer" className="bg-osmo text-white px-4 py-2 rounded-lg flex flex-col items-center justify-center space-y-2">
              <span className="uppercase font-semibold">create your blend with us</span>
              <span className="uppercase">contact us</span>
            </a>
          </div>


        </div>

      </div>

    </div>
  );
}

export default Introduction;
