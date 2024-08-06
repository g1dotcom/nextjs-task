import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Progress } from "../ui/progress";

export function UpcomingTask() {
  return (
    <Carousel className="flex flex-col gap-5 w-full">
      <div className="flex justify-between w-full ">
        <h1 className="text-secondinary-500 text-[24px] font-semibold">
          Upcoming Task
        </h1>
        <div className="flex items-end">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </div>
      <CarouselContent>
        <CarouselItem className="bg-red-400">
          {/* <ProgressBar /> */}
          <Progress value={75} />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}
