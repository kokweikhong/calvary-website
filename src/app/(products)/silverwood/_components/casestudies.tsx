import Image from "next/image";

const balauBenchRevitalisation = "https://assets.calvarycarpentry.com/websites/silverwood/balau_bench_revitalisation.png";
const silverTransformationAfter = "https://assets.calvarycarpentry.com/websites/silverwood/silver_transformation_after.jpg"
const silverTransformationBefore = "https://assets.calvarycarpentry.com/websites/silverwood/silver_transformation_before.jpg"
const originalVs2WeeksTransformation = "https://assets.calvarycarpentry.com/websites/silverwood/orignal_vs_2weeks_transformation.png"
const silverTransformationMid = "https://assets.calvarycarpentry.com/websites/silverwood/silver_transformation_mid.jpg"

const beforePineBridgeFinland = "https://assets.calvarycarpentry.com/websites/silverwood/before_pine_bridge_finland_with%20silverwood.jpg"
const afterPineBridgeFinland = "https://assets.calvarycarpentry.com/websites/silverwood/after_pine_bridge_finland_with_silverwood.jpg"

const mouldBeforeTreatment = "https://assets.calvarycarpentry.com/websites/silverwood/mould_before_treatment.jpg"
const mouldAfterTreatment = "https://assets.calvarycarpentry.com/websites/silverwood/mould_after_treatment.jpg"

const CaseStudies = () => {
    return (
        <section className="container mx-auto p-4" id="silverwood-case-studies">

            <div className="flex flex-col items-center justify-center mt-8">
                <a href="#silverwood-about" className="mt-8 rounded-lg border uppercase hover:text-gray-800 px-6 py-3 transition-colors bg-[#32606A] text-white flex items-center justify-center gap-2">
                    our case studies
                </a>
                <span className="uppercase text-sm">accoya products</span>
            </div>

            {/* reverse if mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
                <div>
                    <Image
                        src={balauBenchRevitalisation}
                        alt="Balau Bench Revitalisation"
                        width={800}
                        height={600}
                        className="mx-auto w-full h-full object-cover"
                    />
                </div>
                <div>
                    <h3 className="uppercase font-semibold">Balau Bench Revitalisation</h3>
                    <p className="mt-4">{`Silverwood recently completed a project in which they revitalised timber benches in Singapore's national parks using their all-natural Silver Wood coating.`}</p>
                    <Image
                        src={originalVs2WeeksTransformation}
                        alt="Original vs 2 Weeks Transformation"
                        width={800}
                        height={600}
                        className="mx-auto w-96 h-auto object-cover mt-8"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
                <div>
                    <Image
                        src={silverTransformationAfter}
                        alt="Silver Transformation After"
                        width={800}
                        height={600}
                        className="mx-auto w-full h-full object-fill"
                    />
                </div>
                <div className="flex flex-col items-center">
                    <h3 className="uppercase font-semibold text-left w-full">Silver Transformation</h3>
                    <p className="mt-4">{`Great for timber restoration and revitalization. All natural, eco-friendly for the environment.  A natural process that is non-toxic.`}</p>
                    <div className="grid grid-cols-2 gap-4 mt-8 w-full">
                        <Image
                            src={silverTransformationBefore}
                            alt="Silver Transformation Before"
                            width={800}
                            height={600}
                            className="mx-auto w-full h-full object-fill"
                        />
                        <Image
                            src={silverTransformationMid}
                            alt="Silver Transformation Mid"
                            width={800}
                            height={600}
                            className="mx-auto w-full h-full object-fill"
                        />

                    </div>
                </div>
            </div>

            <hr className="my-8 border-t border-[#32606A]" />

            <div className="uppercase">
                <h3 className="uppercase mb-4 font-semibold">pine bridge finland with silverwood</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4 text-[#32606A]">
                    <div className="flex flex-col items-center mb-4">
                        <Image
                            src={beforePineBridgeFinland}
                            alt="Before Pine Bridge Finland"
                            width={800}
                            height={600}
                            className="mx-auto w-full h-full object-cover"
                        />
                        <span>Before</span>
                    </div>
                    <div className="flex flex-col items-center mb-4 text-[#32606A]">
                        <Image
                            src={afterPineBridgeFinland}
                            alt="After Pine Bridge Finland"
                            width={800}
                            height={600}
                            className="mx-auto w-full h-full object-cover"
                        />
                        <span>After</span>
                    </div>
                </div>
            </div>

            <hr className="my-8 border-t border-[#32606A]" />

            <div className="uppercase">
                <h3 className="uppercase mb-4 font-semibold">mould before and after treatment</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4 text-[#32606A]">
                    <div className="flex flex-col items-center mb-4">
                        <Image
                            src={mouldBeforeTreatment}
                            alt="Mould Before Treatment"
                            width={800}
                            height={600}
                            className="mx-auto w-full h-full object-cover"
                        />
                        <span>Before</span>
                    </div>
                    <div className="flex flex-col items-center mb-4">
                        <Image
                            src={mouldAfterTreatment}
                            alt="Mould After Treatment"
                            width={800}
                            height={600}
                            className="mx-auto w-full h-full object-cover"
                        />
                        <span>After treatment (Same day)</span>
                    </div>
                </div>
            </div>


        </section>

    );
}

export default CaseStudies;