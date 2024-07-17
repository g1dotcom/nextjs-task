"use client";
import { cn } from "@/lib/utils";
import { LayoutDashboard } from "lucide-react";
import { Plus_Jakarta_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PlusJakartaSans = Plus_Jakarta_Sans({
  weight: "400",
  subsets: ["latin"],
});

const routes = [
  {
    label: "Overview",
    icon: "/sidebar/category-2.png",
    href: "/overview",
    color: "text-white",
  },
  {
    label: "Task",
    icon: "/sidebar/book.png",
    href: "/products",
    color: "text-white",
  },
  {
    label: "Mentors",
    icon: "/sidebar/user-octagon.png",
    href: "/orders",
    color: "text-white",
  },
  {
    label: "Message",
    icon: "/sidebar/message.png",
    href: "/customers",
    color: "text-white",
  },
  {
    label: "Settings",
    icon: "/sidebar/setting-2.png",
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
            <Image fill alt="Logo" src="/logo.png" />
          </div>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className="text-sm group flex p-3 w-full justify-start 
                cursor-pointer text-[#8E92BC] hover:text-[#141522] font-bold hover:bg-[#F5F5F7] rounded-lg transition"
            >
              <div className="flex items-center flex-1 space-x-[24px] ">
                {/* <route.icon className="w-5 h-5 mr-3" /> */}
                <Image
                  width={24}
                  height={24}
                  alt="Logo"
                  src={String(route.icon)}
                  className="hover:color-[#141522]"
                />
                <span className="">{route.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
