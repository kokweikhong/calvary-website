const FeatureArticles = () => {
  return (
    <div className="container-cp flex flex-col items-center justify-center">
      <div className="text-center py-2 border-y border-black">
        <h2 className="text-3xl font-medium uppercase font-montserrat">
          Featured articles
        </h2>
      </div>

      <div className="mt-4">
        <p>{`
          Explore our latest events, new product launches, and extensive insights into the world of timber. Delve deeper into our timber-related updates and stay informed about our ongoing activities and offerings.
        `}</p>
      </div>
    </div>
  );
};

export default FeatureArticles;
