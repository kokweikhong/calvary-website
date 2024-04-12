import Image from "next/image";
// osmo-colour-chart-exterior.pdf
// osmo-colour-chart-interior.pdf
// osmo-project-reference.pdf
//
//

const ASSETS_URL = process.env.NEXT_PUBLIC_WEBSITE_ASSETS_URL;
const downloadBaseURL = `${ASSETS_URL}/websites/osmo/downloads`;

const downloads: { name: string; url: string }[] = [
  {
    name: `OSMO® Colour chart Exterior`,
    url: `${downloadBaseURL}/osmo-colour-chart-exterior.pdf`,
  },
  {
    name: `OSMO® Colour chart Interior`,
    url: `${downloadBaseURL}/osmo-colour-chart-interior.pdf`,
  },
  {
    name: `OSMO® Project Reference`,
    url: `${downloadBaseURL}/osmo-project-reference.pdf`,
  },
];

const downloadIconURL = `${ASSETS_URL}/websites/osmo/download-icon.svg`;

const Downloads = () => {
  return (
    <div id="osmo-downloads">
      <div className="bg-osmo text-white py-4">
        <h2 className="text-2xl font-medium font-montserrat tracking-wider text-center">Downloads</h2>
      </div>

      <div>
        {downloads.map((download, index) => (
          <div key={index} className="container-cp space-y-4">
            <div className="flex items-center space-x-2 p-2 border-b border-black">
              <a
                href={download.url}
                target="_blank"
                rel="noreferrer"
                className="font-medium hover:underline"
              >
                {download.name}
              </a>
              <Image
                src={downloadIconURL}
                alt="Download icon"
                width={32}
                height={32}
                priority
              />
            </div>
          </div>
        ))}
      </div>


    </div>
  );
}

export default Downloads;
