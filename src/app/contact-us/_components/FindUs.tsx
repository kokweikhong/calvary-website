type Location = {
  name: string;
  address: string[];
  whatsapp?: string;
  phone?: string;
  email?: string;
};

const locations: Location[] = [
  // {
  //   name: "Showroom",
  //   address: ["Marina square #03-207", "Singapore 039594"],
  //   whatsapp: "+65 8893 0429",
  //   phone: "+65 6910 6069",
  //   email: "sales@k-floors.com",
  // },
  {
    name: "Singapore HQ",
    address: ["66 Kampung Bugis, Level 7", "Singapore 338987"],
    whatsapp: "+65 8776 7837",
    phone: "+65 6684 4012",
    email: "sales@calvarycarpentry.com",
  },
  {
    name: "Calvary Carpentry Sdn Bhd",
    address: [
      "Level 2, 8, Jalan TS 6/9",
      "Taman Perindustrian Subang",
      "47510 Subang Jaya",
      "Selangor, Malaysia",
    ],
    whatsapp: "+60 13-300 1091",
    phone: "+60 13-300 1091",
    email: "msia@calvarycarpentry.com",
  },
  // {
  //   name: "KLCC Office",
  //   address: [
  //     "Colony Vipod KLCC",
  //     "6, Jalan Kia Peng, Kuala Lumpur",
  //     "50450 Kuala Lumpur",
  //     "Wilayah Persekutuan Kuala Lumpur",
  //   ],
  // },
];

const FindUs = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 sm:space-y-8 container-cp py-8 sm:py-12">
      <div className="py-3 sm:py-4 border-y-2 border-black px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-montserrat uppercase tracking-wider font-semibold">
          find us
        </h2>
      </div>

      <div className="text-center">
        <p className="text-sm sm:text-base text-gray-700">
          We are available in Singapore and Malaysia!
        </p>
      </div>

      <div className="w-full max-w-5xl space-y-4 sm:space-y-6">
        {locations.map((location, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 sm:p-8 border border-gray-100"
          >
            <div className="md:grid md:grid-cols-[1fr_2fr] md:gap-6 space-y-3 md:space-y-0">
              <h3 className="text-lg sm:text-xl font-semibold text-[#137765]">
                {location.name}
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {location.address.map((line, index) => (
                    <p key={index}>{line}</p>
                  ))}
                </div>
                <div className="space-y-1 text-sm sm:text-base">
                  {location.whatsapp && (
                    <p className="flex items-center space-x-2">
                      <span className="font-medium text-gray-700">
                        Whatsapp:
                      </span>
                      <a
                        href={`https://wa.me/${location.whatsapp.replace(
                          /[^0-9]/g,
                          ""
                        )}`}
                        className="text-[#137765] hover:underline"
                      >
                        {location.whatsapp}
                      </a>
                    </p>
                  )}
                  {location.phone && (
                    <p className="flex items-center space-x-2">
                      <span className="font-medium text-gray-700">Phone:</span>
                      <a
                        href={`tel:${location.phone.replace(/[^0-9+]/g, "")}`}
                        className="text-[#137765] hover:underline"
                      >
                        {location.phone}
                      </a>
                    </p>
                  )}
                  {location.email && (
                    <p className="flex items-center space-x-2">
                      <span className="font-medium text-gray-700">Email:</span>
                      <a
                        href={`mailto:${location.email}`}
                        className="text-[#137765] hover:underline break-all"
                      >
                        {location.email}
                      </a>
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindUs;
