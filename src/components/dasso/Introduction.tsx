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
    <section id="dasso-introduction">
      <div className="container-cp space-y-4">
        <h2 className="text-4xl font-medium text-center">
          What is dassoCTECH?
        </h2>
        <div className="text-center">
          <div>
            <Image
              src={introductionImage}
              alt="Dasso Ctech"
              width={800}
              height={400}
              priority
              className="w-full h-full object-cover"
            />
          </div>
          <span>The process behind dassoCTECH.</span>
        </div>

        <p>
          {`Dasso CTECH offers a sustainable and long-lasting decking option made from bamboo, a renewable and eco-friendly resource. The material is created through a compression molding process that fuses the bamboo fibers together, resulting in a weather-resistant and attractive wood-like appearance. Installation and maintenance are easy, and the product is available in a variety of colors and finishes to match any design style. Additionally, using bamboo has a low environmental impact, making Dasso CTECH a smart choice for those looking to support a healthier planet.`}
        </p>

        <div className="flex flex-nowrap items-center justify-between">
          {certImages.map((cert, index) => (
            <div key={index}>
              <Image
                src={cert}
                alt="Certification"
                width={100}
                height={100}
                priority
                className="w-16 h-16"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Introduction;
