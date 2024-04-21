const slidingWords = Array(5)
  .fill([
    "Engineered Flooring",
    "Outdoor Decking",
    "Bamboo",
    "Timber Decking",
    "Timber  Flooring",
    "Cladding",
    "Soffit",
    "Timber Screens",
    "Stairs",
    "Herringbone Flooring",
    "WPC",
    "Timber Panels",
  ])
  .flat();

const Hero = () => {
  return (
    <>
      <div className="h-screen flex items-center justify-center bg-black/50">
        {/* background image */}
        <div></div>

        <div className="text-white flex flex-col gap-y-4 items-center">
          <h1 className="text-4xl font-bold">Blog</h1>

          <div className="text-center max-w-3xl">
            <p>{`
            Discover our newest events, product launches, and timber insights. Stay updated on our ongoing activities and offerings in the world of timber.
          `}</p>
          </div>

          <div className="flex flex-col gap-y-2 justify-center items-center">
            <a
              href="#blog-posts"
              className="text-white bg-transparent border border-white py-2 px-6 font-semibold transition duration-300 hover:bg-white hover:text-black"
            >
              Explore Blog
            </a>
            <span className="text-sm">{`We’ve Got Wood for you`}</span>
          </div>
        </div>
      </div>
      {/* sliding word with tailwindcss */}
      <div className="w-full inline-flex flex-nowrap overflow-hidden bg-black !mt-0 py-4">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll">
          {slidingWords.map((word, index) => (
            <li key={index} className="text-white text-nowrap">
              {word}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Hero;
