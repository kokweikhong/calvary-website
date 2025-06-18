const WhyChooseOneWoodImg = "https://assets.calvarycarpentry.com/websites/onewood/why_choose_onewood.jpg"
const OneWoodCatalogueFile = "https://assets.calvarycarpentry.com/websites/onewood/onewood_catalogue_2025.pdf"

type Benefit = {
    title: string;
    description?: string;
    imageUrl: string;
};

const benefits: Benefit[] = [
    {
        title: "fire class",
        description: "class b-s1, d0",
        imageUrl: "https://assets.calvarycarpentry.com/websites/onewood/benefits/fire_resistance.jpg"
    },
    {
        title: "durability",
        description: "class 1",
        imageUrl: "https://assets.calvarycarpentry.com/websites/onewood/benefits/dimensionally_stable.jpg"
    },
    {
        title: "termite resistance",
        imageUrl: "https://assets.calvarycarpentry.com/websites/onewood/benefits/anti_termite.jpg"
    },
    {
        title: "water resistance",
        imageUrl: "https://assets.calvarycarpentry.com/websites/onewood/benefits/water_resistance.jpg"
    }
];

const befenefits2 = [
    "https://assets.calvarycarpentry.com/websites/onewood/benefits/fsc.svg",
    "https://assets.calvarycarpentry.com/websites/onewood/benefits/sgbc.svg"
]

const colors: {
    title: string;
    imageUrl: string;
}[] = [
        {
            title: "Natural",
            imageUrl: "https://assets.calvarycarpentry.com/websites/onewood/colors/natural.png"
        },
        {
            title: "Clear",
            imageUrl: "https://assets.calvarycarpentry.com/websites/onewood/colors/clear.png"
        },
        {
            title: "Deep Birch",
            imageUrl: "https://assets.calvarycarpentry.com/websites/onewood/colors/deep_birch.png"
        },
        {
            title: "Golden Teak",
            imageUrl: "https://assets.calvarycarpentry.com/websites/onewood/colors/golden_teak.png"
        },
        {
            title: "Ebony",
            imageUrl: "https://assets.calvarycarpentry.com/websites/onewood/colors/ebony.png"
        },
        {
            title: "Dark Walnut",
            imageUrl: "https://assets.calvarycarpentry.com/websites/onewood/colors/dark_walnut.png"
        },
        {
            title: "Matured Teak",
            imageUrl: "https://assets.calvarycarpentry.com/websites/onewood/colors/matured_teak.png"
        }
    ];

const About = () => {
    return (
        <section id="onewood-about" className="flex flex-col items-center justify-center">
            <div className="mb-8 bg-[#DCC9A3] p-4 w-full text-center">
                <h2 className="text-3xl font-bold uppercase">Why Choose One Wood</h2>
            </div>
            <div className="mb-8">
                <img src={WhyChooseOneWoodImg} alt="Why Choose One Wood" className="w-full h-auto max-w-4xl rounded-lg shadow-lg" />
            </div>
            <div>
                <h3 className="text-2xl font-semibold mb-4 text-[#A16448]">
                    Homogeneous Reconstituted Timber
                </h3>
            </div>
            <p className="text-lg text-center max-w-2xl mb-8">
                ONEWOOD is a sustainable
                <span className="font-semibold">Homogeneous Reconstituted Timber (HRT)</span> made from plantation wood fibre and eco-binders. Crafted into lumber with natural wood grain patterns, it offers the durability, consistency, and beauty of real timber—ideal for high-performance architectural and structural applications.
            </p>

            <div className="flex flex-col items-center gap-4 mb-8 uppercase">
                <a href={OneWoodCatalogueFile}
                    download="onewood_catalogue_2025.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#397E00] text-white px-6 py-3 text-lg font-semibold hover:bg-[#397E00] transition-colors rounded-lg">
                    Onewood Catalogue
                </a>
                <span>discover Possibilities</span>
            </div>

            <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
                {benefits.map((benefit, index) => (
                    <div key={index} className="bg-white p-4 uppercase flex gap-2 items-center">
                        <div>

                            <img src={benefit.imageUrl} alt={benefit.title} className="w-16 h-16 mb-4" />
                        </div>
                        <div className="text-left">
                            <h4 className="text-lg mb-2">{benefit.title}</h4>
                            {benefit.description && <p className="text-center text-gray-600">{benefit.description}</p>}
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto mt-8">
                {befenefits2.map((imgUrl, index) => (
                    <div key={index} className="bg-white p-4 flex items-center justify-center">
                        <img src={imgUrl} alt="Benefit Logo" className="w-16 h-16 mb-4" />
                    </div>
                ))}
            </div>

            <div className="mt-8 w-full items-center container mx-auto">
                <div className="text-center pb-2 mb-6 w-full">

                    <h3 className="uppercase text-2xl font-semibold mb-4">
                        colour
                    </h3>

                    <hr className="border-t w-full border-black mx-auto mb-4" />
                </div>
                <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
                    {colors.map((color, index) => (
                        <div key={index} className="bg-white p-4 flex flex-col items-center">
                            <img src={color.imageUrl} alt={color.title} className="w-24 h-24 mb-2 rounded-lg shadow-md" />
                            <span className="text-lg font-semibold">{color.title}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default About;