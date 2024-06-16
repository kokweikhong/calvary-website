import { ArrowRightIcon } from "lucide-react";
import MosoDecking from "./MosoDecking";
import MosoCladding from "./MosoCladding";

const products: { title: string; description: string }[] = [
  {
    title: "MOSO® Bamboo X-treme®",
    description:
      "Crafted from compressed bamboo strips using a distinctive heat treatment/compression process, Bamboo X-treme® achieves the highest durability class according to EU norms, enhancing stability, density, and hardness.",
  },
  {
    title: "MOSO® Bamboo N-Durance®",
    description:
      "The rich warm brown color of MOSO® Bamboo N-durance® results from a steam-pressure treatment involving unique bamboo material crushing and compression techniques, enhancing both hardness and stability.",
  },
];

const Products = () => {
  return (
    <div>
      <div className="bg-moso w-full py-4 flex justify-center items-center text-white">
        <h2 className="text-2xl text-center font-medium uppercase tracking-wider">
          MOSO® BAMBOO
        </h2>
      </div>
      <div className="container mx-auto py-8">
        <div className="flex items-center justify-center mb-4">
          <h3 className="text-2xl text-center font-bold uppercase border-y border-y-black py-2">
            Products
          </h3>
        </div>

        <h4 className="text-lg">
          {`MOSO® Bamboo Outdoor products are available in two variations:`}
        </h4>
        <div className="flex flex-col space-y-4">
          {products.map((product, index) => (
            <div
              key={index}
              className="p-4 rounded-lg flex flex-col items-start space-y-2"
            >
              <h3 className="text-[#805C00] font-bold uppercase flex items-center">
                <ArrowRightIcon size={16} />
                <span className="ml-4">{product.title}</span>
              </h3>
              <p className="text-sm ml-8">{product.description}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center space-y-4 py-8">
          <a
            href="#moso-decking"
            className="bg-moso text-white py-2 px-4 rounded-lg uppercase"
          >
            Explore Decking
          </a>
          <a
            href="#moso-cladding"
            className="bg-moso text-white py-2 px-4 rounded-lg uppercase"
          >
            Explore Cladding
          </a>
        </div>
      </div>

      <MosoDecking />
      <MosoCladding />
    </div>
  );
};

export default Products;
