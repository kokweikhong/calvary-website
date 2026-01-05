import Hero from "./_components/hero";
import { cn } from "@/lib/utils";

const basicStyles = cn(
  "prose prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg",
  // "[&_h2]:text-4xl [_&h3]:text-3xl [_&h4]:text-2xl [_&h5]:text-xl [_&h6]:text-lg",
  // "[&_h2]:mt-8 [_&h3]:mt-6 [_&h4]:mt-4 [_&h5]:mt-2 [_&h6]:mt-2",
  "container-cp"
);

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <div className="pb-8">
      <Hero />
      <div id="privacy-content" className={basicStyles}>
        {children}
      </div>
    </div>
  );
}
