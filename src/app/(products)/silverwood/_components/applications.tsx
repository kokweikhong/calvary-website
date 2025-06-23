import Image from "next/image";

const applicationsImage = "https://assets.calvarycarpentry.com/websites/silverwood/Applications.jpg";

const downloadIcon = "https://assets.calvarycarpentry.com/websites/silverwood/download_icon.svg";

const silverwoodProjectReferencePDF = "https://assets.calvarycarpentry.com/websites/silverwood/silverwood_project_reference.pdf";

const Applications = () => {
    return (
        <section className="flex flex-col gap-8">
            <div>
                <div className="bg-[#32606A] uppercase text-white p-4 text-center">
                    <h2 className="font-montserrat uppercase text-2xl">Applications</h2>
                </div>
                <div className="container mx-auto p-4">
                    <p>{`Areas of application includes: Outdoor timber furniture such as trellis, fences, benches and any timber surface.`}</p>
                    <p className="mt-4">{`Timber rooftops, deckings, floorings, stairway and platforms.`}</p>
                    <div className="mt-4">
                        <Image
                            src={applicationsImage}
                            alt="Applications of Silverwood"
                            width={800}
                            height={600}
                            className="mx-auto max-w-96 h-auto object-cover"
                        />
                    </div>
                </div>
            </div>

            <div>
                <div className="bg-[#32606A] uppercase text-white p-4 text-center">
                    <h2 className="font-montserrat uppercase text-2xl">How to use silverwood?</h2>
                </div>
                <div className="container mx-auto p-4">
                    <h3 className="text-lg font-semibold">How to Use the Silverwood Coating Sample</h3>
                    <p className="mt-4">
                        {`Each small sample can contains 25ml of Silverwood, sufficient to cover approximately 0.2 sqm. `}<span className="font-semibold">Suitable for all timber species, including Accoya.</span>
                    </p>
                    <p className="mt-4">
                        {`Important: Ensure the surface is clean and completely dry before application.`}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4">
                        <div className="bg-[#E7EDEE] rounded-lg p-4 mt-4">
                            <h4 className="mt-4 font-semibold">For Mould Removal:</h4>
                            <ol className="list-decimal list-inside mt-2">
                                <li>Sand affected areas to remove surface mould.</li>
                                <li>Wash thoroughly and allow the timber to dry fully.</li>
                                <li>Shake the can well before use.</li>
                                <li>Apply evenly using a brush or cloth.</li>
                                <li>Leave for 5–10 minutes, then scrub lightly and rinse if needed.</li>
                            </ol>
                        </div>

                        <div className="bg-[#E7EDEE] rounded-lg p-4 mt-4">
                            <h4 className="mt-4 font-semibold">For Revitalising Weathered Timber:</h4>
                            <ol className="list-decimal list-inside mt-2">
                                <li>Ensure timber is clean and dry.</li>
                                <li>Shake well and apply a thin, even coat.</li>
                                <li>Allow to absorb and dry naturally. No rinsing required.</li>
                            </ol>
                        </div>
                    </div>

                    <p className="mt-4">
                        {`☀️ Note: Silverwood’s signature silver patina develops gradually under sunlight. Exposure to UV light activates the transformation. For larger areas or full restoration projects, contact our team for professional advice and product sizing.`}
                    </p>
                </div>
            </div>

            <div>
                <div className="bg-[#32606A] uppercase text-white p-4 text-center">
                    <h2 className="font-montserrat uppercase text-2xl">Download</h2>
                </div>
                <div className="container mx-auto p-4 text-center uppercase">
                    <a
                        href={silverwoodProjectReferencePDF}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                    >
                        Silverwood® Project Reference

                        <Image
                            src={downloadIcon}
                            alt="Download Icon"
                            width={20}
                            height={20}
                            className="inline-block ml-2"
                        />
                    </a>
                </div>

            </div>


        </section>
    );
}
export default Applications;