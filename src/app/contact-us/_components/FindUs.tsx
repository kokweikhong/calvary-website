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
    address: [
      "66 Kampung Bugis, Level 7",
      "Singapore 338987",
      `(Moving to Kampong Bugis Level 7 Soon)`,
    ],
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
    whatsapp: "+60 16-778 5788",
    phone: "+60 16-778 5788",
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
    <div className="flex flex-col items-center justify-center space-y-4 container-cp">
      <div className="py-2 border-y border-black mx-auto">
        <h2 className="text-2xl font-montserrat uppercase">find us</h2>
      </div>

      <div>
        <p>We are available in Singapore and Malaysia!</p>
      </div>

      <div className="self-start w-full md:self-center md:mx-auto">
        {locations.map((location, index) => (
          <div
            key={index}
            className="mt-4 md:grid md:grid-cols-[1fr_2fr] md:items-start"
          >
            <h3 className="text-lg font-semibold underline">{location.name}</h3>
            <div>
              <div className="mt-2">
                {location.address.map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
              <div className="mt-2">
                {location.whatsapp && <p>Whatsapp: {location.whatsapp}</p>}
                {location.phone && <p>Phone: {location.phone}</p>}
                {location.email && <p>Email: {location.email}</p>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindUs;
