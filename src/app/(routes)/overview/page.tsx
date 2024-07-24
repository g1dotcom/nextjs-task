"use client";
import { LineGraphics } from "@/components/overview/taskToday";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Notification } from "iconsax-react";

import { CircularProgressbar } from "react-circular-progressbar";

const Overview = () => {
  const value = 0.45;
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
      <div className="w-full flex justify-between items-start">
        <div className="w-[194px] h-[214px] bg-secondinary-500 text-white rounded-[10px] p-4 flex flex-col space-y-5">
          <h1 className="font-semibold text-[16px] text-[#ffffff]">
            Running Task
          </h1>
          <p className="font-semibold text-[32px]">65</p>
          <div className="flex  ">
            <CircularProgressbar
              value={value}
              maxValue={1}
              text={`${value * 100}%`}
              className=" h-[68px]"
              strokeWidth={4}
              styles={{
                path: { stroke: "#546FFF" },
                trail: { stroke: "#1a1e38" },
                text: { fill: "white", fontSize: "18px", fontWeight: "normal" },
              }}
            />

            <h1 className="flex flex-col w-40 justify-center ">
              <span className="font-semibold text-[20px] ml-4">100</span>
              <span className="font-medium text-[14px] text-secondinary-300 ml-4">
                Task
              </span>
            </h1>
          </div>
        </div>
        <div className="w-[462px]">
          <LineGraphics />
        </div>
      </div>
    </div>
  );
};

export default Overview;
