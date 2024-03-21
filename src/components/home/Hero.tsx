"use client";

const Hero = () => {
  const heroBgPortrait =
    "https://calvarycarpentry-cloud-storage.sgp1.digitaloceanspaces.com/websites/videos/homepage_portrait.mp4";
  const heroBgLandscape =
    "https://calvarycarpentry-cloud-storage.sgp1.digitaloceanspaces.com/websites/videos/homepage_landscape.mp4";

  return (
    <section className="relative h-screen">
      {/* Video Background */}
      <video
        className="w-full h-full object-cover md:hidden"
        autoPlay
        muted
        loop
        onCanPlay={(e) => (e.currentTarget.playbackRate = 0.5)}
      >
        <source src={heroBgPortrait} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video
        className="w-full h-full object-cover hidden md:block"
        autoPlay
        muted
        loop
        onCanPlay={(e) => (e.currentTarget.playbackRate = 0.5)}
      >
        <source src={heroBgLandscape} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Premium Timber Artistry
        </h1>
        <p className="text-lg text-center mb-8">
          {`Crafting Excellence in Timber: Discover Calvary Carpentry's Expert
          Woodworkers`}
        </p>
        <a
          href="#home-services"
          className="max-w-3xl mx-auto text-white border border-white py-2 px-6 rounded-full font-semibold transition duration-300 hover:bg-gray-300 hover:text-headingDark"
        >
          Explore Timber
        </a>
        <p className="mt-4">We’ve Got Wood For You</p>
      </div>
    </section>
  );
};

export default Hero;
