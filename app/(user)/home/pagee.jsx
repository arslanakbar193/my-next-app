"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  MdSpaceDashboard,
  MdEventNote,
  MdSchedule,
  MdHomeWork,
  MdAssignmentTurnedIn,
  MdMenu,
  MdClose,
} from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { BsFillFileSpreadsheetFill, BsPersonWorkspace } from "react-icons/bs";
import { GoProjectSymlink } from "react-icons/go";
import { MdOutlineInstallDesktop } from "react-icons/md";

const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Mobile Hamburger Menu */}
        <button
          onClick={toggleSidebar}
          className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md"
        >
          {isSidebarOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
        </button>

        {/* Sidebar */}
        <aside
          className={`w-64 bg-white h-screen fixed md:sticky top-0 transition-all duration-300 ease-in-out ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          } md:block text-white p-4 shadow-md z-40`}
        >
          <nav>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="mt-6">
                  <img src="/NXB-Logo.svg" alt="Company Logo" className="h-10" />
                </div>
              </div>
            </div>

            <ul className="space-y-3 mt-8">
              <li>
                <Link
                  href="/dashboard"
                  className={`flex items-center p-3 rounded-lg transition-colors border-b ${
                    pathname === "/dashboard"
                      ? "bg-orange-50 border-orange-300 text-orange-600"
                      : "text-gray-800 hover:bg-orange-50 border-orange-200 hover:border-orange-300"
                  }`}
                >
                  <MdSpaceDashboard
                    className={`mr-3 ${
                      pathname === "/dashboard" ? "text-orange-600" : "text-orange-500"
                    }`}
                    size={20}
                  />
                  <span className="font-medium">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/attendance"
                  className={`flex items-center p-3 rounded-lg transition-colors border-b ${
                    pathname === "/attendance"
                      ? "bg-orange-50 border-orange-300 text-orange-600"
                      : "text-gray-800 hover:bg-orange-50 border-orange-200 hover:border-orange-300"
                  }`}
                >
                  <MdEventNote
                    className={`mr-3 ${
                      pathname === "/attendance" ? "text-orange-600" : "text-orange-500"
                    }`}
                    size={20}
                  />
                  <span className="font-medium">Daily Attendance</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/timesheet"
                  className={`flex items-center p-3 rounded-lg transition-colors border-b ${
                    pathname === "/timesheet"
                      ? "bg-orange-50 border-orange-300 text-orange-600"
                      : "text-gray-800 hover:bg-orange-50 border-orange-200 hover:border-orange-300"
                  }`}
                >
                  <MdSchedule
                    className={`mr-3 ${
                      pathname === "/timesheet" ? "text-orange-600" : "text-orange-500"
                    }`}
                    size={20}
                  />
                  <span className="font-medium">Time Sheet</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/wfh"
                  className={`flex items-center p-3 rounded-lg transition-colors border-b ${
                    pathname === "/wfh"
                      ? "bg-orange-50 border-orange-300 text-orange-600"
                      : "text-gray-800 hover:bg-orange-50 border-orange-200 hover:border-orange-300"
                  }`}
                >
                  <MdHomeWork
                    className={`mr-3 ${
                      pathname === "/wfh" ? "text-orange-600" : "text-orange-500"
                    }`}
                    size={20}
                  />
                  <span className="font-medium">WFH Request</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/eod"
                  className={`flex items-center p-3 rounded-lg transition-colors border-b ${
                    pathname === "/eod"
                      ? "bg-orange-50 border-orange-300 text-orange-600"
                      : "text-gray-800 hover:bg-orange-50 border-orange-200 hover:border-orange-300"
                  }`}
                >
                  <MdAssignmentTurnedIn
                    className={`mr-3 ${
                      pathname === "/eod" ? "text-orange-600" : "text-orange-500"
                    }`}
                    size={20}
                  />
                  <span className="font-medium">EOD</span>
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main
          className={`flex-1 p-6 overflow-x-hidden transition-all duration-300 ${
            isSidebarOpen ? "ml-0 md:ml-64" : "ml-0"
          }`}
          // style={{
          //   backgroundColor: "#ebe6e7",
          //   backgroundImage: "url('/global-team.svg')",
          //   backgroundSize: "contain",
          //   backgroundPosition: "bottom",
          //   backgroundRepeat: "no-repeat",
          // }}
        >
          <header className="text-gray-600">
            <div className="container mx-auto flex justify-between items-center">
              <h1 className="text-xl font-semibold">Group Captain</h1>
              <div className="flex items-center space-x-2">
                <span
                  className="rounded-full w-8 h-8 flex items-center justify-center"
                  style={{
                    backgroundColor: "#0091ff42",
                    border: "1px solid #0000ff70",
                  }}
                >
                  <span className="text-sm text-white">AA</span>
                </span>
                <span>Arslan Akbar</span>
              </div>
            </div>
            <div className="container mx-auto flex justify-between items-center mt-2">
              <h1 className="text-sm capitalize">
                {pathname.split("/").pop() || "Dashboard"}
              </h1>
              <div className="flex items-center space-x-2">
                <span className="text-sm cursor-pointer">
                  <Link href="/logout" className="flex">
                    <RiLogoutCircleRLine className="text-blue-500" />
                    <span className="text-xs cursor-pointer pl-2">Logout</span>
                  </Link>
                </span>
              </div>
            </div>
          </header>

          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;