"use client";
import { useState } from "react";
import {
  BsFillFileSpreadsheetFill,
  BsPersonWorkspace,
} from "react-icons/bs";
import { MdOutlineInstallDesktop } from "react-icons/md";
import { GoProjectSymlink } from "react-icons/go";
import { RiLogoutCircleRLine } from "react-icons/ri";
import Header from "@/app/components/Header";
import AttendanceModal from "@/app/components/AttendanceModel";
import WFHModal from "@/app/components/WFHModel";
import DashboardCard from "@/app/components/DashboardCard";

export default function Dashboard() {
  const [showAttendanceModal, setShowAttendanceModal] = useState(false);
  const [showWFHModal, setShowWFHModal] = useState(false);
  const [animationClass, setAnimationClass] = useState("animate__slideInRight");

  const handleCloseAttendance = () => {
    setAnimationClass("animate__slideOutRight");
    setTimeout(() => {
      setShowAttendanceModal(false);
      setAnimationClass("animate__slideInRight");
    }, 500);
  };

  const cards = [
    {
      icon: <BsFillFileSpreadsheetFill size={40} />,
      title: "Timesheet",
      border: "from-blue-400 to-blue-600",
      href: "/timesheet",
    },
    {
      icon: <MdOutlineInstallDesktop size={40} />,
      title: "Attendance",
      border: "from-purple-400 to-pink-500",
      onClick: () => setShowAttendanceModal(true),
    },
    {
      icon: <GoProjectSymlink size={40} />,
      title: "Projects",
      border: "from-orange-400 to-yellow-500",
      href: "/projects",
    },
    {
      icon: <BsPersonWorkspace size={40} />,
      title: "WFH Request",
      border: "from-indigo-500 to-purple-700",
      onClick: () => setShowWFHModal(true),
    },
    {
      icon: (
        <svg
          className="w-10 h-10 text-white"
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
      ),
      title: "EOD",
      border: "from-green-400 to-emerald-600",
      href: "/eod",
    },
    {
      icon: <RiLogoutCircleRLine size={40} />,
      title: "Logout",
      border: "from-red-400 to-rose-600",
      href: "/",
    },
  ];

  return (
    <div
      className="w-full min-h-screen bg-[#F66135]/20 relative overflow-hidden bg-cover bg-bottom bg-no-repeat"
      style={{ backgroundImage: "url('/cover-1.webp')" }}
    >
      {/* Top Header */}
      <Header />

      {/* Main section */}
      <div className="flex flex-col flex-1 min-h-[calc(100vh-80px)]">
        <main className="flex flex-1 items-end">
          <div className="w-full max-w-screen-2xl mx-auto px-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 pb-16">
              {cards.map((card, index) => (
                <DashboardCard key={index} {...card} index={index} />
              ))}
            </div>
          </div>
        </main>
      </div>

      {/* Modals */}
      {showAttendanceModal && (
        <AttendanceModal
          handleClose={handleCloseAttendance}
          animationClass={animationClass}
        />
      )}
      {showWFHModal && <WFHModal onClose={() => setShowWFHModal(false)} />}
    </div>
  );
}
