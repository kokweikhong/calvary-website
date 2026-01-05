import Image from "next/image";

const introductionImage =
  "https://calvarycarpentry-cloud-storage.sgp1.cdn.digitaloceanspaces.com/websites/products/dasso/Dasso%20Ctech%20.png";

const certImages = [
  "https://calvarycarpentry-cloud-storage.sgp1.cdn.digitaloceanspaces.com/websites/products/dasso/FSC.svg",
  "https://calvarycarpentry-cloud-storage.sgp1.cdn.digitaloceanspaces.com/websites/products/dasso/icces.svg",
  "https://calvarycarpentry-cloud-storage.sgp1.cdn.digitaloceanspaces.com/websites/products/dasso/mpa.svg",
  "https://calvarycarpentry-cloud-storage.sgp1.cdn.digitaloceanspaces.com/websites/products/dasso/eph.svg",
  "https://calvarycarpentry-cloud-storage.sgp1.cdn.digitaloceanspaces.com/websites/products/dasso/element-cert-sg.svg",
];

const Introduction = () => {
  return (
    <section id="dasso-introduction" className="py-8 sm:py-12">
      <div className="container-cp space-y-6 sm:space-y-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center">
          What is dassoCTECH?
        </h2>
        <div className="flex flex-col gap-3">
          <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg">
            <Image
              src={introductionImage}
              alt="Dasso Ctech Process"
              width={800}
              height={400}
              priority
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="text-center text-sm sm:text-base text-gray-600 italic">
            The process behind dassoCTECH.
          </p>
        </div>

        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          {`Dasso CTECH offers a sustainable and long-lasting decking option made from bamboo, a renewable and eco-friendly resource. The material is created through a compression molding process that fuses the bamboo fibers together, resulting in a weather-resistant and attractive wood-like appearance. Installation and maintenance are easy, and the product is available in a variety of colors and finishes to match any design style. Additionally, using bamboo has a low environmental impact, making Dasso CTECH a smart choice for those looking to support a healthier planet.`}
        </p>

        <div className="flex flex-wrap items-center justify-center sm:justify-between gap-4 sm:gap-6 pt-4">
          {certImages.map((cert, index) => (
            <div key={index} className="flex-shrink-0">
              <Image
                src={cert}
                alt="Certification"
                width={100}
                height={100}
                priority
                className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Introduction;
