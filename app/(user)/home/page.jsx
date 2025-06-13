import Link from "next/link";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { BsFillFileSpreadsheetFill, BsPersonWorkspace } from "react-icons/bs";
import { MdOutlineInstallDesktop } from "react-icons/md";
import { GoProjectSymlink } from "react-icons/go";

export default function Dashboard() {
  return (
    <div
      className="w-full min-h-screen bg-gradient-to-br from-[#1d1d2c] via-[#2a2a40] to-[#1a1a2b] text-white relative overflow-hidden"
      style={{
        backgroundColor: "#ebe6e7",
        backgroundImage: "url('/cover-1.webp')",
        backgroundSize: "cover", // ensures full coverage
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col min-h-screen">
        <main className="flex-1">
          {/* Header */}
          <header className="text-gray-600 w-full px-4">
            <div className="max-w-screen-2xl mx-auto flex justify-between items-center pt-10">
              <h1 className="text-3xl font-bold text-white">
                Group Captain{" "}
                <span className="text-sm font-light">| Dashboard</span>
              </h1>
              <div className="flex items-center space-x-2">
                <span
                  className="rounded-full w-8 h-8 flex items-center justify-center"
                  style={{
                    backgroundColor: "#2f190f",
                    border: "1px solid #0000ff70",
                  }}
                >
                  <span className="text-sm text-white">AA</span>
                </span>
                <span className="text-white">Arslan Akbar</span>
              </div>
            </div>
            <div className="max-w-screen-2xl mx-auto flex justify-between items-center pb-2 px-0">
              <h1 className="text-[0px]">Dashboard</h1>
              <Link
                href="/"
                className="flex items-center text-xs  bg-white rounded p-1 "
                style={{ color: "#2f190f" }}
              >
                <RiLogoutCircleRLine className="mr-1" />
                <span className="text-[10px]">Logout</span>
              </Link>
            </div>
          </header>
        </main>

        {/* Cards Section at the Bottom */}
        <div className="max-w-screen-2xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 pb-16">
            {[
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
                href: "/attendance",
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
              },
              {
                icon: <RiLogoutCircleRLine size={40} />,
                title: "Logout",
                border: "from-red-400 to-rose-600",
                href: "/", // Link destination
              },
            ].map((item, i) =>
              item.href ? (
                <Link href={item.href} key={i} className="w-full">
                  <div
                    style={{ animationDelay: `${i * 0.1}s` }}
                    className={`rounded-xl p-6 flex flex-col items-center justify-center text-white animate__animated animate__fadeInUp bg-white/5 backdrop-blur-md border border-white/10 shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer`}
                  >
                    <div
                      className={`w-16 h-16 rounded-full bg-gradient-to-tr ${item.border} flex items-center justify-center mb-4`}
                    >
                      <div className="w-10 h-10 flex items-center justify-center">
                        {item.icon}
                      </div>
                    </div>
                    <span className="text-xl font-semibold">{item.title}</span>
                  </div>
                </Link>
              ) : (
                <div
                  key={i}
                  style={{ animationDelay: `${i * 0.1}s` }}
                  className={`rounded-xl p-6 flex flex-col items-center justify-center text-white animate__animated animate__fadeInUp bg-white/5 backdrop-blur-md border border-white/10 shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer`}
                >
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-tr ${item.border} flex items-center justify-center mb-4`}
                  >
                    {item.icon}
                  </div>
                  <span className="text-xl font-semibold">{item.title}</span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
