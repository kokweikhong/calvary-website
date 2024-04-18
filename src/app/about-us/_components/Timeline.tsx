import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const CircleWithFill = ({ className }: { className: string }) => {
  return (
    <span
      className={cn(
        "h-8 w-8 bg-black rounded-full flex items-center justify-center",
        className && className,
      )}
    ></span>
  );
};

type TimelineItemProps = {
  children: ReactNode;
  year: string;
  iconClassName?: string;
};

const TimelineItem = ({ children, year, iconClassName }: TimelineItemProps) => {
  return (
    <div className="grid grid-cols-[10px_1fr] gap-8 items-start">
      <CircleWithFill
        className={cn("bg-black z-10", iconClassName && iconClassName)}
      />
      <div>
        <h3 className="text-lg tracking-wider">{year}</h3>
        <div className="text-[#707070] [&>div]:space-y-1">{children}</div>
      </div>
    </div>
  );
};

const Timeline = () => {
  return (
    <div className="relative flex flex-col justify-start items-start space-y-4 before:absolute before:h-[95%] before:w-[2px] before:bg-black before:top-0 before:left-4">
      <TimelineItem year="2021">
        <div>
          <p>Relocated to 37 Senoko Way</p>
          <p>Started Online cart floormart.sg</p>
        </div>
      </TimelineItem>
      <TimelineItem year="2020" iconClassName="bg-gray-700">
        <div>
          <p>
            <span className="font-medium text-black">
              BCA General Builder Class 2
            </span>
            <span>{` under CR06, FM03.`}</span>
          </p>
          <p>{`Acquired Seng Hock Choon Trading (Wood Profiler)`}</p>
        </div>
      </TimelineItem>
      <TimelineItem year="2016" iconClassName="bg-gray-500">
        <div>
          <p>
            <span className="font-medium text-black">
              BCA registered contractor
            </span>
            <span>{` under MWO 3`}</span>
          </p>
          <p>
            <span>Developed </span>
            <span className="font-medium text-black">Ez-Rail system</span>
            <span> with </span>
            <span className="font-medium text-black">CDG</span>
          </p>
        </div>
      </TimelineItem>
      <TimelineItem year="2014 / 2015" iconClassName="bg-gray-300">
        <div>
          <p>{`
            Calvary Carpentry Pte Ltd was established. 
          `}</p>
          <p>
            <span>
              We converted from a sole proprietorship to a limited exempt
              company.
            </span>
          </p>
          <p>
            <span className="font-medium text-black">SCAL </span>
            <span>Registered</span>
          </p>
        </div>
      </TimelineItem>
      <TimelineItem year="2011 / 2012" iconClassName="bg-gray-200">
        <div>
          <p>
            <span>Sole Proprietor,</span>
            <span className="font-medium text-black"> NWFA </span>
            <span>registered</span>
          </p>
        </div>
      </TimelineItem>
    </div>
  );
};

export default Timeline;
