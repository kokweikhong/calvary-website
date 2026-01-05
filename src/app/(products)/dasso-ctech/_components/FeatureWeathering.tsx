import Image from "next/image";
import { getWebsiteAssetsURLEnv } from "@/lib/env";

const ASSETS_URL = getWebsiteAssetsURLEnv();
const airportBeforeImage =
  ASSETS_URL +
  "/websites/products/dasso/weathering/%20Madrid%20Barajas%20Airport1.jpeg";
const airportAfterImage =
  ASSETS_URL +
  "/websites/products/dasso/weathering/%20Madrid%20Barajas%20Airportafter.jpeg";

const newImage = ASSETS_URL + "/websites/products/dasso/weathering/New.jpg";
const fadingImage =
  ASSETS_URL + "/websites/products/dasso/weathering/Fading.jpg";
const afterMaintenanceImage =
  ASSETS_URL + "/websites/products/dasso/weathering/After%20maintance.jpg";
const FeatureWeathering = () => {
  return (
    <div className="py-8 sm:py-12 space-y-8 sm:space-y-12">
      <div className="space-y-6 sm:space-y-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center px-4 text-dasso">
          Madrid Barajas Airport
        </h2>

        <div className="container-cp">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="relative aspect-video">
                <Image
                  src={airportBeforeImage}
                  alt="Madrid Barajas Airport before"
                  width={800}
                  height={600}
                  placeholder="blur"
                  blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%23E5E7EB'/%3E%3C/svg%3E`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <span className="text-white font-semibold text-sm sm:text-base">
                    Before
                  </span>
                </div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="relative aspect-video">
                <Image
                  src={airportAfterImage}
                  alt="Madrid Barajas Airport after"
                  width={800}
                  height={600}
                  placeholder="blur"
                  blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%23E5E7EB'/%3E%3C/svg%3E`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <span className="text-white font-semibold text-sm sm:text-base">
                    After
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-b from-gray-100 to-gray-50 py-8 sm:py-12">
          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center px-4 text-dasso">
              Weathering Process
            </h2>
            <div className="container-cp grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="flex flex-col gap-3 group">
                <div className="rounded-xl overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300 bg-white p-2">
                  <div className="aspect-square rounded-lg overflow-hidden">
                    <Image
                      src={newImage}
                      alt="New Dasso"
                      width={800}
                      height={600}
                      placeholder="blur"
                      blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%23E5E7EB'/%3E%3C/svg%3E`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="text-center bg-white rounded-lg py-3 px-4 shadow-sm">
                  <span className="font-semibold text-sm sm:text-base text-gray-800">
                    New
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-3 group">
                <div className="rounded-xl overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300 bg-white p-2">
                  <div className="aspect-square rounded-lg overflow-hidden">
                    <Image
                      src={fadingImage}
                      alt="Fading after 5-7 years"
                      width={800}
                      height={600}
                      placeholder="blur"
                      blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%23E5E7EB'/%3E%3C/svg%3E`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="text-center bg-white rounded-lg py-3 px-4 shadow-sm">
                  <span className="font-semibold text-sm sm:text-base text-gray-800">{`Fading 5...7 years`}</span>
                </div>
              </div>
              <div className="flex flex-col gap-3 group">
                <div className="rounded-xl overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300 bg-white p-2">
                  <div className="aspect-square rounded-lg overflow-hidden">
                    <Image
                      src={afterMaintenanceImage}
                      alt="After Maintenance"
                      width={800}
                      height={600}
                      placeholder="blur"
                      blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%23E5E7EB'/%3E%3C/svg%3E`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="text-center bg-white rounded-lg py-3 px-4 shadow-sm">
                  <span className="font-semibold text-sm sm:text-base text-gray-800">
                    After Maintenance
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureWeathering;
