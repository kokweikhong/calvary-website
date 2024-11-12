import { Champaca } from "@/constants/champaca";
import Image from "next/image";
import Download from "./Download";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Catalogue() {
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
              <Dialog key={index}>
                <DialogTrigger>
                  <div
                    key={index}
                    className="flex flex-wrap items-start gap-2 mt-4 min-[450px]:w-full h-full"
                  >
                    <div className="flex flex-col items-center justify-center gap-y-2 w-20 min-[450px]:w-full min-[450px]:h-full">
                      <Image
                        src={collection.img}
                        alt="Main Image"
                        width={400}
                        height={400}
                        priority
                        className="w-full h-full object-cover"
                      />
                      <p className="text-center text-xs md:text-sm">
                        {collection.title}
                      </p>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{collection.title}</DialogTitle>
                    <DialogDescription>
                      <Image
                        src={collection.img}
                        alt="Main Image"
                        width={800}
                        height={800}
                        priority
                        className="w-full h-full object-cover"
                      />
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
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
                    <Dialog key={index}>
                      <DialogTrigger>
                        <div className="flex flex-col items-center justify-center gap-y-2 w-20 450px:w-full h-full">
                          <Image
                            src={item.img}
                            alt="Main Image"
                            width={400}
                            height={400}
                            priority
                            className="w-full h-full object-cover"
                          />
                          <p className="text-center text-xs md:text-sm">
                            {item.title}
                          </p>
                        </div>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>{item.title}</DialogTitle>
                          <DialogDescription>
                            <Image
                              src={item.img}
                              alt="Main Image"
                              width={800}
                              height={800}
                              priority
                              className="w-full h-full object-cover"
                            />
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
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
              <Dialog key={index}>
                <DialogTrigger>
                  <div className="flex flex-wrap items-start gap-2 mt-4">
                    <div
                      key={index}
                      className="flex flex-col items-center justify-center gap-y-2 w-20 450px:w-full h-full"
                    >
                      <Image
                        src={grade.img}
                        alt="Main Image"
                        width={400}
                        height={400}
                        priority
                        className="w-full h-full object-cover"
                      />
                      <p className="text-center text-xs md:text-sm">
                        {grade.title}
                      </p>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{grade.title}</DialogTitle>
                    <DialogDescription>
                      <Image
                        src={grade.img}
                        alt="Main Image"
                        width={800}
                        height={800}
                        priority
                        className="w-full h-full object-cover"
                      />
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </div>

      <Download />
    </div>
  );
}
