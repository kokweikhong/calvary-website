import Link from "next/link";

const Features = () => {
  return (
    <section>
      <div className="w-full py-4 bg-dasso text-white mb-4">
        <h2 className="uppercase text-center w-full text-3xl font-medium">
          dasso ctech KEY FEATURES
        </h2>
      </div>

      <div className="container-cp space-y-4">
        <p>
          {`Dasso CTECH is a type of decking material that is made from bamboo, which is a highly sustainable and renewable resource. The material is created using a process called compression molding, which makes it highly durable and resistant to weather, mould, soft rot, and insects.`}
        </p>

        <div className="flex flex-col items-center justify-center gap-y-1">
          <Link href={"#"} className="bg-dasso text-white uppercase font-medium rounded-md py-2 px-4">
            Check out dasso ctech
          </Link>
          <span className="text-sm text-dasso uppercase">dasso ctech products</span>
        </div>
      </div>
    </section>
  );
};

export default Features;
