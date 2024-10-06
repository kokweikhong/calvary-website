export default function TechnicalData() {
  return (
    <div className="mt-2 py-4">
      <div className="bg-[#A06548] uppercase p-4">
        <h2 className="font-montserrat text-2xl text-white text-center">
          Technical Data
        </h2>
      </div>

      <div className="container-cp mt-4">
        <div className="font-medium text-sm">
          <div className="grid grid-cols-[1fr_3fr] space-x-4">
            <h4 className="py-2 border-b border-black"></h4>
            <p className="py-2 border-b border-black"></p>
          </div>
          <div className="grid grid-cols-[1fr_3fr] space-x-4">
            <h4 className="py-2 border-b border-black">Flooring Struture</h4>
            <p className="py-2 border-b border-black">
              Compound Solid Wood Flooring / Engineered Wood Flooring
            </p>
          </div>

          <div className="grid grid-cols-[1fr_3fr] space-x-4">
            <h4 className="py-2 border-b border-black">Flooring Pattern</h4>
            <p className="py-2 border-b border-black">
              Planks, Design Parquet, Design Palace
            </p>
          </div>

          {/* total thickness */}
          <div className="grid grid-cols-[1fr_3fr] space-x-4">
            <h4 className="py-2 border-b border-black">Total Thickness</h4>
            <div className="py-2 border-b border-black grid grid-cols-6 space-x-2">
              <p className="text-gray-500 col-span-1">(T) (mm)</p>
              <p>14</p>
              <p>14</p>
              <p>18</p>
              <p>18</p>
              <p>23</p>
            </div>
          </div>

          {/* plank width */}
          <div className="grid grid-cols-[1fr_3fr] space-x-4">
            <h4 className="py-2 border-b border-black">Plank Width*</h4>
            <div className="py-2 border-b border-black grid grid-cols-6 space-x-2">
              <p className="text-gray-500 col-span-1">(W) (mm)</p>
              <p className="flex flex-col space-y-2">
                <span>70</span>
                <span>90</span>
                <span>120</span>
                <span>140/150</span>
              </p>
              <p className="flex flex-col space-y-2">
                <span>185</span>
                <span>190</span>
              </p>
              <p className="flex flex-col space-y-2">
                <span>235</span>
                <span>250</span>
              </p>
              <p className="flex flex-col space-y-2">
                <span>235</span>
                <span>300</span>
              </p>
              <p>400</p>
            </div>
          </div>

          {/* plank length */}
          <div className="grid grid-cols-[1fr_3fr] space-x-4">
            <h4 className="py-2 border-b border-black">Plank Length*</h4>
            <div className="py-2 border-b border-black grid grid-cols-6 space-x-2">
              <p className="text-gray-500 col-span-1">(L) (mm)</p>
              <p>600 - 1,500</p>
              <p>600 - 1,800</p>
              <p>1,200 - 3,000</p>
              <p>1,200 - 3,000</p>
              <p>1,200 - 4,000</p>
            </div>
          </div>

          {/* Product Weight */}
          <div className="grid grid-cols-[1fr_3fr] space-x-4">
            <h4 className="py-2 border-b border-black">Product Weight</h4>
            <div className="py-2 border-b border-black grid grid-cols-6 space-x-2">
              <p className="text-gray-500 col-span-1">(kg / m2)</p>
              <p>~10 - 12</p>
              <p>~10 - 12</p>
              <p>~11 - 13</p>
              <p>~11 - 13</p>
              <p>~11 - 13</p>
            </div>
          </div>

          {/* wear layer */}
          <div className="grid grid-cols-[1fr_3fr] space-x-4">
            <h4 className="py-2 border-b border-black">Wear Layer</h4>
            <p className="py-2 border-b border-black">3mm Solid Wood</p>
          </div>

          {/* substrate */}
          <div className="grid grid-cols-[1fr_3fr] space-x-4">
            <h4 className="py-2 border-b border-black">Substrate</h4>
            <p className="py-2 border-b border-black">
              3-Layer Cross-laminated Teak / High Quality Birch Plywood
            </p>
          </div>

          {/* Joint Profile */}
          <div className="grid grid-cols-[1fr_3fr] space-x-4">
            <h4 className="py-2 border-b border-black">Joint Profile</h4>
            <p className="py-2 border-b border-black">
              Tongue & Groove (4 sides)
            </p>
          </div>

          {/* Surface Texture */}
          <div className="grid grid-cols-[1fr_3fr] space-x-4">
            <h4 className="py-2 border-b border-black">Surface Texture</h4>
            <p className="py-2 border-b border-black">Smooth / Brushed</p>
          </div>

          {/* Surface Sheen */}
          <div className="grid grid-cols-[1fr_3fr] space-x-4">
            <h4 className="py-2 border-b border-black">Surface Sheen</h4>
            <p className="py-2 border-b border-black">
              Matt / Semi-Gloss / Gloss
            </p>
          </div>

          {/* Finish */}
          <div className="grid grid-cols-[1fr_3fr] space-x-4">
            <h4 className="py-2 border-b border-black">Finish</h4>
            <p className="py-2 border-b border-black">
              Prefinished UV Cured Lacquer
            </p>
          </div>

          {/* Moisture Content */}
          <div className="grid grid-cols-[1fr_3fr] space-x-4">
            <h4 className="py-2 border-b border-black">Moisture Content</h4>
            <p className="py-2 border-b border-black">
              8-12% EMC ( JAS Type II )
            </p>
          </div>
        </div>

        <div className="font-medium text-sm mt-4">
          <p>
            * Available Extra Wide and Long (400mm by 4000mm) under Wide Plank
            Collection
          </p>
        </div>
      </div>
    </div>
  );
}
