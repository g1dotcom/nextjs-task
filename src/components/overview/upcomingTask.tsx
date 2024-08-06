import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Progress } from "../ui/progress";
import Image from "next/image";

export function UpcomingTask() {
  const progressValue = 85;
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
        <CarouselItem className="  ">
          <div className="flex flex-col gap-2">
            <Image
              src="/overview/CreatingPerfectWebsite.png"
              alt=""
              width={280}
              height={110}
            />

            <div className="flex flex-col">
              <h1 className="text-secondinary-500 text-[16px] font-Semibold">
                Creating Perfect Website
              </h1>
              <p className="text-secondinary-400 text-[12px] font-normal">
                Web Developer
              </p>
            </div>
            <div className="flex justify-between w-[280px] text-[16px] font-medium">
              <h1 className="text-secondinary-500 ">Progress</h1>
              <p className="text-primaryy-500">{progressValue}%</p>
            </div>
            <div className="w-[280px]  flex justify-start">
              <Progress value={progressValue} />
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}
