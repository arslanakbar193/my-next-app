"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdSpaceDashboard } from "react-icons/md";
import { BsFillFileSpreadsheetFill, BsPersonWorkspace } from "react-icons/bs";
import { MdOutlineInstallDesktop } from "react-icons/md";
import { GoProjectSymlink } from "react-icons/go";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import DashboardCard from "@/app/components/DashboardCard";
import { FiChevronDown } from "react-icons/fi";
import { BsFillFileEarmarkSpreadsheetFill } from "react-icons/bs";
import { LuMapPinCheckInside } from "react-icons/lu";
import { BsSendCheck } from "react-icons/bs";
import TimeSheetCard from "@/app/components/TimeSheetCard";

export default function DashboardLayout({ children }) {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState(true);
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize(); // set initial screen type
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    if (isMobile) {
      setShowMobileSidebar(!showMobileSidebar);
    } else {
      setExpanded(!expanded);
    }
  };

  const menuItems = [
    {
      icon: <MdSpaceDashboard size={24} />,
      title: "Dashboard",
      href: "/home",
    },
    {
      icon: <BsFillFileEarmarkSpreadsheetFill size={24} />,
      title: "Timesheet",
      href: "/timesheet",
    },
    {
      icon: <MdOutlineInstallDesktop size={24} />,
      title: "Attendance",
      href: "/attendance",
    },
    {
      icon: <GoProjectSymlink size={24} />,
      title: "Projects",
      href: "/projects",
    },
    {
      icon: <BsPersonWorkspace size={24} />,
      title: "WFH Request",
      href: "/wfh",
    },
    { icon: <RiLogoutCircleRLine size={24} />, title: "Logout", href: "/" },
  ];

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Mobile Toggle Button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={toggleSidebar}
          className="flex items-center justify-center p-2 rounded-full bg-gradient-to-br from-[#eec398] via-[#ec733a] to-[#f05933] text-white shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none"
          title="Toggle Sidebar"
        >
          {(isMobile && showMobileSidebar) || (!isMobile && expanded) ? (
            <IoMdClose size={20} />
          ) : (
            <HiMenuAlt3 size={20} />
          )}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed lg:static top-0 left-0 h-full z-40 flex flex-col transition-all duration-300
  bg-white border-r border-orange-200 shadow-lg
  ${expanded ? "w-80" : "w-20"} 
  ${showMobileSidebar ? "translate-x-0" : "-translate-x-full"} 
  lg:translate-x-0`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4">
          <span className="text-xl font-bold text-black mr-2">
            {expanded ? <img src="/NXB-Logo.svg" /> : "NB"}
          </span>
          <button
            onClick={() => setExpanded(!expanded)}
            className="hidden lg:flex items-center justify-center p-2 rounded-full bg-gradient-to-br from-[#eec398] via-[#ec733a] to-[#f05933] text-white shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none"
            title="Toggle Sidebar"
          >
            {expanded ? <IoMdClose size={20} /> : <HiMenuAlt3 size={20} />}
          </button>
        </div>

        {/* Menu Items */}
        <ul className="flex-1 lg:p-4 p-2 space-y-4">
          {/* Section Title - Navigation */}
          {expanded && (
            <li className="px-3 text-xs uppercase tracking-widest text-gray-400 mt-2">
              Navigation
            </li>
          )}

          {/* Dashboard */}
          <li>
            <Link
              href="/home"
              className={`flex items-center gap-3 py-2 rounded border border-orange-100 hover:bg-orange-50 transition px-3  ${
                expanded ? "px-3" : ""
              } ${
                pathname === "/home"
                  ? "border border-orange-100 bg-orange-50 "
                  : ""
              }`}
              onClick={() => setShowMobileSidebar(false)}
            >
              <div
                className={`p-2 rounded-full ${
                  pathname === "/home"
                    ? "bg-orange-100 text-orange-600"
                    : "bg-black text-white"
                }`}
              >
                <MdSpaceDashboard size={24} />
              </div>
              {expanded && (
                <span
                  className={`text-md ${
                    pathname === "/home" ? "text-orange-700" : "text-gray-500"
                  }`}
                >
                  Dashboard
                </span>
              )}
            </Link>
          </li>

          {/* Section Title - Pages */}
          {expanded && (
            <li className="px-3 text-xs uppercase tracking-widest text-gray-400 mt-4">
              Pages
            </li>
          )}

          {/* Remaining Menu Items */}
          {menuItems.slice(1).map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className={`flex items-center gap-3 py-2 rounded border border-orange-100 hover:bg-orange-50 transition px-3 ${
                  expanded ? "px-3" : ""
                } ${
                  pathname === item.href
                    ? "border border-orange-100 bg-orange-50"
                    : ""
                }`}
                onClick={() => setShowMobileSidebar(false)}
              >
                <div
                  className={`p-2 rounded-full ${
                    pathname === item.href
                      ? "bg-orange-100 text-orange-600"
                      : "bg-black text-white"
                  }`}
                >
                  {item.icon}
                </div>
                {expanded && (
                  <span
                    className={`text-md ${
                      pathname === item.href
                        ? "text-orange-700"
                        : "text-gray-500"
                    }`}
                  >
                    {item.title}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 h-screen overflow-y-auto p-6 bg-gray-100">
        <div className="flex items-center justify-between mb-6">
          {/* Welcome text */}
          <h1 className="text-2xl font-semibold text-gray-700">
            Time Logging System
          </h1>

          {/* Profile section */}
          <div className="relative">
            <button
              onClick={() => setProfileDropdown(!profileDropdown)}
              className="flex items-center space-x-2  p-2 rounded  hover:shadow-md transition"
            >
              <img
                src="/undraw_developer-avatar.svg"
                className="w-10 h-10 border border-gray-500 rounded-full"
              />
              <span className=" text-gray-700 rounded-lg">Arslan Akbar</span>
              <FiChevronDown
                className={`text-gray-500 transform transition-transform duration-200 ${
                  profileDropdown ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown */}
            {profileDropdown && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border z-50">
                <div className="p-4 text-sm">
                  <div className="font-semibold text-gray-800">
                    Arslan Akbar
                  </div>
                  <div className="text-gray-600">arslan@example.com</div>
                  <div className="text-gray-600">ID : 2990</div>
                </div>
                <div className="border-t px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-red-600">
                  Logout
                </div>
              </div>
            )}
          </div>
        </div>
        <TimeSheetCard />
      </main>
    </div>
  );
}
