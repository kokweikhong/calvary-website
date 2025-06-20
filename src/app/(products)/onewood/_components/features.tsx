const keyFeatures: {
    title: string;
    description: string;
    imageUrl: string;
}[] = [
        {
            title: "Decking",
            description: "ONEWOOD Outdoor Decking compliments every landscaping space with its natural characteristics of wood grains while offering outdoor access for everyone to appreciate its surroundings.",
            imageUrl: "https://assets.calvarycarpentry.com/websites/onewood/key_features/decking.jpg"
        },
        {
            title: "stairs and rails",
            description: "Every tread of your staircase can be furbished to its exact dimensions without the need of joining multiple planks to form your staircase treads. Create a seamless luxurious living area with ONEWOOD Staircase Treads, ONEWOOD Flooring and ONEWOOD Handrails.",
            imageUrl: "https://assets.calvarycarpentry.com/websites/onewood/key_features/stairs_and_rails.jpg"
        },
        {
            title: "TIMBER WORKS",
            description: "The flexibility of fabricating ONEWOOD in large dimensions provides an option for customised timber works such as large benches and trellis.",
            imageUrl: "https://assets.calvarycarpentry.com/websites/onewood/key_features/timber_work.jpg"
        },
        {
            title: "FACADE & JOINERY",
            description: "Using ONEWOOD for facades, screens or even garden fencing is a great way to enhance the aesthetic feel of every home, villa or commercial area.",
            imageUrl: "https://assets.calvarycarpentry.com/websites/onewood/key_features/facade_and_%20joinery.jpg"
        },
        {
            title: "WALL & CEILING CLADDING",
            description: "ONEWOOD wall and ceiling cladding adds warmth and ambience to spaces, adding character to your home with beautiful wood profiles.",
            imageUrl: "https://assets.calvarycarpentry.com/websites/onewood/key_features/wall_ceiling_and_cladding.jpg"
        },
        {
            title: "Reuse and Refurbish",
            description: "ONEWOOD’s homogeneous property enables resanding to reveal a fresh layer of beautiful wood grains that can be recoated for maintenance or to achieve a new look to complement your new design.",
            imageUrl: "https://assets.calvarycarpentry.com/websites/onewood/key_features/reuse_and_%E2%80%A8refurbish.jpg"
        }
    ];

const Features = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="bg-[#A06548] py-4">
                <h2 className="text-3xl text-white font-bold text-center uppercase">
                    onewood key features
                </h2>
            </div>
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {keyFeatures.map((feature, index) => (
                        <div key={index} className="bg-white p-6 grid grid-cols-1 md:grid-cols-2 gap-x-2">
                            <div>
                                <img src={feature.imageUrl} alt={feature.title} className="h-full w-full object-cover" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2 text-[#535455] uppercase">{feature.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Features;