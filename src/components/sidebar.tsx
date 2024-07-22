"use client";
import { cn } from "@/lib/utils";
import { Plus_Jakarta_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

//Iconsax
import {
  Category2,
  Book1,
  UserOctagon,
  Message,
  Setting2,
} from "iconsax-react";

const PlusJakartaSans = Plus_Jakarta_Sans({
  weight: "400",
  subsets: ["latin"],
});

const routes = [
  {
    label: "Overview",
    icon: Category2,
    href: "/overview",
  },
  {
    label: "Task",
    icon: Book1,
    href: "/task",
  },
  {
    label: "Mentors",
    icon: UserOctagon,
    href: "/mentors",
  },
  {
    label: "Message",
    icon: Message,
    href: "/message",
  },
  {
    label: "Settings",
    icon: Setting2,
    href: "/settings",
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="py-8 flex flex-col items-center h-full  bg-[#FFFFFF]">
      <div className="px-3 py-2 flex-1  ">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative w-[188px] h-[40px] mr-4">
            <Image fill alt="Logo" src="/sidebar/Logo.png" />
          </div>
        </Link>
        <div className="flex flex-col items-center">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className="text-[14px] w-[188px] h-[60px] font-semibold group flex p-3 justify-start cursor-pointer"
            >
              <div
                className={cn(
                  "flex w-[148px] h-[24px] text-secondinary-300 rounded-lg hover:text-secondinary-500 hover:bg-[#F5F5F7] justify-start items-center flex-1 gap-3 p-[20px]",
                  pathname === route.href && "bg-[#F5F5F7] text-secondinary-500"
                )}
              >
                <route.icon width={24} height={24} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
