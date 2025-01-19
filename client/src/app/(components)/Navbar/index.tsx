"use client";

import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsDarkMode, setIsSidebarCollapsed } from "@/state";
import { Bell, Menu, Moon, Settings, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  };

  const toggleDarkMode = () => {
    dispatch(setIsDarkMode(!isDarkMode));
  };

  return (
    <div className="flex justify-between items-center w-full mb-7 bg-gray-50 p-4 rounded-lg shadow-md">
      {/* LEFT SIDE */}
      <div className="flex items-center gap-5">
        <button
          className="px-3 py-3 bg-teal-100 rounded-full hover:bg-teal-200"
          onClick={toggleSidebar}
        >
          <Menu className="w-5 h-5 text-teal-600" />
        </button>
        <div className="relative">
          <input
            type="search"
            placeholder="Search groups & products"
            className="pl-10 pr-4 py-2 w-60 border-2 border-gray-300 bg-white rounded-lg focus:outline-none focus:border-teal-500"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Bell className="text-teal-500" size={20} />
          </div>
        </div>
      </div>
      {/* RIGHT SIDE */}
      <div className="flex items-center gap-5">
        <button onClick={toggleDarkMode} className="text-teal-600">
          {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
        </button>
        <div className="relative">
          <Bell className="text-teal-600" size={24} />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs px-2 py-1">
            3
          </span>
        </div>
        <Link href="/settings">
          <Settings className="text-teal-600" size={24} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
