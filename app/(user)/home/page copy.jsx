import Navigation from "@/app/components/Navigation";
import Link from "next/link";
import React from "react";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { BsFillFileSpreadsheetFill } from "react-icons/bs";
import { BsPersonWorkspace } from "react-icons/bs";
import { GoProjectSymlink } from "react-icons/go";
import { MdOutlineInstallDesktop } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { LiaIdCard } from "react-icons/lia";

const page = () => {
  return (
    <>
      
      <div className="min-h-screen bg-gray-50">
        <div className="flex">
          <aside
            className="w-64 bg-white  h-screen sticky top-0  hidden md:block  text-white p-4 shadow-md"
            cursor-pointer
            style={{ backgroundColor: "#5D7CF3" }}
          >
            <nav>
              <div>
                <div className="flex items-center space-x-2">
                  <span
                    className="rounded-full w-8 h-8 flex items-center justify-center"
                    style={{
                      backgroundColor: "#0091ff42",
                      border: "1px solid #0000ff70",
                    }}
                  >
                    <span className="text-sm text-black font-semibold">AA</span>
                  </span>
                  <span className="text-black font-semibold">Arslan Akbar</span>
                </div>
              </div>
              <div className="flex">
                  
              </div>
              <ul className="space-y-3 mt-8">
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-blue-600 rounded-lg bg-blue-50"
                  >
                    <svg
                      className="w-5 h-5 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-white-600 rounded-lg hover:bg-blue-200"
                  >
                    {/* <svg
                      className="w-5 h-5 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg> */}
                    <LiaIdCard size={28} className="mr-2"/>
                    2990
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-white-600 rounded-lg hover:bg-blue-200"
                  >
                    {/* <svg
                      className="w-5 h-5 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg> */}
                    <HiOutlineMail size={28}/>
                    <span>arslan.akbar@nxb.com.pk</span>
                  </a>
                </li>
                
              </ul>
            </nav>
          </aside>

          {/* Main Content */}
          <main
            className="flex-1 p-6"
            style={{
              backgroundColor: "#ebe6e7",
              backgroundImage: "url('/global-team.svg')",
              backgroundSize: "contain",
              backgroundPosition: "bottom",
              backgroundRepeat: "no-repeat",
            }}
          >
            <header className=" text-gray-600">
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
              <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-sm ">Dashboard</h1>
                <div className="flex items-center space-x-2">
                  <span className="text-sm cursor-pointer">
                    <Link href="/" className="flex">
                      <RiLogoutCircleRLine className="text-blue-500" />
                      <span className="text-xs cursor-pointer pl-2">
                        Logout
                      </span>
                    </Link>
                  </span>
                </div>
              </div>
            </header>

            <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-8">
                {/* Projects Card */}
                <div className="bg-white rounded-lg shadow-md cursor-pointer p-6 border-l-4 border-blue-500 hover:shadow-xl transition-shadow ">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      {/* <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg> */}
                      <BsFillFileSpreadsheetFill
                        className="text-blue-600"
                        size={28}
                      />
                    </div>
                    <h3 className="text-lg font-medium">Timesheet</h3>
                  </div>
                  <p className="text-gray-500">
                    Manage and track all company projects
                  </p>
                </div>

                {/* ECO Card */}
                <div className="bg-white rounded-lg shadow-md cursor-pointer p-6 border-l-4 border-green-500 hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="bg-green-100 p-3 rounded-full mr-4">
                      <svg
                        className="w-6 h-6 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium">EOD</h3>
                  </div>
                  <p className="text-gray-500">
                    Environmental compliance operations
                  </p>
                </div>

                {/* WIFI Request Card */}
                <div className="bg-white rounded-lg shadow-md cursor-pointer p-6 border-l-4 border-purple-500 hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="bg-purple-100 p-3 rounded-full mr-4">
                      {/* <svg
                          className="w-6 h-6 text-purple-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                          />
                        </svg> */}
                      <MdOutlineInstallDesktop
                        className="text-purple-600"
                        size={28}
                      />
                    </div>
                    <h3 className="text-lg font-medium">Daily Attendance</h3>
                  </div>
                  <p className="text-gray-500">
                    Submit and manage WIFI access requests
                  </p>
                </div>

                {/* Daily Attendance Card */}
                <div className="bg-white rounded-lg shadow-md cursor-pointer p-6 border-l-4 border-orange-500 hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="bg-orange-100 p-3 rounded-full mr-4">
                      {/* <svg
                        className="w-6 h-6 text-orange-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg> */}
                      <GoProjectSymlink className="text-orange-600" size={28} />
                    </div>
                    <h3 className="text-lg font-medium">Projects</h3>
                  </div>
                  <p className="text-gray-500">
                    Track and manage employee attendance
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-md cursor-pointer p-6 border-l-4 border-blue-900 hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-900 p-3 rounded-full mr-4">
                      {/* <svg
                        className="w-6 h-6 text-red-900"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg> */}
                      <BsPersonWorkspace className="text-blue-100" />
                    </div>
                    <h3 className="text-lg font-medium">WFH Request</h3>
                  </div>
                  <p className="text-gray-500">
                    Track and manage employee attendance
                  </p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default page;
