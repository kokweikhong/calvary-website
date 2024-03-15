import Image from "next/image";

import verticalLogo from "@/../public/black_vertical_logo.png";
import google from "@/../public/images/home/google.png";
import star from "@/../public/images/home/star.svg";
import starGray from "@/../public/images/home/star_gray.svg";

type Review = {
  name: string;
  subcontent: string;
  image: any;
  stars: number;
  content: string;
};

const reviews: Review[] = [
  {
    name: "Joo Kee Choong",
    subcontent: "7 reviews · 4 photos",
    image: google,
    stars: 5,
    content:
      "Excellent service in both sales and operations. When my wife and I first visited the showroom, Vanessa took time (even after office hours, late at night) to show us the various product. She provided us with a lot of information, various use cases, and answered all our questions with very sound product knowledge.",
  },
  {
    name: "Qx Tan",
    subcontent: "10 reviews · 15 photos",
    image: google,
    stars: 5,
    content:
      "Special thanks to Vanessa and the installation team led by Aiden for my balcony decking. The entire process was smooth sailing, with Vanessa personally onsite to oversee the installation and the constant updates provided by her on the progress. I have received many compliments on the end product. Thumbs up for the great service and professionalism! I will not hesitate to recommend anyone hunting for good quality decking to look for Vanessa from Calvary Carpentry!",
  },
];

const Testimonials = () => {
  return (
    <section className="mt-[50px]">
      <div className="flex flex-col items-center justify-center space-y-8">
        <div className="flex items-center w-full justify-center">
          <span className="text-[20px] font-semibold text-gray-500 mr-[10px]">
            powered by
          </span>
          <div className="h-[50px] w-[90px] relative">
            <Image
              src={google}
              alt="google"
              fill
              className="w-full h-full object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="mr-10 rounded-full shadow-lg border-2 bg-white relative w-[90px] h-[90px]">
            <Image
              src={verticalLogo}
              alt="logo"
              fill
              className="w-full h-full object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div>
            <h2 className="text-[20px] font-bold text-headingDark">
              Calvary Carpentry
            </h2>
            <p className="underline">157 Google reviews</p>
            <div>
              <div className="flex items-center gap-1">
                <div className="h-[20px] w-[20px] relative">
                  <Image
                    src={star}
                    alt="star"
                    fill
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-[20px] w-[20px] relative">
                  <Image
                    src={star}
                    alt="star"
                    fill
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-[20px] w-[20px] relative">
                  <Image
                    src={star}
                    alt="star"
                    fill
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-[20px] w-[20px] relative">
                  <Image
                    src={star}
                    alt="star"
                    fill
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-[20px] w-[20px] relative">
                  <Image
                    src={starGray}
                    alt="star"
                    fill
                    className="w-full h-full object-cover"
                  />
                </div>
                <p>5.0</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <a href="#" className="underline">
            Show More
          </a>
        </div>
      </div>

      <div className="flex flex-wrap gap-6 justify-center mt-[50px]">
        {reviews.map((review, index) => (
          <div
            key={`review-${index}`}
            className="border p-8 rounded-md shadow-md w-[400px] max-w-[400px] flex flex-col items-start justify-center space-y-4"
          >
            <div className="flex items-center justify-center">
              <div className="h-[50px] w-[50px] relative">
                <Image
                  src={review.image}
                  alt="google"
                  fill
                  className="w-full h-full object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="flex flex-col items-start justify-center ml-4">
                <h3 className="text-[16px] font-bold text-headingDark">
                  {review.name}
                </h3>
                <p className="text-[14px] text-gray-500">{review.subcontent}</p>

                <div className="flex items-center gap-1">
                  {[...Array(review.stars)].map((_, index) => (
                    <div
                      key={`star-${index}`}
                      className="h-[20px] w-[20px] relative"
                    >
                      <Image
                        src={star}
                        alt="star"
                        fill
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                  {[...Array(5 - review.stars)].map((_, index) => (
                    <div
                      key={`star-${index}`}
                      className="h-[20px] w-[20px] relative"
                    >
                      <Image
                        src={starGray}
                        alt="star"
                        fill
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* set content max length and with ... */}
            <p className="text-[14px] text-headingDark">
              {review.content.length > 200
                ? `${review.content.substring(0, 200)}...`
                : review.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
