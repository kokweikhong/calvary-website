const FeaturedArticles = () => {
  return (
    <div className="container-cp flex flex-col items-center justify-center space-y-4">
      <div className="text-center border-y border-black py-2">
        <h2 className="uppercase text-2xl font-montserrat tracking-wider">
          Featured Articles
        </h2>
      </div>

      <div>
        <p>{`
          Explore our latest events, new product launches, and extensive insights into the world of timber. Delve deeper into our timber-related updates and stay informed about our ongoing activities and offerings.
        `}</p>
      </div>
    </div>
  );
};

export default FeaturedArticles;
