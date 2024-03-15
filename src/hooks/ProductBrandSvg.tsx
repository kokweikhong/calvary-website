import {
  Accoya,
  CalvaryComposite,
  Kandinsky,
  MosoBamboo,
  Osmo,
  SandAndVanish,
  Silverwood,
  TimberDecking,
} from "@/components/svg/products";
import type { ProductBrand } from "@/interfaces/product-brands";

type ProductBrandSvgProps = {
  name: ProductBrand;
  width?: string;
  height?: string;
  fill?: string;
};

export const useProductBrandSvg = ({
  name,
  width,
  height,
  fill,
}: ProductBrandSvgProps) => {
  switch (name) {
    case "accoya":
      return <Accoya width={width} height={height} fill={fill} />;
    case "calvary-composite":
      return <CalvaryComposite width={width} height={height} fill={fill} />;
    case "kandinsky":
      return <Kandinsky width={width} height={height} fill={fill} />;
    case "moso-bamboo":
      return <MosoBamboo width={width} height={height} fill={fill} />;
    case "timber-decking":
      return <TimberDecking width={width} height={height} fill={fill} />;
    case "osmo":
      return <Osmo width={width} height={height} fill={fill} />;
    case "silverwood":
      return <Silverwood width={width} height={height} fill={fill} />;
    case "sand-and-vanish":
      return <SandAndVanish width={width} height={height} fill={fill} />;
  }
};
