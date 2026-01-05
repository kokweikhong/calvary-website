type Location = {
  name: string;
  address: string[];
  whatsapp?: string;
  phone?: string;
  email?: string;
  googleMapsLink?: string;
  googleMapsEmbed?: string;
};

const locations: Location[] = [
  {
    name: "Showroom",
    address: ["66 Kampung Bugis, Level 7", "Singapore 338987"],
    whatsapp: "+65 8776 7837",
    phone: "+65 6684 4012",
    email: "sales@calvarycarpentry.com",
    googleMapsLink: "https://goo.gl/maps/oFlyl78SvBgulWVIL",
    googleMapsEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.781846744271!2d103.86355277496567!3d1.3060192986815888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da14605351fdf9%3A0x15649a8976605ec0!2sCalvary%20Carpentry%20Pte%20Ltd%20%7C%20Timber%20Specialist!5e0!3m2!1sen!2ssg!4v1767604298422!5m2!1sen!2ssg",
  },
  {
    name: "Singapore HQ",
    address: ["66 Kampung Bugis, Level 7", "Singapore 338987"],
    whatsapp: "+65 8776 7837",
    phone: "+65 6684 4012",
    email: "sales@calvarycarpentry.com",
    googleMapsLink: "https://goo.gl/maps/oFlyl78SvBgulWVIL",
    googleMapsEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.781846744271!2d103.86355277496567!3d1.3060192986815888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da14605351fdf9%3A0x15649a8976605ec0!2sCalvary%20Carpentry%20Pte%20Ltd%20%7C%20Timber%20Specialist!5e0!3m2!1sen!2ssg!4v1767604298422!5m2!1sen!2ssg",
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
    googleMapsLink: "https://goo.gl/maps/K6zyFdLAvhHq3PZdm",
    googleMapsEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.1940179889675!2d101.59704067497076!3d3.042610996933223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4dad4e6cb449%3A0x3ecd4cb4158247a5!2sCalvary%20Carpentry%20Malaysia!5e0!3m2!1sen!2ssg!4v1767604568345!5m2!1sen!2ssg",
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
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
          >
            <div className="md:grid md:grid-cols-2 md:gap-0">
              {/* Location Details */}
              <div className="p-6 sm:p-8 space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-xl font-semibold text-[#137765]">
                  {location.name}
                </h3>
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
                        target="_blank"
                        rel="noopener noreferrer"
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
                  {location.googleMapsLink && (
                    <div className="pt-2">
                      <a
                        href={location.googleMapsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-[#137765] hover:text-[#0f5d4e] font-medium transition-colors"
                      >
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                        </svg>
                        <span>Open in Google Maps</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {/* Google Maps Embed */}
              {location.googleMapsEmbed && (
                <div className="h-64 md:h-full min-h-75 bg-gray-100">
                  <iframe
                    src={location.googleMapsEmbed}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Map of ${location.name}`}
                    className="w-full h-full"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindUs;
