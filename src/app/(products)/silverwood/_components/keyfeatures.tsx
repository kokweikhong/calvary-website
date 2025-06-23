import Image from "next/image";

const timberRevitalisationBanner = "https://assets.calvarycarpentry.com/websites/silverwood/timber_revitalisation.jpg"
const calvarySilverwoodLogo = "https://assets.calvarycarpentry.com/websites/silverwood/calvary_silverwood_logo.svg"

const keyFeatures: {
    title: string;
    image: string;
}[] = [
        {
            title: "cooler rooms",
            image: "https://assets.calvarycarpentry.com/websites/silverwood/cooler_rooms.png"
        },
        {
            title: "non-toxic",
            image: "https://assets.calvarycarpentry.com/websites/silverwood/non_toxic.png"
        },
        {
            title: "biocide free",
            image: "https://assets.calvarycarpentry.com/websites/silverwood/biocide_free.png"
        },
        {
            title: "increased fire retardancy",
            image: "https://assets.calvarycarpentry.com/websites/silverwood/increased_fire_retardancy.png"
        },
        {
            title: "anti-brown fungi",
            image: "https://assets.calvarycarpentry.com/websites/silverwood/anti_brown_fungi.png"
        },
        {
            title: "permanent wood protection",
            image: "https://assets.calvarycarpentry.com/websites/silverwood/permanent_wood_protection.png"
        }
    ];

const KeyFeatures = () => {
    return (
        <section>
            <div className="relative flex items-center justify-center bg-cover bg-center py-4">
                <Image
                    src={timberRevitalisationBanner}
                    alt="Timber Revitalisation Banner"
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0 z-0 left-0 top-0 w-full h-full opacity-70"
                />
                <div className="absolute z-[1] inset-0 bg-black opacity-50"></div>
                <div className="relative z-[2] text-center text-white p-8 flex flex-col items-center justify-center gap-4">
                    <Image
                        src={calvarySilverwoodLogo}
                        alt="Calvary Silverwood Logo"
                        width={300}
                        height={150}
                        className="mx-auto"
                    />
                    <h1 className="text-3xl md:text-4xl font-bold">Timber Revitalisation</h1>
                    <p className="max-w-2xl mx-auto bg-white text-black p-4 rounded-lg mt-4">
                        {`Silverwood is a revolutionary all-natural coating that transforms wood surfaces into a stunning silver color while providing enhanced protection against brown fungi and increased fire retardancy.`}
                    </p>
                    <a href="#silverwood-about" className="rounded-lg border hover:bg-white hover:text-gray-800 px-6 py-3 transition-colors bg-[#33A949] text-white flex flex-col items-center justify-center gap-2 mt-4">
                        <span className="uppercase font-semibold">Revive Your Wood with us</span>
                        <span className="uppercase text-sm">contact us</span>
                    </a>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 p-4 bg-[#32606A] text-white">
                <h2 className="text-2xl uppercase font-montserrat">Key Features</h2>
            </div>

            <div className="container mx-auto p-4">
                <div className="flex flex-col items-center justify-center gap-4">
                    <p>{`The correct handling, processing and long-term protection of wood as a natural construction material has always been Calvary Carpentry’s utmost priority.`}</p>
                    <p>{`Silverwood’s unique finishing system provides a beautiful silver transformation, that is permanent, has great solar resistance and is extremely durable.`}</p>
                </div>

                <div>
                    <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
                        {keyFeatures.map((feature, index) => (
                            <div key={index} className="flex flex-col items-center justify-center p-4 w-48">
                                <Image
                                    src={feature.image}
                                    alt={feature.title}
                                    width={60}
                                    height={60}
                                    className="mb-4 object-cover mx-auto"
                                />
                                <h3 className="uppercase text-sm text-center">{feature.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>


            </div>
        </section >
    );
}

export default KeyFeatures;