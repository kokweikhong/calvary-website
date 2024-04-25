import Image from "next/image";
import Link from "next/link";

const ASSETS_URL = process.env.NEXT_PUBLIC_WEBSITE_ASSETS_URL;
const coverImg = `${ASSETS_URL}/websites/wood-and-timber/timber-decking-jw-marriot.jpg`;
const certficationsImg = `${ASSETS_URL}/websites/wood-and-timber/certifications.svg`;

const TimberDecking = () => {
  return (
    <div className="container-cp py-4">
      <div className="space-y-4">
        <h2 className="text-center text-2xl font-medium mb-2">
          Timber Decking
        </h2>

        <div>
          <Image
            src={coverImg}
            alt="Timber decking"
            width={1200}
            height={600}
            priority
            className="object-cover w-full h-full"
          />
        </div>

        <div className="space-y-2">
          <p>{`
          Decking is never better than when it’s made of real wood. The feel under foot of real wood, or the authentic look achieved with genuine wooden boards. Accoya delivers all this and much more.
        `}</p>

          <p>{`
          For a low maintenance decking that withstands wear and tear in any climate, Accoya is the answer. Resistant against cracks and splinters with superior stability compared to typical decking boards, Accoya combines the charm of real wood with exceptional performance credentials. Perfect for extending your living space to the great outdoors – barefoot and fancy free.
        `}</p>

          <p>{`
          Unlike traditional wood decking, Accoya is barefoot friendly all year round, resistant to rot and insect attack, and doesn’t require constant maintenance to stay looking its best. For added safety, you can choose to add durable anti-slip inserts.
        `}</p>
        </div>

        <div className="space-y-4 flex flex-col items-center justify-center">
          <div className="w-full h-auto">
            <Image
              src={certficationsImg}
              alt="Certifications"
              width={500}
              height={500}
              priority
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <Link
              href="/accoya"
              className="text-center text-white bg-accoya py-2 px-4 rounded-md uppercase hover:text-accoya hover:bg-white transition-all"
            >
              explore accoya
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimberDecking;
