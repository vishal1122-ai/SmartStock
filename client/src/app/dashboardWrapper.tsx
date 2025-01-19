"use client";

import React, { useEffect } from "react";
import Navbar from "@/app/(components)/Navbar";
import Sidebar from "@/app/(components)/Sidebar";
import StoreProvider, { useAppSelector } from "./redux";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  // Update theme based on dark mode
  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <div
      className={`${
        isDarkMode ? "dark" : "light"
      } flex bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-200 w-full min-h-screen`}
    >
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <main
        className={`flex flex-col w-full h-full py-7 px-9 transition-all duration-300 ${
          isSidebarCollapsed ? "md:pl-24" : "md:pl-72"
        } bg-gray-100 dark:bg-gray-800`}
      >
        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <div className="flex-grow bg-white dark:bg-gray-700 shadow-lg rounded-xl p-6">
          {children}
        </div>
      </main>
    </div>
  );
};

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <DashboardLayout>{children}</DashboardLayout>
    </StoreProvider>
  );
};

export default DashboardWrapper;
