import { Notepad2, Star1 } from "iconsax-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";

function MonthlyMentors() {
  return (
    <div className="flex flex-col">
      <h1 className="text-secondinary-500 text-[24px] font-semibold">
        Monthly Mentors
      </h1>

      <div className="flex rounded-[10px] gap-[32px] ">
        <div className="bg-primaryy-0 w-[328px] h-[140px] space-y-5 p-4 rounded-[10px] flex flex-col justify-center items-center  ">
          <div className="flex justify-between items-center w-full ">
            <div className="flex gap-3">
              <Avatar>
                <AvatarImage src="/profil.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col w-[124px] h-[40px]">
                <h1 className="text-secondinary-500 font-semibold text-[16px]">
                  Curious George
                </h1>
                <p className="text-secondinary-400 font-semibold text-[16px]">
                  UI UX Design
                </p>
              </div>
            </div>
            <Button variant="follow">+Follow</Button>
          </div>
          <div className="flex justify-between w-full">
            <h1 className="flex space-x-2 text-secondinary-500 font-medium">
              <Notepad2 color="#54577A" size={24} /> <p>40 Task</p>
            </h1>
            <p className="flex items-center space-x-2">
              <Star1 color="#FFB054" size={24} variant="Bold" />
              <span className="text-secondinary-500 font-medium text-[14px]">
                4,9 (510 Reviews)
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MonthlyMentors;
