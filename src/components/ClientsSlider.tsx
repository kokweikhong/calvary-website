"use client";

import { FC, useEffect, useRef, useState } from "react";
import { getAllClients } from "./svg/clients";

type ClientsSliderProps = {
  backgroundColor?: string;
  iconColor?: string;
};

const ClientsSlider: FC<ClientsSliderProps> = ({
  backgroundColor = "black",
  iconColor = "#000000",
}) => {
  const clients = getAllClients({
    height: "38",
    fill: iconColor,
  });

  // Duplicate clients for seamless loop
  const duplicatedClients = [...clients, ...clients];
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 1; // pixels per frame
    const containerWidth = scrollContainer.scrollWidth / 2; // Half width since duplicated

    const scroll = () => {
      scrollPosition += scrollSpeed;

      // Reset to beginning when we've scrolled past first set
      if (scrollPosition >= containerWidth) {
        scrollPosition = 0;
      }

      scrollContainer.scrollLeft = scrollPosition;
      requestAnimationFrame(scroll);
    };

    const animationId = requestAnimationFrame(scroll);

    // Pause on hover
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId);
    };

    const handleMouseLeave = () => {
      requestAnimationFrame(scroll);
    };

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="w-full overflow-hidden p-4 bg-black">
      <div
        ref={scrollRef}
        className="flex gap-12 overflow-x-hidden bg-none"
        style={{ scrollBehavior: "auto" }}
      >
        {duplicatedClients.map((client, index) => (
          <div
            key={`client-${index}`}
            className="shrink-0 h-9.5 w-auto flex items-center justify-center"
            style={{ minWidth: "150px" }}
          >
            {client}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientsSlider;
