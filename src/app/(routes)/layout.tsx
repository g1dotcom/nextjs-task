"use client";

import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import "react-circular-progressbar/dist/styles.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen relative  bg-[#FAFAFA]">
      <div className="hidden h-full w-[252px] md:flex md:flex-col md:fixed md:inset-y-0 z-[80]">
        <Sidebar />
      </div>

      <main className="h-full md:pl-[252px]">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default Layout;
