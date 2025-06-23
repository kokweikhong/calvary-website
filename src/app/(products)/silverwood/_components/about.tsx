import Image from "next/image"

const bareFootFriendly = "https://assets.calvarycarpentry.com/websites/silverwood/barefoot_friendly.png"
const naturalSources = "https://assets.calvarycarpentry.com/websites/silverwood/natural_sources.png"
const biocideFree = "https://assets.calvarycarpentry.com/websites/silverwood/biocide_free.png"
const nonToxic = "https://assets.calvarycarpentry.com/websites/silverwood/non_toxic.png"

const eco = "https://assets.calvarycarpentry.com/websites/silverwood/eco.png"
const increasedBugResistance = "https://assets.calvarycarpentry.com/websites/silverwood/increase_bug_resistance.png"
const increasedSurfaceHardness = "https://assets.calvarycarpentry.com/websites/silverwood/increased_surface_hardness.png"
const brownFungiProtection = "https://assets.calvarycarpentry.com/websites/silverwood/anti_brown_fungi.png"


const About = () => {
    return (
        <section id="silverwood-about" className="flex flex-col items-center justify-center p-4">
            {/* border top and bottom */}
            <div className="border-t-2 border-b-2 border-black/80 mb-8 text-center py-4">
                <h2 className="text-3xl font-medium font-montserrat uppercase">SilverWood - Timber protection</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 text-[#32606A]">
                <div className="flex flex-col items-center">
                    <Image src={bareFootFriendly} alt="Barefoot Friendly" width={100} height={100} className="mb-2" />
                    <p className="text-lg">Barefoot Friendly</p>
                </div>
                <div className="flex flex-col items-center">
                    <Image src={naturalSources} alt="Natural Sources" width={100} height={100} className="mb-2" />
                    <p className="text-lg">Natural Sources</p>
                </div>
                <div className="flex flex-col items-center">
                    <Image src={biocideFree} alt="Biocide Free" width={100} height={100} className="mb-2" />
                    <p className="text-lg">Biocide Free</p>
                </div>
                <div className="flex flex-col items-center">
                    <Image src={nonToxic} alt="Non Toxic" width={100} height={100} className="mb-2" />
                    <p className="text-lg">Non Toxic</p>
                </div>
            </div>
            <div className="text-center max-w-3xl mx-auto">
                <p className="text-lg mb-4">
                    All natural Wood surfaces Finishing
                </p>
                <p className="text-lg max-w-2xl text-center">
                    {`Silverwood is natural wood conservative, that doesn't contain any biocides. It's permanent as natural silicates are fossilizing wood cells and after polymerization inside the cell, it is a permanent reaction.`}
                </p>
            </div>

            <div className="flex items-center justify-center gap-8 mt-8 text-[#32606A]">
                <div className="flex flex-col items-center">
                    <Image src={eco} alt="Eco Friendly" width={50} height={50} className="mb-2" />
                    <p className="text-sm">Eco Friendly</p>
                </div>
                <div className="flex flex-col items-center">
                    <Image src={increasedBugResistance} alt="Increased Bug Resistance" width={50} height={50} className="mb-2" />
                    <p className="text-sm">Increased Bug Resistance</p>
                </div>
                <div className="flex flex-col items-center">
                    <Image src={naturalSources} alt="Natural Sources" width={50} height={50} className="mb-2" />
                    <p className="text-sm">Natural Sources</p>
                </div>
                <div className="flex flex-col items-center">
                    <Image src={increasedSurfaceHardness} alt="Increased Surface Hardness" width={50} height={50} className="mb-2" />
                    <p className="text-sm">Increased Surface Hardness</p>
                </div>
                <div className="flex flex-col items-center">
                    <Image src={brownFungiProtection} alt="Brown Fungi Protection" width={50} height={50} className="mb-2" />
                    <p className="text-sm">Brown Fungi Protection</p>
                </div>
            </div>

        </section>
    );
}

export default About;