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
    <div className="container-cp flex flex-col space-y-4 justify-center items-center">
      <div className="flex items-center justify-center py-2 border-y border-black">
        <h2 className="uppercase text-2xl font-montserrat tracking-wider">
          Timber Journey
        </h2>
      </div>
      <div>
        <p>{`
          From research and development, material profiling, and project site management to the frontline of sales, meet our skilled artisans who meet high architectural requirements and demands with expertise.
        `}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {journeys.map((journey, idx) => (
          <div
            key={idx}
            className="h-full pt-2 border-t border-black space-y-1 mb-4 flex flex-col"
          >
            <div className="">
              <h3 className="text-lg font-montserrat">{journey.title}</h3>
              <p className="text-sm">{journey.description}</p>
            </div>
            <div className="h-[300px] w-full self-end justify-self-end">
              <Image
                src={journey.imgUrl}
                alt={journey.title}
                width={400}
                height={300}
                priority
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimberJourney;
