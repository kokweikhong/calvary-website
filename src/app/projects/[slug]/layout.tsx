import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Projects | Calvary Carpentry",
  description:
    "Explore our portfolio of residential and commercial projects. Discover our bespoke timber solutions for interior and outdoor projects. Connect with skilled artisans for custom timber floors, decking, and more.",
};

export default function ProjectLayout({ children }: { children: ReactNode }) {
  return (
    { children }
  );
}
