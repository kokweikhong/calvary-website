export type Project = {
  id: string;
  name: string;
  year: number;
  location: string;
  completion: string;
  size?: string;
  imagePath?: string;
  country: string;
  products: string[];
  sectors: string[];
  countries: string[];
  applications?: string[];
  services?: string[];
  description?: string;
  images?: string[];
};
