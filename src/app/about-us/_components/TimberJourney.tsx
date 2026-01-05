import Image from "next/image";

const ASSETS_URL = process.env.NEXT_PUBLIC_WEBSITE_ASSETS_URL;
const journeys: { title: string; description: string; imgUrl: string }[] = [
  {
    title: "Production & Material: Uncle Ho",
    description: "Production",
    imgUrl: `${ASSETS_URL}/websites/about-us/production-material-uncle-ho.jpg`,
  },
  {
    title: "Managing Projects & Sites: Raziq",
    description: "Project Manager",
    imgUrl: `${ASSETS_URL}/websites/about-us/managing-projects-sites-raziq.jpg`,
  },
  {
    title: "Sales & Market: Irene",
    description: "Sales Manager",
    imgUrl: `${ASSETS_URL}/websites/about-us/sales-market-irene.jpg`,
  },
  {
    title: "Research & Development: Sheng Chuan",
    description: "Project QAQC",
    imgUrl: `${ASSETS_URL}/websites/about-us/research-development-sheng-chuan.jpg`,
  },
];

const TimberJourney = () => {
  return (
    <div className="container-cp flex flex-col space-y-6 sm:space-y-8 justify-center items-center py-8 sm:py-12">
      <div className="flex items-center justify-center py-3 sm:py-4 border-y-2 border-black px-4">
        <h2 className="uppercase text-xl sm:text-2xl md:text-3xl font-montserrat tracking-wider font-semibold">
          Timber Journey
        </h2>
      </div>
      <div className="max-w-3xl">
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-center">{`
          From research and development, material profiling, and project site management to the frontline of sales, meet our skilled artisans who meet high architectural requirements and demands with expertise.
        `}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full">
        {journeys.map((journey, idx) => (
          <div
            key={idx}
            className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
          >
            <div className="p-4 sm:p-6 space-y-2 border-b-2 border-gray-100">
              <h3 className="text-base sm:text-lg md:text-xl font-montserrat font-semibold text-gray-800">
                {journey.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 font-medium uppercase tracking-wide">
                {journey.description}
              </p>
            </div>
            <div className="aspect-video w-full overflow-hidden">
              <Image
                src={journey.imgUrl}
                alt={journey.title}
                width={600}
                height={400}
                priority
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimberJourney;
