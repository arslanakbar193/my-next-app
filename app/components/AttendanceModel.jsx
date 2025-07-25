import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaSignInAlt, FaSignOutAlt, FaCoffee, FaUndo } from "react-icons/fa";
import Image from "next/image";

export default function AttendanceModal({ handleClose, animationClass }) {
  const [dateTime, setDateTime] = useState(new Date());
  const [checkInMarked, setCheckInMarked] = useState(false);
  const [checkInTime, setCheckInTime] = useState("");
  const [checkOutMarked, setCheckOutMarked] = useState(false);
  const [checkOutTime, setCheckOutTime] = useState("");

  // Function to handle Check-In
  const handleCheckIn = () => {
    const timeNow = new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

    setCheckInTime(timeNow);
    setCheckInMarked(true);
  };
  const handleCheckOut = () => {
    const timeNow = new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

    setCheckOutTime(timeNow);
    setCheckOutMarked(true);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedDate = dateTime.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const formattedTime = dateTime.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    // second: "numeric",
    hour12: true,
  });
  const dayName = dateTime.toLocaleDateString("en-GB", {
    weekday: "long",
  });

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-40 flex justify-end">
        <div
          className={`h-full w-full sm:max-w-[550px]  bg-white rounded-l-lg p-6 shadow-lg z-50 animate__animated ${animationClass} relative`}
        >
          <div className="flex items-center justify-center  min-h-[calc(100vh-80px)] flex-col">
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-black transition"
            >
              <IoMdClose size={24} className="cursor-pointer" />
            </button>
            <div className="flex justify-center">
              <Image src="/nextbridge_logo.jfif" alt="no-img" width={200} height={200} priority={false} />
            </div>
            <div className="w-full sm:w-[500px] mx-auto">
              <h1 className="p-3 text-3xl font-bold text-center mb-6 bg-gradient-to-r from-purple-900 via-blue-400 to-cyan-500 bg-clip-text text-transparent shadow-sm font-mono">
                {formattedDate} <span className="text-sm">{formattedTime}</span>
              </h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 justify-center">
              <div className="flex flex-col justify-centers items-center">
                <button
                  onClick={checkInMarked ? null : handleCheckIn}
                  disabled={checkInMarked}
                  className={`w-full sm:w-60 flex justify-center items-center gap-1 text-white ${
                    checkInMarked
                      ? "bg-green-600 cursor-not-allowed"
                      : "bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl cursor-pointer"
                  } focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2`}
                >
                  <FaSignInAlt size={18} />
                  Check In{" "}
                  <span className={checkInMarked ? "text-xs" : "muted"}>
                    {checkInMarked ? "(Marked)" : "(Not-Marked)"}
                  </span>
                </button>
                <div
                  className={
                    checkInMarked
                      ? "text-yellow-500 font-bold"
                      : "text-gray-500 font-bold"
                  }
                >
                  {checkInMarked ? checkInTime : "Not-Marked"}
                </div>
              </div>
              <div className="flex flex-col justify-centers items-center">
                <button
                  onClick={checkOutMarked ? null : handleCheckOut}
                  disabled={checkOutMarked}
                  className={`w-full sm:w-60 flex justify-center items-center gap-1 text-white ${
                    checkOutMarked
                      ? "bg-green-600 cursor-not-allowed"
                      : "bg-gradient-to-br from-blue-600 to-purple-500 hover:bg-gradient-to-bl cursor-pointer"
                  } focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2`}
                >
                  <FaSignOutAlt size={18} />
                  Check Out
                  <span className={checkOutMarked ? "text-xs" : "muted"}>
                    {checkOutMarked ? "(Marked)" : "(Not-Marked)"}
                  </span>
                </button>
                <div className={checkOutMarked ? "text-yellow-500 font-bold" : "text-gray-500 font-bold"}>
                  {checkOutMarked ? checkOutTime : "Not-Marked"}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 justify-centerr">
              <div className="flex flex-col justify-centers items-center">
                <button className="w-60 flex justify-center items-center gap-1 text-white bg-gradient-to-br from-cyan-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer">
                  <FaCoffee size={20} /> Break In
                  <span className="muted">(Not-Marked)</span>
                </button>
                <div className="text-gray-500 font-bold">Not-Marked</div>
              </div>
              <div className="flex flex-col justify-centers items-center">
                <button className="w-60 flex justify-center items-center gap-1 text-white bg-gradient-to-br from-blue-600 to-cyan-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer">
                  <FaUndo size={16} /> Break Out
                  <span className="muted">(Not-Marked)</span>
                </button>
                <div className="text-gray-500 font-bold">Not-Marked</div>
              </div>
            </div>
            <hr className="border-t border-amber-300 w-full my-6" />
          </div>
        </div>
      </div>
    </>
  );
}
