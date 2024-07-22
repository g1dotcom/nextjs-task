"use client";
import { cn } from "@/lib/utils";
import { Plus_Jakarta_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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
    href: "/products",
  },
  {
    label: "Mentors",
    icon: UserOctagon,
    href: "/orders",
  },
  {
    label: "Message",
    icon: Message,
    href: "/customers",
  },
  {
    label: "Settings",
    icon: Setting2,
    href: "/settings",
  },
];

const Sidebar = () => {
  return (
    <div
      className={cn(
        "space-y-4 py-8 flex flex-col items-center h-full  bg-white",
        PlusJakartaSans.className
      )}
    >
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative w-[188px] h-[40px] mr-4">
            <Image fill alt="Logo" src="/sidebar/Logo.png" />
          </div>
        </Link>
        <div className="w-[188px] h-[44px] flex flex-col items-center  ">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className="text-[14px] font-semibold group flex p-3 w-full justify-start 
                cursor-pointer text-[#8E92BC] hover:text-[#141522]  hover:bg-[#F5F5F7] rounded-lg transition"
            >
              <div className="flex w-[148px] h-[24px] justify-start items-center flex-1 gap-3   p-[20px]">
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
