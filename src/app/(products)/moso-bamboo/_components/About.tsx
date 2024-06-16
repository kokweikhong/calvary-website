import Image from "next/image";
import { getMosoImageUrl } from "../_lib/utils";

const processImage = getMosoImageUrl("moso-process.jpg");

const About = () => {
  return (
    <div id="about-moso" className="py-10">
      <div className="w-full py-10 flex justify-center items-center">
        <h2 className="text-3xl text-center font-bold uppercase border-y border-y-black py-2">
          Why Bamboo
        </h2>
      </div>
      <div className="container-cp space-y-5">
        <div className="relative w-full h-auto max-w-3xl mx-auto">
          <Image
            src={processImage}
            alt="Moso Bamboo"
            width={1920}
            height={1080}
            priority
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-sm text-center">The process behind MOSO® Bamboo.</p>
        <p className="text-sm text-center">
          {`MOSO® Bamboo Products present a naturally sustainable decking option, surpassing both composites and timbers in durability. This fast-growing alternative is ideal for decking, wall-covering, cladding, other decorative applications.`}
        </p>
      </div>
    </div>
  );
};

export default About;
