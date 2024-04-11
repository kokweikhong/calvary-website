import Image from 'next/image';

const ASSETS_URL = process.env.NEXT_PUBLIC_WEBSITE_ASSETS_URL;
const compositeBrochureLink = `${ASSETS_URL}/websites/composite-decking/downloads/calvary-composite-brochure.pdf`;
const compositeResdentialLink = `${ASSETS_URL}/websites/composite-decking/downloads/calvary-composite-residential.pdf`;
const compositeProjectLink = `${ASSETS_URL}/websites/composite-decking/downloads/calvary-composite-project-reference.pdf`;
const downloadIconURL = `${ASSETS_URL}/websites/composite-decking/download-icon.svg`;


// calvary-composite-brochure.pdf
// calvary-composite-project-reference.pdf
// calvary-composite-residential.pdf

const Downloads = () => {
  return (
    <div>
      <div className="bg-calvaryComposite py-4 text-center">
        <h2 className="font-montserrat uppercase text-white text-2xl font-medium">Download</h2>
      </div>

      <div className="container mx-auto sm:px-6 lg:px-8">
        <div className="">
          <div className='flex space-x-2 border-b border-black'>
            <a href={compositeBrochureLink} target="_blank" rel="noreferrer" className="block bg-white py-4">
              <h3 className="font-medium uppercase">{`Calvary Composite® brochure`}</h3>
            </a>
            <div className="flex items-center justify-center">
              <Image
                src={downloadIconURL}
                alt="Download Icon"
                width={30}
                height={30}
                priority
              />
            </div>
          </div>

          <div className='flex space-x-2 border-b border-black'>
            <a href={compositeResdentialLink} target="_blank" rel="noreferrer" className="block bg-white py-4">
              <h3 className="font-medium uppercase">{`Calvary Composite® residential`}</h3>
            </a>
            <div className="flex items-center justify-center">
              <Image
                src={downloadIconURL}
                alt="Download Icon"
                width={30}
                height={30}
                priority
              />
            </div>
          </div>

          <div className='flex space-x-2 border-b border-black'>
            <a href={compositeProjectLink} target="_blank" rel="noreferrer" className="block bg-white py-4">
              <h3 className="font-medium uppercase">{`Calvary Composite® Project reference`}</h3>
            </a>
            <div className="flex items-center justify-center">
              <Image
                src={downloadIconURL}
                alt="Download Icon"
                width={30}
                height={30}
                priority
              />
            </div>
          </div>

        </div>
      </div>



    </div>
  );
}

export default Downloads;
