import Image from "next/image"

const ASSETS_URL = process.env.NEXT_PUBLIC_WEBSITE_ASSETS_URL
const osmoKeyFeaturesURL = `${ASSETS_URL}/websites/osmo/osmo-wood-key-features.png`

const FEATURE_BASE_URL = `${ASSETS_URL}/websites/osmo/feature-icons`
const features: { name: string; iconURL: string; }[] = [
  { name: "Free of Solvents", iconURL: `${FEATURE_BASE_URL}/free-of-solvents.svg` },
  { name: "Natural Materials", iconURL: `${FEATURE_BASE_URL}/natural-materials.svg` },
  { name: "Resistant to Liquids and Stains", iconURL: `${FEATURE_BASE_URL}/resistant-to-liquids-and-stains.svg` },
  { name: "Easy to Maintain", iconURL: `${FEATURE_BASE_URL}/easy-to-maintain.svg` },
  { name: "Microporous", iconURL: `${FEATURE_BASE_URL}/microporous.svg` },
]

// high-coverage-banner.jpg
// microporous-banner.jpeg
// natural-ingredients-banner.jpeg
//
const featureIntroductions: { name: string; description: string; imageURL: string; }[] = [
  {
    name: "Natural Ingredients",
    description:
      `The foundation of Osmo wood finishes has been based upon purified and refined natural resources which are carefully harvested natural oils and hard waxes.`,
    imageURL: `${ASSETS_URL}/websites/osmo/natural-ingredients-banner.jpeg`,
  },
  {
    name: "High Coverage",
    description:
      `With just one tin of Osmo you can achieve near to double the square meter coverage of an ordinary finishing system, saving you time and money.`,
    imageURL: `${ASSETS_URL}/websites/osmo/high-coverage-banner.jpg`,
  },
  {
    name: "Microporous",
    description:
      `The wood remains microporous and continues to absorb and release water without damage. The surface can breathe and becomes anti-static, which attracts less dust and dirt.`,
    imageURL: `${ASSETS_URL}/websites/osmo/microporous-banner.jpeg`,
  },
  {
    name: "Custom Colour",
    description:
      `Our timber coating product offers a versatile range of over 60 colours, with the flexibility to customise to your exact specifications. With such an extensive palette, we empower architects and interior designers to unleash their creativity and achieve any design vision without limitations.`,
    imageURL: `${ASSETS_URL}/websites/osmo/calvary-colour-matching-osmo.jpg`,
  },
]

const KeyFeatures = () => {
  return (
    <div>
      <div className="py-4 bg-osmo text-white">
        <h2 className="text-lg font-medium tracking-wider font-montserrat uppercase text-center">{`OSMO® WOOD KEY FEATURES`}</h2>
      </div>

      <div className="container-cp space-y-4">
        <div>
          <Image
            src={osmoKeyFeaturesURL}
            alt="Osmo key features"
            width={1920}
            height={1080}
            priority
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-4">
          <p>{`
            The correct handling, processing and long-term protection of wood as a natural construction material has always been Calvary Carpentry’s utmost priority. 
          `}</p>

          <p>{`
            Osmo’s unique finishing system provides a perfect optic, that is easy to maintain, has great chemical resistance and is extremely durable.
          `}</p>
        </div>

        <div className="space-y-2 md:grid md:grid-cols-2 md:space-y-0 md:gap-2">
          {features.map((feature) => (
            <div key={feature.name} className="flex items-center gap-4">
              <div className="h-[50px] w-[50px] relative">
                <Image
                  src={feature.iconURL}
                  alt={feature.name}
                  fill
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xs justify-self-start md:text-sm">{feature.name}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center space-y-1">
          <a
            href="#osmo-downloads"
            className="bg-osmo text-white font-medium uppercase px-4 py-2 rounded-lg"
          >
            check out the colours
          </a>
          <span className="text-xs uppercase text-osmo">Accoya Products</span>
        </div>

        <div className="md:grid md:grid-cols-2 md:gap-2">
          {featureIntroductions.map((feature) => (
            <div key={feature.name} className="flex flex-col md:grid md:grid-rows-[2fr_35px_1fr] lg:grid-rows-[2fr_35px_180px] items-start justify-center space-y-4">
              <div className="w-full h-full">
                <Image
                  src={feature.imageURL}
                  alt={feature.name}
                  width={1920}
                  height={1080}
                  priority
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <h2 className="text-2xl font-medium drop-shadow-2xl font-montserrat">
                  {feature.name}
                </h2>
              </div>
              <div className="bg-white p-4 text-black">
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>

  )
}

export default KeyFeatures

