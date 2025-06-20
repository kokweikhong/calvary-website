import Image from "next/image";

const heroImage = "https://assets.calvarycarpentry.com/websites/silverwood/hero.png"
const logo = "https://assets.calvarycarpentry.com/websites/silverwood/silverwood_logo_white.svg"

const Hero = () => {
    return (
        <section className="relative flex items-center justify-center h-screen bg-cover bg-center">
            <div className="absolute z-[1] inset-0 bg-black opacity-50"></div>
            <div className="relative z-[2] text-center text-white p-8 flex flex-col items-center justify-center gap-4">
                <Image
                    src={logo}
                    alt="Silverwood Logo"
                    width={400}
                    height={200}
                    className="mx-auto"
                />
                <p className="text-lg md:text-2xl max-w-2xl mx-auto">
                    Eco-Friendly Timber Protection: All-natural Sustainable Wood Surface Finishing
                </p>
                <a href="#silverwood-about" className="border hover:bg-white hover:text-gray-800 px-6 py-3 text-lg font-semibold transition-colors">
                    Explore Silverwood
                </a>
            </div>
            <Image
                src={heroImage}
                alt="Silverwood Hero Image"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 z-0 left-0 top-0 w-full h-full opacity-70"
            />
        </section>
    );
}

export default Hero;