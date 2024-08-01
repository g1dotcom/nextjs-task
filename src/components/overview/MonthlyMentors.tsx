import { Notepad2, Star1 } from "iconsax-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { MontlyCarousel } from "./MontlyCarousel";

function MonthlyMentors() {
  return (
    <div className="flex flex-col">
      <div className="w-[688px] h-[140px] ">
        {" "}
        <MontlyCarousel />
      </div>
    </div>
  );
}

export default MonthlyMentors;
