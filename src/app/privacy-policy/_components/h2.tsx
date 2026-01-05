import { ReactNode } from "react";

const H2 = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex items-center justify-center">
      <h2 className="text-5xl font-semibold text-black mt-8">{children}</h2>
    </div>
  );
};

export default H2;
