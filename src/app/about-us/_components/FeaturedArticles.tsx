const FeaturedArticles = () => {
  return (
    <div className="container-cp flex flex-col items-center justify-center space-y-6 sm:space-y-8 py-8 sm:py-12">
      <div className="text-center border-y-2 border-black py-3 sm:py-4 px-4">
        <h2 className="uppercase text-xl sm:text-2xl md:text-3xl font-montserrat tracking-wider font-semibold">
          Featured Articles
        </h2>
      </div>

      <div className="max-w-3xl">
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-center">{`
          Explore our latest events, new product launches, and extensive insights into the world of timber. Delve deeper into our timber-related updates and stay informed about our ongoing activities and offerings.
        `}</p>
      </div>
    </div>
  );
};

export default FeaturedArticles;
