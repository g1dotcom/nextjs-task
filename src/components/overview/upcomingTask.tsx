"use client";
import * as React from "react";

//shadcn
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Progress } from "../ui/progress";
import Image from "next/image";

//ıcon sax
import { Timer1 } from "iconsax-react";
import { AnimatedTooltip } from "../ui/animated-tooptip";

//people

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image: "/overview/1.jpg",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image: "/overview/2.jpg",
  },
  {
    id: 3,
    name: "Jane Smithh",
    designation: "Data Scientist",
    image: "/overview/3.jpg",
  },
  {
    id: 4,
    name: "Emine Jan",
    designation: "UX Designer",
    image: "/overview/4.jpg",
  },
];

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
        <CarouselItem className=" w-[328px] h-[314px] ">
          <div className="w-full flex flex-col gap-4">
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
            <div className="flex w-full items-center justify-between">
              <div className="flex space-x-2 w-1/2 items-center">
                <Timer1 size="24" color="#54577A" />
                <h1 className="text-secondinary-500 text-[16px] font-medium ">
                  3 Days Left
                </h1>
              </div>
              <div className="w-1/2   flex justify-center items-center">
                <AnimatedTooltip items={people} />
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-4">
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
            <div className="flex w-full items-center justify-between">
              <div className="flex space-x-2 w-1/2 items-center">
                <Timer1 size="24" color="#54577A" />
                <h1 className="text-secondinary-500 text-[16px] font-medium ">
                  3 Days Left
                </h1>
              </div>
              <div className="w-1/2   flex justify-center items-center">
                <AnimatedTooltip items={people} />
              </div>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}
