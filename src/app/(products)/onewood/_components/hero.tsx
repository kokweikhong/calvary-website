const HeroImage = "https://assets.calvarycarpentry.com/websites/onewood/hero.jpg"
const OneWoodLogo = "https://assets.calvarycarpentry.com/websites/onewood/onewood_logo_white.svg";

const Hero = () => {
    return (
        <section className="relative h-screen overflow-hidden">
            <div className="absolute inset-0">
                <img src={HeroImage} alt="One Wood Hero" className="w-full h-full object-cover" />
            </div>
            <div className="relative container mx-auto px-4 py-16 text-center flex flex-col items-center justify-center h-full">
                <img src={OneWoodLogo} alt="One Wood Logo" className="w-48 mb-8" />
                <p className="text-lg md:text-xl text-white mb-8 max-w-2xl">
                    ONEWOOD is a homogeneous reconstituted timber (HRT), designed for exceptional durability and stability in structural exterior applications.
                </p>
                {/* add border */}
                <a href="#onewood-about" className="border border-white text-white px-6 py-3 text-lg font-semibold hover:bg-white hover:text-black transition-colors uppercase">
                    Explore One Wood
                </a>
            </div>
        </section>
    );
}

export default Hero;