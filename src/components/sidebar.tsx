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
    color: "red",
  },
  {
    label: "Task",
    icon: Book1,
    href: "/products",
    color: "text-white",
  },
  {
    label: "Mentors",
    icon: UserOctagon,
    href: "/orders",
    color: "text-white",
  },
  {
    label: "Message",
    icon: Message,
    href: "/customers",
    color: "text-white",
  },
  {
    label: "Settings",
    icon: Setting2,
    href: "/settings",
    color: "text-red-500 hover:text-red-100",
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
        <div className="w-[200px] h-[316px]  space-y-6">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className="text-sm group flex p-3 w-full justify-start 
                cursor-pointer text-[#8E92BC] hover:text-[#141522] font-bold hover:bg-[#F5F5F7] rounded-lg transition"
            >
              <div className="flex items-center flex-1 space-x-[24px] ">
                <route.icon />

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
