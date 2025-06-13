import Link from "next/link";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { BsFillFileSpreadsheetFill, BsPersonWorkspace } from "react-icons/bs";
import { MdOutlineInstallDesktop } from "react-icons/md";
import { GoProjectSymlink } from "react-icons/go";

export default function Dashboard() {
  return (
    <div
      className="w-full min-h-screen bg-gray-50"
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
        {/* <div className="w-full mt-auto bg-transparent">
          <div className="max-w-screen-2xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 py-6">
             
              <div className="bg-white rounded-lg shadow-md cursor-pointer p-6 border-l-4 border-blue-500 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <BsFillFileSpreadsheetFill
                      className="text-blue-600"
                      size={28}
                    />
                  </div>
                  <h3 className="text-lg font-medium">Timesheet</h3>
                </div>
                <p className="text-gray-500">
                  Log daily work hours and view team activity
                </p>
              </div>

             
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
                  Submit End-of-Day status updates
                </p>
              </div>

            
              <div className="bg-white rounded-lg shadow-md cursor-pointer p-6 border-l-4 border-purple-500 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 p-3 rounded-full mr-4">
                    <MdOutlineInstallDesktop
                      className="text-purple-600"
                      size={28}
                    />
                  </div>
                  <h3 className="text-lg font-medium">Daily Attendance</h3>
                </div>
                <p className="text-gray-500">
                  Mark or view daily attendance logs
                </p>
              </div>

              
              <div className="bg-white rounded-lg shadow-md cursor-pointer p-6 border-l-4 border-orange-500 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <GoProjectSymlink className="text-orange-600" size={28} />
                  </div>
                  <h3 className="text-lg font-medium">Projects</h3>
                </div>
                <p className="text-gray-500">
                  Create and manage project workflows
                </p>
              </div>

              
              <div className="bg-white rounded-lg shadow-md cursor-pointer p-6 border-l-4 border-blue-900 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-900 p-3 rounded-full mr-4">
                    <BsPersonWorkspace className="text-blue-100" />
                  </div>
                  <h3 className="text-lg font-medium">WFH Request</h3>
                </div>
                <p className="text-gray-500">
                  Apply for Work-from-Home and track approvals
                </p>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="max-w-screen-2xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 pb-10">
            
            <div className="min-h-[120px] bg-gradient-to-tr from-indigo-500 to-blue-500 text-white rounded-xl shadow-xl p-6 flex flex-col items-center justify-center animate__animated animate__fadeInUp">
              <BsFillFileSpreadsheetFill size={32} />
              <span className="mt-3 text-base font-semibold">Timesheet AI</span>
            </div>

            
            <div className="min-h-[120px] bg-gradient-to-tr from-green-400 to-emerald-600 text-white rounded-xl shadow-xl p-6 flex flex-col items-center justify-center animate__animated animate__fadeInUp animate__delay-1s">
              <svg
                className="w-8 h-8 text-white"
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
              <span className="mt-3 text-base font-semibold">EOD AI</span>
            </div>

            
            <div className="min-h-[120px] bg-gradient-to-tr from-purple-600 to-pink-500 text-white rounded-xl shadow-xl p-6 flex flex-col items-center justify-center animate__animated animate__fadeInUp animate__delay-2s">
              <MdOutlineInstallDesktop size={32} />
              <span className="mt-3 text-base font-semibold">
                Attendance AI
              </span>
            </div>

            
            <div className="min-h-[120px] bg-gradient-to-tr from-yellow-400 to-orange-500 text-white rounded-xl shadow-xl p-6 flex flex-col items-center justify-center animate__animated animate__fadeInUp animate__delay-3s">
              <GoProjectSymlink size={32} />
              <span className="mt-3 text-base font-semibold">Projects AI</span>
            </div>

            
            <div className="min-h-[120px] bg-gradient-to-tr from-blue-800 to-indigo-600 text-white rounded-xl shadow-xl p-6 flex flex-col items-center justify-center animate__animated animate__fadeInUp animate__delay-4s">
              <BsPersonWorkspace size={32} />
              <span className="mt-3 text-base font-semibold">WFH AI</span>
            </div>

            
            <div className="min-h-[120px] bg-gradient-to-tr from-red-500 to-rose-600 text-white rounded-xl shadow-xl p-6 flex flex-col items-center justify-center animate__animated animate__fadeInUp animate__delay-5s">
              <RiLogoutCircleRLine size={32} />
              <span className="mt-3 text-base font-semibold">Smart Logout</span>
            </div>
          </div>
        </div> */}
       <div className="max-w-screen-2xl mx-auto px-4">
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 pb-16">
    {[
      {
        icon: <BsFillFileSpreadsheetFill size={40} />,
        title: 'Timesheet',
        border: 'from-blue-400 to-blue-600',
      },
      {
        icon: <MdOutlineInstallDesktop size={40} />,
        title: 'Attendance',
        border: 'from-purple-400 to-pink-500',
      },
      {
        icon: <GoProjectSymlink size={40} />,
        title: 'Projects',
        border: 'from-orange-400 to-yellow-500',
      },
      {
        icon: <BsPersonWorkspace size={40} />,
        title: 'WFH Request',
        border: 'from-indigo-500 to-purple-700',
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
        title: 'EOD',
        border: 'from-green-400 to-emerald-600',
      },
      {
        icon: <RiLogoutCircleRLine size={40} />,
        title: 'Logout',
        border: 'from-red-400 to-rose-600',
        href: '/', // Link destination
      },
    ].map((item, i) =>
      item.href ? (
        <Link href={item.href} key={i} className="w-full">
          <div
            style={{ animationDelay: `${i * 0.1}s` }}
            className={`rounded-xl p-6 flex flex-col items-center justify-center text-white animate__animated animate__fadeInUp bg-white/5 backdrop-blur-md border border-white/10 shadow-lg hover:scale-110 transition-transform`}
          >
            <div
              className={`w-16 h-16 rounded-full bg-gradient-to-tr ${item.border} flex items-center justify-center mb-4`}
            >
              {item.icon}
            </div>
            <span className="text-xl font-semibold">{item.title}</span>
          </div>
        </Link>
      ) : (
        <div
          key={i}
          style={{ animationDelay: `${i * 0.1}s` }}
          className={`rounded-xl p-6 flex flex-col items-center justify-center text-white animate__animated animate__fadeInUp bg-white/5 backdrop-blur-md border border-white/10 shadow-lg hover:scale-110 transition-transform`}
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
