"use client";

import { Champaca } from "@/constants/champaca";
import Image from "next/image";
import Download from "./Download";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const Modal = ({
  isOpen,
  onClose,
  title,
  imageSrc,
}: {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  imageSrc: string;
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 z-50 transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Content */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className="bg-white rounded-lg max-w-6xl w-full max-h-[95vh] flex flex-col shadow-2xl transform transition-all duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-lg flex-shrink-0">
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
            <button
              type="button"
              onClick={onClose}
              className="rounded-md p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 transition-colors"
              aria-label="Close modal"
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Image Container */}
          <div className="flex-1 flex items-center justify-center p-6 overflow-hidden">
            <Image
              src={imageSrc}
              alt={title}
              width={1200}
              height={1200}
              className="max-w-full max-h-full w-auto h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default function Catalogue() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    title: string;
    imageSrc: string;
  }>({
    isOpen: false,
    title: "",
    imageSrc: "",
  });

  const openModal = (title: string, imageSrc: string) => {
    setModalState({ isOpen: true, title, imageSrc });
  };

  const closeModal = () => {
    setModalState({ isOpen: false, title: "", imageSrc: "" });
  };
  return (
    <div id="champaca-catalogue" className="mt-4">
      <div className="bg-[#A06548] p-4">
        <h2 className="uppercase font-montserrat text-xl text-white text-center">
          Champaca Wood Catalogue
        </h2>
      </div>

      <div className="container-cp">
        {/* patterns */}
        <div className="p-4">
          <div className="w-full">
            <h3 className="text-[#A16448] font-semibold uppercase text-xl my-2">
              Available Patterns:
            </h3>
            {/* horizontal line */}
            <span className="block w-full h-0.5 bg-[#A16448] my-2"></span>
          </div>

          <div className="flex flex-col gap-4 w-full">
            {Champaca.catalogue.patterns.map((pattern, index) => (
              <div
                key={index}
                className="flex flex-col w-full items-start justify-start gap-x-4"
              >
                <h3 className="text-[#A16448] font-medium text-center uppercase text-lg my-2">
                  {pattern.title}
                </h3>
                <div className="flex flex-wrap items-start gap-x-2 gap-y-4 max-w-sm 450px:grid 450px:grid-cols-4 450px:max-w-max">
                  {pattern.items.map((item, index) => (
                    <div
                      key={index}
                      className={cn(
                        "flex flex-col items-center justify-center gap-y-2 w-20 450px:w-full h-full cursor-pointer",
                        item.activeImg && "group"
                      )}
                    >
                      <div className="w-full h-full relative">
                        <Image
                          src={item.img}
                          alt="Main Image"
                          width={400}
                          height={400}
                          priority
                          className={cn(
                            "w-full h-full object-cover",
                            item.activeImg &&
                              "group-hover:opacity-0 transition-opacity"
                          )}
                        />
                        {item.activeImg && (
                          <Image
                            src={item.activeImg}
                            alt="Main Image"
                            width={400}
                            height={400}
                            priority
                            className="w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-opacity group-hover:opacity-100"
                          />
                        )}
                      </div>
                      <p className="text-center text-xs md:text-sm">
                        {item.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* collections */}
        <div className="p-4">
          <div className="w-full">
            <h3 className="text-[#A16448] font-semibold uppercase text-xl my-2">
              Available Collections:
            </h3>
            {/* horizontal line */}
            <span className="block w-full h-0.5 bg-[#A16448] my-2"></span>
          </div>
          <div className="flex flex-wrap items-start justify-start gap-2 min-[450px]:grid min-[450px]:grid-cols-4">
            {Champaca.catalogue.collections.map((collection, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-y-2 w-20 min-[450px]:w-full h-full cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => openModal(collection.title, collection.img)}
              >
                <Image
                  src={collection.img}
                  alt={collection.title}
                  width={400}
                  height={400}
                  priority
                  className="w-full h-full object-cover rounded-md"
                />
                <p className="text-center text-xs md:text-sm">
                  {collection.title}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* colours */}
        <div className="p-4">
          <div className="w-full">
            <h3 className="text-[#A16448] font-semibold uppercase text-xl my-2">
              {`Available Wood & Colours:`}
            </h3>
            {/* horizontal line */}
            <span className="block w-full h-0.5 bg-[#A16448] my-2"></span>
          </div>

          <div className="flex flex-col gap-4">
            {Champaca.catalogue.colours.map((colour, index) => (
              <div
                key={index}
                className="flex flex-col w-full md:w-auto items-start justify-start gap-x-4"
              >
                <h3 className="text-[#A16448] font-medium text-center uppercase text-lg my-2">
                  {colour.title}
                </h3>
                <div className="flex flex-wrap items-start gap-2 450px:grid 450px:grid-cols-4">
                  {colour.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center justify-center gap-y-2 w-20 450px:w-full h-full cursor-pointer hover:opacity-80 transition-opacity"
                      onClick={() => openModal(item.title, item.img)}
                    >
                      <Image
                        src={item.img}
                        alt={item.title}
                        width={400}
                        height={400}
                        priority
                        className="w-full h-full object-cover rounded-md"
                      />
                      <p className="text-center text-xs md:text-sm">
                        {item.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* grades */}
        <div className="p-4">
          <div className="w-full">
            <h3 className="text-[#A16448] font-semibold uppercase text-xl my-2">
              Wood Grading:
            </h3>
            {/* horizontal line */}
            <span className="block w-full h-0.5 bg-[#A16448] my-2"></span>
          </div>
          <div className="flex flex-wrap items-start justify-start gap-4 450px:grid 450px:grid-cols-4">
            {Champaca.catalogue.grades.map((grade, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-y-2 w-20 450px:w-full h-full cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => openModal(grade.title, grade.img)}
              >
                <Image
                  src={grade.img}
                  alt={grade.title}
                  width={400}
                  height={400}
                  priority
                  className="w-full h-full object-cover rounded-md"
                />
                <p className="text-center text-xs md:text-sm">{grade.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Download />

      {/* Modal */}
      <Modal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        title={modalState.title}
        imageSrc={modalState.imageSrc}
      />
    </div>
  );
}
