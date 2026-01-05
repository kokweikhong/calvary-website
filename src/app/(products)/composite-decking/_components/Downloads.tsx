import Image from "next/image";

const ASSETS_URL = process.env.NEXT_PUBLIC_WEBSITE_ASSETS_URL;
const compositeBrochureLink = `${ASSETS_URL}/websites/composite-decking/downloads/calvary_composite_brochure_20250721.pdf`;
const compositeResdentialLink = `${ASSETS_URL}/websites/composite-decking/downloads/calvary-composite-residential.pdf`;
const compositeProjectLink = `${ASSETS_URL}/websites/composite-decking/downloads/calvary-composite-project-reference.pdf`;
const downloadIconURL = `${ASSETS_URL}/websites/composite-decking/download-icon.svg`;

// calvary-composite-brochure.pdf
// calvary-composite-project-reference.pdf
// calvary-composite-residential.pdf

const Downloads = () => {
  return (
    <div className="py-8 sm:py-12">
      <div className="bg-calvarycomposite py-6 text-center">
        <h2 className="font-montserrat uppercase text-white text-xl sm:text-2xl font-medium">
          Download
        </h2>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="max-w-3xl mx-auto space-y-4">
          <a
            href={compositeBrochureLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between gap-3 bg-white border-2 border-gray-200 hover:border-calvarycomposite rounded-xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300 group"
          >
            <h3 className="font-medium text-sm sm:text-base md:text-lg group-hover:text-calvarycomposite transition-colors">{`Calvary Composite® Brochure`}</h3>
            <div className="shrink-0">
              <Image
                src={downloadIconURL}
                alt="Download Icon"
                width={30}
                height={30}
                priority
                className="w-6 h-6 sm:w-8 sm:h-8 group-hover:scale-110 transition-transform duration-200"
              />
            </div>
          </a>

          <a
            href={compositeResdentialLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between gap-3 bg-white border-2 border-gray-200 hover:border-calvarycomposite rounded-xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300 group"
          >
            <h3 className="font-medium text-sm sm:text-base md:text-lg group-hover:text-calvarycomposite transition-colors">{`Calvary Composite® Residential`}</h3>
            <div className="shrink-0">
              <Image
                src={downloadIconURL}
                alt="Download Icon"
                width={30}
                height={30}
                priority
                className="w-6 h-6 sm:w-8 sm:h-8 group-hover:scale-110 transition-transform duration-200"
              />
            </div>
          </a>

          <a
            href={compositeProjectLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between gap-3 bg-white border-2 border-gray-200 hover:border-calvarycomposite rounded-xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300 group"
          >
            <h3 className="font-medium text-sm sm:text-base md:text-lg group-hover:text-calvarycomposite transition-colors">{`Calvary Composite® Project Reference`}</h3>
            <div className="shrink-0">
              <Image
                src={downloadIconURL}
                alt="Download Icon"
                width={30}
                height={30}
                priority
                className="w-6 h-6 sm:w-8 sm:h-8 group-hover:scale-110 transition-transform duration-200"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Downloads;
