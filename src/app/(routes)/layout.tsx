"use client";
import { usePathname } from "next/navigation";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import Header from "@/components/ui/header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isOverviewPage = pathname === "/overview"; // "/overview" yolunu kendi yolunuzla değiştirin

  const headerWidthClass = isOverviewPage ? "w-[1004px]" : "w-full";

  return (
    <div className="h-screen relative bg-[#FAFAFA]">
      <div className="hidden h-full w-[252px] md:flex md:flex-col md:fixed md:inset-y-0 z-[80]">
        <Sidebar />
      </div>
      <div className="w-full h-44 ">
        <Header widthClass={headerWidthClass} />
      </div>
      <main className="md:pl-72">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default Layout;
