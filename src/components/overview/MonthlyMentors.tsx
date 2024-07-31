import { Notepad2 } from "iconsax-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";

function MonthlyMentors() {
  return (
    <div className="flex flex-col">
      <h1 className="text-secondinary-500 text-[24px] font-semibold">
        Monthly Mentors
      </h1>

      <div className="flex rounded-[10px] gap-[32px] ">
        <div className="bg-primaryy-0 w-[328px] h-[140px]  flex flex-col  ">
          <div className="flex justify-between items-center ">
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
            <Button variant="follow">+Follow</Button>
          </div>
          <h1 className="flex text-secondinary-500 font-medium">
            <Notepad2 color="#54577A" size={24} /> 40 Task
          </h1>
        </div>
        <div className="bg-primaryy-0 w-[328px] h-[140px]  flex flex-col  ">
          <div className="flex justify-between items-center ">
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
            <Button variant="follow">+Follow</Button>
          </div>
          <h1 className="flex text-secondinary-500 font-medium">
            <Notepad2 color="#54577A" size={24} /> 40 Task
          </h1>
        </div>
      </div>
    </div>
  );
}

export default MonthlyMentors;
