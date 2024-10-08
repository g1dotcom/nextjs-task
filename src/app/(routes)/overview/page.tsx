"use client";
import React from "react";
//Components
import { ActivityChart } from "@/components/overview/ActivityCharts";
import CircleBar from "@/components/overview/CircleBar";
import { MontlyCarousel } from "@/components/overview/MontlyCarousel";
import { UpcomingTask } from "@/components/overview/UpcomingTask";
//Shadcn
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar } from "@/components/ui/calendar";

//Iconsax
import { Notification } from "iconsax-react";

const Overview = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="w-[1440px] h-full flex   bg-red-300">
      <div className="w-[752px] h-full flex flex-col bg-[#FAFAFA]">
        <header className="bg-[#FFFFFF] w-full h-[192px] flex justify-between p-8">
          <div className="w-[236px] h-[72px] flex flex-col items-start justify-center ">
            <h1 className="text-secondinary-500 text-[24px] font-semibold">
              Hi,Skylar Dias
            </h1>
            <p className="text-secondinary-400 text-[16px] font-medium">
              Lets finish your task today!
            </p>
          </div>
          <div className="w-[128px] h-[52px] flex justify-between items-center ">
            <Notification color="#8E92BC" variant="Outline" size={24} />

            <Avatar>
              <AvatarImage src="/profil.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </header>
        <div className="w-full h-full flex flex-col">
          <div className="w-full flex space-x-12 items-start p-8">
            <CircleBar />
            <ActivityChart />
          </div>
          <div className="w-full p-8 ">
            <MontlyCarousel />
          </div>
          <div className="w-full p-8 ">
            <UpcomingTask />
          </div>
        </div>
      </div>
      <div className="w-[436px] h-screen bg-green-500">
        <div className="">
          {" "}
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </div>
      </div>
    </div>
  );
};

export default Overview;
