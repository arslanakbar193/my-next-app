import React, { useState } from "react";
import { BsCupHot, BsArrowReturnLeft } from "react-icons/bs";
import { LuMapPinCheckInside } from "react-icons/lu";
import { CiLogout } from "react-icons/ci";
import toast, { Toaster } from "react-hot-toast";

const AttendanceNewModule = () => {
  const [attendance, setAttendance] = useState({
    checkIn: null,
    breakOut: null,
    breakIn: null,
    checkOut: null,
  });

  const [popup, setPopup] = useState({ visible: false, type: "" });

  const today = new Date().toLocaleDateString();

  const handleOpenPopup = (type) => {
    setPopup({ visible: true, type });
  };

  const handleConfirm = () => {
    const currentTime = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    setAttendance((prev) => ({
      ...prev,
      [popup.type]: currentTime,
    }));

    // ✅ Show toast notification
    toast.success(
      `${popup.type.replace(/([A-Z])/g, " $1")} marked at ${currentTime}`,
      {
        position: "top-right",
        style: {
          borderRadius: "10px",
          background: "#fff7ed",
          color: "#92400e",
          border: "1px solid #f97316",
        },
        icon: "✅",
      }
    );

    setPopup({ visible: false, type: "" });
  };

  const handleCancel = () => {
    setPopup({ visible: false, type: "" });
  };

  const buttons = [
    {
      key: "checkIn",
      label: "Check-In",
      icon: <LuMapPinCheckInside size={28} className="text-orange-500" />,
    },
    {
      key: "checkOut",
      label: "Check-Out",
      icon: <CiLogout size={28} className="text-orange-500" />,
    },
    {
      key: "breakIn",
      label: "Break-In",
      icon: <BsArrowReturnLeft size={28} className="text-orange-500" />,
    },
    {
      key: "breakOut",
      label: "Break-Out",
      icon: <BsCupHot size={28} className="text-orange-500" />,
    },
  ];

  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg min-h-[calc(100vh-15%)] justify-center">
      <p className="text-xl mb-12 font-bold">📅 Today: {today}</p>

      {/* Attendance Cards in One Row */}
      <div className="flex flex-wrap justify-center gap-6 w-full max-w-8xl">
        {buttons.map((item) => (
          <div
            key={item.key}
            onClick={() => handleOpenPopup(item.key)}
            className="group w-80 border-orange-700 bg-gradient-to-br from-white to-orange-50 shadow-md hover:shadow-2xl rounded-2xl p-8 text-center cursor-pointer transform hover:-translate-y-2 transition-all duration-300 border hover:border-orange-400"
          >
            <div className="flex flex-col items-center space-y-3">
              <div className="p-3 bg-orange-100 rounded-full group-hover:bg-orange-200 transition">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-orange-600">
                {item.label}
              </h3>
              <span className="text-gray-400">
                {attendance[item.key] ? attendance[item.key] : "Not marked"}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {popup.visible && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-10 text-center w-120">
            <h3 className="text-lg font-semibold mb-4 capitalize">
              Mark {popup.type.replace(/([A-Z])/g, " $1")}
            </h3>
            <p className="text-gray-600 mb-6">
              Do you want to mark your {popup.type} time?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleConfirm}
                className="text-sm px-5 py-2 rounded-full font-medium bg-orange-200 text-yellow-800 cursor-pointer border border-transparent hover:bg-white hover:text-black hover:border-orange-400 transition"
              >
                Yes, Mark
              </button>
              <button
                onClick={handleCancel}
                className="text-sm px-5 py-2 rounded-full font-medium bg-white text-yellow-800 cursor-pointer border border-orange-300 hover:bg-orange-200 hover:shadow-md transition-all"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast Container */}
      <Toaster />
    </div>
  );
};

export default AttendanceNewModule;
