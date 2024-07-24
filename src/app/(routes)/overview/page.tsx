"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Notification } from "iconsax-react";

import { CircularProgressbar } from "react-circular-progressbar";

const Overview = () => {
  return (
    <div className="w-full h-screen flex flex-col bg-[#FAFAFA] ">
      <header className="bg-[#FFFFFF] h-[192px] flex justify-between p-8">
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
      <div className="w-full flex justify-between">
        <div className="bg-secondinary-500 text-white">
          <h1>RunningTask</h1>
          <p>65</p>
          <div className="flex">
            <CircularProgressbar
              value={65}
              className="w-[68px] h-[68px] "
              strokeWidth={5}
              styles={{
                path: { stroke: "#546FFF" },
                trail: { stroke: "#1a1e38" },
              }}
            />
            ;
            <h1>
              <span>100</span>
              <span>Task</span>
            </h1>
          </div>
        </div>
        <div className="bg-blue-500"></div>
      </div>
    </div>
  );
};

export default Overview;
