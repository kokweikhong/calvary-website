import Image from "next/image";

const airportBeforeImage = "https://calvarycarpentry-cloud-storage.sgp1.digitaloceanspaces.com/websites/products/dasso/weathering/%20Madrid%20Barajas%20Airport1.jpeg"
const airportAfterImage = "https://calvarycarpentry-cloud-storage.sgp1.digitaloceanspaces.com/websites/products/dasso/weathering/%20Madrid%20Barajas%20Airportafter.jpeg"

const newImage = "https://calvarycarpentry-cloud-storage.sgp1.digitaloceanspaces.com/websites/products/dasso/weathering/New.jpg"
const fadingImage = "https://calvarycarpentry-cloud-storage.sgp1.digitaloceanspaces.com/websites/products/dasso/weathering/Fading.jpg"
const afterMaintenanceImage = "https://calvarycarpentry-cloud-storage.sgp1.digitaloceanspaces.com/websites/products/dasso/weathering/After%20maintance.jpg"

const FeatureWeathering = () => {
  return (
    <div className="mt-4">
      <div className="flex flex-col">
        <h2 className="text-xl font-medium text-center">
          Madrid Barajas Airport
        </h2>

        <div className="grid grid-cols-2 w-full">
          <div>
            <Image
              src={airportBeforeImage}
              alt="Madrid Barajas Airport before"
              width={800}
              height={600}
              placeholder="blur"
              blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%23E5E7EB'/%3E%3C/svg%3E`}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <Image
              src={airportAfterImage}
              alt="Madrid Barajas Airport after"
              width={800}
              height={600}
              placeholder="blur"
              blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%23E5E7EB'/%3E%3C/svg%3E`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="bg-gray-300 py-6">
          <h2 className="text-xl font-medium text-center">
            Weathering
          </h2>
          <div className="grid grid-cols-3 gap-x-4 py-4 container-cp">
            <div>
              <div>
                <Image
                  src={newImage}
                  alt="New"
                  width={800}
                  height={600}
                  placeholder="blur"
                  blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%23E5E7EB'/%3E%3C/svg%3E`}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-center block">New</span>
            </div>
            <div>
              <div>
                <Image
                  src={fadingImage}
                  alt="Fading"
                  width={800}
                  height={600}
                  placeholder="blur"
                  blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%23E5E7EB'/%3E%3C/svg%3E`}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-center block">{`Fading 5...7 years`}</span>
            </div>
            <div>
              <div>
                <Image
                  src={afterMaintenanceImage}
                  alt="After Maintenance"
                  width={800}
                  height={600}
                  placeholder="blur"
                  blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%23E5E7EB'/%3E%3C/svg%3E`}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-center block">After Maintenance</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default FeatureWeathering;
