import downloadPDF from "@/../../public/accoya/PDF icon.svg";
import specTable1080 from "@/../../public/accoya/STANDARD DIMENSIONS _ GRADES/1080 PX Accoya chart.svg";
import specTable1280 from "@/../../public/accoya/STANDARD DIMENSIONS _ GRADES/1280 PX Accoya chart.svg";
import specTable390 from "@/../../public/accoya/STANDARD DIMENSIONS _ GRADES/390PX Accoya chart.svg";
import specTable768 from "@/../../public/accoya/STANDARD DIMENSIONS _ GRADES/768 PX Accoya chart.svg";
import thermalGain from "@/../../public/accoya/Thermal Gain on Decks.jpg";
import { cn } from "@/lib/utils";
import Image from "next/image";

type TechnicalData = {
  name: string;
  href: string;
};

const technicalPdfs: TechnicalData[] = [
  {
    name: "Accoya® technical data",
    href: "/accoya/Download/Accoya_Data Sheet_Specification.pdf",
  },
  {
    name: "Accoya® warranty Brochure",
    href: "/accoya/Download/Accoya-wood-warranty-worldwide-excluding-US-and-Canada.pdf",
  },
  {
    name: "Accoya® Accreditations",
    href: "/accoya/Download/Accoya Performance Testing Summary.pdf",
  },
];

const technicalVideos: TechnicalData[] = [
  {
    name: "process video",
    href: "https://www.youtube.com/watch?v=4MQoqBulQ_I",
  },
  {
    name: "babilou",
    href: "https://www.youtube.com/shorts/JDjYown5W_s",
  },
  {
    name: "archifest 2023",
    href: "https://www.youtube.com/shorts/t2B726MlNzg",
  },
];

const gradeContents: { name: string; content: string }[] = [
  {
    name: "INSECT DECAY",
    content:
      "Accoya® wood is indigestible to a wide range of pests and an effective barrier to attack. For instance, when tested for termites according to AWPA E1 standards, appearance ratings consistently scored ≥ 9 (Light Attack), whereas the control sample averaged 3.5 (worse than Heavy Attack). Additionally, Accoya®️ wood exhibited an average weight loss of only 1.43%, compared to the control sample's average of 32.06%.",
  },
  {
    name: "MACHINABILITY",
    content:
      "Processing does not affect the unique properties of Accoya® wood, as it is modified throughout and not leachable. It is relatively easy to process and can be compared to profiling a soft wood species. No special tools are required for cross cutting, ripping, planing, routing and drilling. Sanding before finishing is rarely required.",
  },
  {
    name: "GLUING",
    content:
      "Both load bearing and non-load bearing applications have been tested using adhesive systems related to laminating, finger jointing and frame corner joints. While good results can be achieved with most common adhesives, PU, epoxy and PRF adhesives give the best results. The results of gluing with polyvinyl acetate (PVAc) and melamine urea formaldehyde (MUF) can vary greatly. Specific recommendations for your project are available upon request.",
  },
  {
    name: "FINISHING",
    content:
      "Most commonly used coating systems can be used on Accoya® wood. Testing has been performed with a full range of oilbased and water-based coating systems. Leading coating manufacturers have found that their products last three or more times longer when used on Accoya® wood. Specific recommendations for your project are available upon request.",
  },
];

type OtherContent =
  | {
      isShrinkage: false;
      name: string;
      content: string;
    }
  | {
      isShrinkage: true;
      name: string;
      content: {
        value: string[];
      }[];
    };

const otherContents: OtherContent[] = [
  {
    isShrinkage: false,
    name: "Material",
    content: "100% Solid Accoya® Wood",
  },
  {
    isShrinkage: false,
    name: "DURABILITY",
    content: `EN 113 Class 1 (the highest rating). It is an effective barrier against a broad spectrum of fungi including cellar, wet rot, dry rot, soft rot, white, brown and pore fungi.`,
  },
  {
    isShrinkage: false,
    name: "EQUILIBRIUM MOISTURE CONTENT",
    content: "3 – 5 % at 65% relative humidity, 20°C",
  },
  {
    isShrinkage: false,
    name: "DENSITY AND SPREAD",
    content: "65% RH, 20°C, Average 512 kg/m³, Range 432 to 592 kg/m³",
  },
  {
    isShrinkage: true,
    name: "SHRINKAGE",
    content: [
      {
        value: ["WET – 65% RH, 20°C", "WET – OVEN DRY"],
      },
      {
        value: ["Radial 0.4%", "Radial 0.7%"],
      },
      {
        value: ["Tangential 0.8%", "Tangential 1.5%"],
      },
    ],
  },
  {
    isShrinkage: false,
    name: "FIRE RATING",
    content:
      "Class C (ASTM E84) and D (EN14915). Accoya® wood can be firetreated to meet higher requirements.",
  },
  {
    isShrinkage: false,
    name: "THERMAL CONDUCTIVITY",
    content: "EN 12667, λ = 0.12 W/m∙K",
  },
  {
    isShrinkage: false,
    name: "BENDING STRENGTH",
    content: "EN 408, 40 N/mm²",
  },
  {
    isShrinkage: false,
    name: "BENDING STIFFNESS",
    content: "EN 408, 8800 N/mm²",
  },
  {
    isShrinkage: false,
    name: "JANKA HARDNESS",
    content: "ASTM D143, Side 4100 N, End grain 6600 N",
  },
];

const TechnicalData = () => {
  return (
    <section>
      <div className="container-cp mt-4 space-y-4">
        <h2 className="text-center uppercase text-xl">Thermal Gain on Decks</h2>

        <p>
          Decking and terrace under the sun is prone to thermal gain, and during
          the hot summer days, the deck temperature can reach over 65 °C.
        </p>

        <p>
          Using a thermogram image analysis, Accoya®, was tested long side with
          three variants of WPC decking.
        </p>

        <div className="space-y-2">
          <p>The ambient temperature of the test site was 32°C. </p>
          <p className="grid grid-cols-2">
            <span>Accoya®</span>
            <span>39 ~ 47°C</span>
          </p>
          <p className="grid grid-cols-2">
            <span>Thermally modified wood</span>
            <span>47 ~ 51°C</span>
          </p>
          <p className="grid grid-cols-2">
            <span>Wood Plastic Composite</span>
            <span>53 ~ 57°C</span>
          </p>
        </div>

        <p>
          The thermograms indicates Accoya®’s thermal gain is substantially less
          than the alternatives tested. This makes it truly “barefoot friendly”
          and resistance to cupping and splintering with prolonged weathering.
        </p>

        <div>
          <Image
            src={thermalGain}
            alt="Thermal Gain on Decks"
            className="w-full"
          />
        </div>
      </div>

      <div className="mt-4">
        <h2 className="text-center text-xl py-4 uppercase text-white bg-accoya font-medium">
          Download
        </h2>
        <div className="container-cp flex flex-col justify-center gap-y-4 mt-4">
          {technicalPdfs.map((pdf) => (
            <a
              key={pdf.name}
              href={pdf.href}
              target="_blank"
              className="flex items-center gap-x-4 pb-2 border-b border-black"
            >
              <span className="uppercase">{pdf.name}</span>
              <Image
                src={downloadPDF}
                alt="Accoya Technical Data"
                className="w-5 h-5"
              />
            </a>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <h2 className="text-center text-xl py-4 uppercase text-white bg-accoya font-medium">
          Installation
        </h2>

        <div className="container-cp flex flex-col justify-center gap-y-4 mt-4">
          {technicalVideos.map((video) => (
            <a
              key={video.name}
              href={video.href}
              target="_blank"
              className="flex items-center gap-x-4 pb-2 border-b border-black"
            >
              <span className="uppercase">{video.name}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <h2 className="text-center text-xl py-4 uppercase text-white bg-accoya font-medium">
          technical data
        </h2>

        <div className="container-cp">
          <h3 className="mt-4 font-semibold uppercase">Standard Lengths</h3>
          <div className="space-y-6 leading-relaxed">
            <p>
              2.4m, 3.0m, 3.6m, 4.2m, 4.8m Please contact us for stock
              availability and delivery time.
            </p>
            <p>
              - All dimensions are actual rough sawn.
              <br />- Accoya® wood is available in many other standard decking
              sizes and siding patterns from our partners.
            </p>
            <p>
              A1: 4 sides primarily clear
              <br />
              A2: 3 sides primarily clear
              <br /> FJ: Finger Jointed
            </p>
            <p>
              Other grades and dimensions can be made. Please contact us for
              more information.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="mt-4 text-center text-xl py-4 uppercase text-white bg-accoya font-medium">
          standard dimensions & Grades
        </h2>

        <div className="container-cp mt-4 py-2">
          <Image
            src={specTable390}
            alt="Accoya Technical Data"
            className="w-full sm:hidden"
          />
          <Image
            src={specTable768}
            alt="Accoya Technical Data"
            className="w-full hidden sm:block md:hidden"
          />
          <Image
            src={specTable1080}
            alt="Accoya Technical Data"
            className="w-full hidden md:block lg:hidden"
          />
          <Image
            src={specTable1280}
            alt="Accoya Technical Data"
            className="w-full hidden lg:block"
          />
        </div>

        <div className="space-y-4 container-cp mt-4">
          {gradeContents.map((grade) => (
            <div key={grade.name}>
              <h3 className="mb-1 font-medium text-md">{grade.name}</h3>
              <p className="leading-loose">{grade.content}</p>
            </div>
          ))}
        </div>

        <div className="container-cp lg:grid lg:grid-cols-2 lg:gap-4">
          {otherContents.map((otherContent, otherContentIdx) => (
            <div
              key={otherContent.name}
              className={cn(
                otherContentIdx === otherContents.length - 1 &&
                  "lg:col-span-full",
                otherContent.isShrinkage && "lg:col-span-full"
              )}
            >
              <h2 className="mt-4 mb-2 text-center text-xl py-2 uppercase text-white bg-accoya font-medium">
                {otherContent.name}
              </h2>
              {!otherContent.isShrinkage ? (
                <p>{otherContent.content}</p>
              ) : (
                otherContent.isShrinkage && (
                  <>
                    {otherContent.content.map((content, contentIdx) => (
                      <div
                        key={`ohtercontent-${contentIdx}`}
                        className="grid grid-cols-2 py-2 border-b border-black"
                      >
                        {content.value.map((value, valueIdx) => (
                          <span key={`othercontent-value-${valueIdx}`}>
                            {value}
                          </span>
                        ))}
                      </div>
                    ))}
                  </>
                )
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalData;
