"use client";
import React, { useState } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import {
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";
import "react-datepicker/dist/react-datepicker.css";

// import "@/styles/simplebar.css"; // your custom CSS (thumb size, etc.)
import "react-datepicker/dist/react-datepicker.css";
const ACTIVITY_TYPES = [
  { value: "project", label: "Project Activity" },
  { value: "general", label: "General Activity" },
];

const PROJECT_OPTIONS = [
  { value: "project1", label: "Website Redesign" },
  { value: "project2", label: "Mobile App Development" },
];

const TARGET_OPTIONS = [
  { value: "target1", label: "Frontend Implementation" },
  { value: "target2", label: "Backend API" },
];

const PROJECT_ACTIVITIES = [
  { value: "development", label: "Development" },
  { value: "testing", label: "Testing" },
  { value: "meeting", label: "Client Meeting" },
];

const GENERAL_ACTIVITIES = [
  { value: "training", label: "Training" },
  { value: "documentation", label: "Documentation" },
];

const FEATURE_OPTIONS = [
  { value: "auth", label: "Authentication" },
  { value: "dashboard", label: "Admin Dashboard" },
];

const initialActivity = {
  type: "project",
  date: new Date(),
  project: null,
  target: null,
  activity: null,
  hours: 0,
  minutes: 0,
  comments: "",
  activityLog: "",
  typeOption: null,
  feature: null,
};
const scrollbarStyles = `
  
  .sleek-scrollbar::-webkit-scrollbar {
    width: 8px;
  }

  .sleek-scrollbar::-webkit-scrollbar-track {
    background: linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%);
    border-radius: 10px;
    border: 1px solid #e2e8f0;
  }

  .sleek-scrollbar::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #fdba74 0%, #fb923c 100%);
    border-radius: 10px;
    border: 1px solid #fed7aa;
    height: 40px !important;
    min-height: 40px;
    box-shadow: 0 2px 4px rgba(251, 146, 60, 0.2);
  }

  .sleek-scrollbar::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(180deg, #fb923c 0%, #f97316 100%);
    box-shadow: 0 4px 8px rgba(251, 146, 60, 0.3);
  }

  .sleek-scrollbar::-webkit-scrollbar-thumb:active {
    background: linear-gradient(180deg, #ea580c 0%, #c2410c 100%);
  }

  /* Timeline specific beautiful scrollbar */
  .timeline-scrollbar::-webkit-scrollbar {
    width: 12px;
  }

  .timeline-scrollbar::-webkit-scrollbar-track {
    background: linear-gradient(180deg, #fffbeb 0%, #fef3c7 100%);
    border-radius: 12px;
    border: 2px solid #fed7aa;
    margin: 10px 0;
  }

  .timeline-scrollbar::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #f59e0b 0%, #d97706 50%, #b45309 100%);
    border-radius: 12px;
    border: 2px solid #fcd34d;
    height: 60px !important;
    min-height: 60px;
    box-shadow: 
      inset 0 2px 4px rgba(255, 255, 255, 0.3),
      0 2px 8px rgba(180, 83, 9, 0.4);
  }

  .timeline-scrollbar::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(180deg, #d97706 0%, #b45309 50%, #92400e 100%);
    box-shadow: 
      inset 0 2px 4px rgba(255, 255, 255, 0.4),
      0 4px 12px rgba(180, 83, 9, 0.5);
  }

  /* Firefox */
  .sleek-scrollbar {
    scrollbar-width: thin;
    scrollbar-color: #fdba74 #f1f5f9;
  }

  .timeline-scrollbar {
    scrollbar-width: thin;
    scrollbar-color: #f59e0b #fffbeb;
  }

  /* Reports specific scrollbar */
  .reports-scrollbar::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #fed7aa 0%, #fdba74 100%);
    border-radius: 8px;
    border: 1px solid #fdba74;
  }
`;

// Fixed Timeline component with centered alignment and shortened tooltips
const Timeline = ({
  reports = [],
  selectedDate = null,
  onDateClick = () => {},
}) => {
  const totalMinutes = reports.reduce((acc, r) => {
    const [h, m] = r.total.split(":").map(Number);
    return acc + h * 60 + m;
  }, 0);

  const totalLabel = `${String(Math.floor(totalMinutes / 60)).padStart(
    2,
    "0"
  )}:${String(totalMinutes % 60).padStart(2, "0")}`;

  // Function to shorten date format
  const getShortDate = (dateStr) => {
    const date = new Date(dateStr);
    const weekday = date.toLocaleDateString("en-US", { weekday: "short" });
    const day = date.getDate();
    const month = date.toLocaleDateString("en-US", { month: "short" });
    return `${weekday} ${day}, ${month}`;
  };

  // Group reports by week
  const groupReportsByWeek = (reports) => {
    const weeks = [];
    let currentWeek = [];

    reports.forEach((report, index) => {
      currentWeek.push(report);

      // Start a new week after 7 days or at the end
      if (currentWeek.length === 7 || index === reports.length - 1) {
        weeks.push([...currentWeek]);
        currentWeek = [];
      }
    });

    return weeks;
  };

  const weeklyReports = groupReportsByWeek(reports);

  return (
    <>
      <style>{scrollbarStyles}</style>
      <div className="relative w-full max-w-xl mx-auto">
        {/* Vertical line - centered properly */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-200 via-orange-300 to-orange-200 transform -translate-x-1/2"></div>

        <div className="flex flex-col timeline-scrollbar sleek-scrollbar max-h-96 overflow-y-auto">
          {reports.length === 0 ? (
            <div className="py-6 text-center text-gray-500">
              No timeline data
            </div>
          ) : (
            weeklyReports.map((week, weekIndex) => (
              <div key={weekIndex} className="mb-6">
                {/* Week Separator */}
                {weeklyReports.length > 1 && (
                  <div className="flex items-center justify-center my-4">
                    <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-medium">
                      Week {weekIndex + 1}
                    </div>
                  </div>
                )}

                {week.map((r, i) => {
                  const isLeft = (weekIndex * 7 + i) % 2 === 0;
                  const weekday = new Date(r.date).toLocaleDateString("en-US", {
                    weekday: "short",
                  });

                  return (
                    <div
                      key={`${r.date}-${i}`}
                      className={`flex items-center w-full py-3 min-h-[70px]`}
                    >
                      {/* Left side */}
                      <div className="w-1/2 text-right pr-4">
                        {isLeft && (
                          <div className="inline-block text-right">
                            <h3 className="text-xs font-semibold text-gray-600">
                              {weekday}
                            </h3>
                            <p className="text-xs text-gray-500 font-medium">
                              {r.total}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Dot with icon - perfectly centered */}
                      <div className="z-10 flex-shrink-0 px-2 group relative">
                        <div
                          onClick={() => onDateClick(r.date)}
                          className={`w-8 h-8 rounded-full border-2 border-white cursor-pointer transition-all hover:scale-110 flex items-center justify-center shadow-md
                            ${
                              selectedDate === r.date
                                ? "bg-green-400 scale-110 shadow-lg"
                                : "bg-gradient-to-br from-gray-300 to-gray-900 hover:from-gray-900 hover:to-gray-500"
                            }
                          `}
                        >
                          <CalendarIcon className="w-4 h-4 text-white" />
                        </div>

                        {/* Custom tooltip with shortened date */}
                        <span className="absolute left-1/2 transform -translate-x-1/2 -top-8 bg-gray-900 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap z-20 shadow-lg border border-gray-700">
                          {getShortDate(r.date)}
                          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-6px] w-3 h-3 bg-gray-900 rotate-45 border-r border-b border-gray-700"></div>
                        </span>
                      </div>

                      {/* Right side */}
                      <div className="w-1/2 text-left pl-4">
                        {!isLeft && (
                          <div className="inline-block text-left">
                            <h3 className="text-xs font-semibold text-gray-600">
                              {weekday}
                            </h3>
                            <p className="text-xs text-gray-500 font-medium">
                              {r.total}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            ))
          )}

          {/* Total row */}
          {reports.length > 0 && (
            <div className="flex items-center w-full py-4 min-h-[80px] mt-4 border-t border-orange-200">
              <div className="w-1/2"></div>
              <div className="z-10 flex-shrink-0 px-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 border-2 border-white flex items-center justify-center shadow-md">
                  <CalendarIcon className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="w-1/2 text-left pl-4">
                <h3 className="text-sm font-semibold text-orange-600">Total</h3>
                <p className="text-lg font-bold text-orange-600">
                  {totalLabel}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

// Pagination Component
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [];
  const maxVisiblePages = 5;

  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  if (endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div className="flex items-center justify-center space-x-2 mt-6">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`p-2 rounded-lg border transition-all ${
          currentPage === 1
            ? "bg-gray-100 text-gray-500 cursor-not-allowed"
            : "bg-white text-black border-gray-700 hover:bg-orange-50 hover:shadow-md"
        }`}
      >
        <ChevronLeftIcon className="w-5 h-5" />
      </button>

      {startPage > 1 && (
        <>
          <button
            onClick={() => onPageChange(1)}
            className="px-3 py-2 rounded-lg border border-gray-700 bg-white text-yellow-400 hover:bg-orange-50 transition-all"
          >
            1
          </button>
          {startPage > 2 && <span className="px-2 text-black">...</span>}
        </>
      )}

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 rounded-lg border font-medium transition-all ${
            currentPage === page
              ? "bg-gradient-to-br from-gray-800 to-gray-900 text-white border-gray-300 shadow-lg"
              : "bg-white text-gray-700 border-gary-200 hover:bg-gary-50 hover:shadow-md"
          }`}
        >
          {page}
        </button>
      ))}

      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && (
            <span className="px-2 text-gray-700">...</span>
          )}
          <button
            onClick={() => onPageChange(totalPages)}
            className="px-3 py-2 rounded-lg border border-gary-700 bg-white text-gary-800 hover:bg-orange-50 transition-all"
          >
            {totalPages}
          </button>
        </>
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`p-2 rounded-lg border transition-all ${
          currentPage === totalPages
            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
            : "bg-white text-gray-400 border-gray-300 hover:bg-orange-50 hover:shadow-md"
        }`}
      >
        <ChevronRightIcon className="w-5 h-5" />
      </button>
    </div>
  );
};

const TimeSheetCard = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const handleDateClick = (date) => setSelectedDate(date);
  const [activities, setActivities] = useState([{ ...initialActivity }]);
  const [dateRange, setDateRange] = useState({ start: null, end: null });
  const [filteredReports, setFilteredReports] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const reportsPerPage = 5;

  const allReports = [
    {
      date: "2025-09-01",
      label: "Monday, 01-09-2025",
      fullLabel: "Monday 1, September",
      total: "08:00",
    },
    {
      date: "2025-09-02",
      label: "Tuesday, 02-09-2025",
      fullLabel: "Tuesday 2, September",
      total: "08:00",
    },
    {
      date: "2025-09-03",
      label: "Wednesday, 03-09-2025",
      fullLabel: "Wednesday 3, September",
      total: "08:00",
    },
    {
      date: "2025-09-04",
      label: "Thursday, 04-09-2025",
      fullLabel: "Thursday 4, September",
      total: "08:00",
    },
    {
      date: "2025-09-05",
      label: "Friday, 05-09-2025",
      fullLabel: "Friday 5, September",
      total: "08:00",
    },
    {
      date: "2025-09-08",
      label: "Monday, 08-09-2025",
      fullLabel: "Monday 8, September",
      total: "08:00",
    },
    {
      date: "2025-09-09",
      label: "Tuesday, 09-09-2025",
      fullLabel: "Tuesday 9, September",
      total: "08:00",
    },
    {
      date: "2025-09-10",
      label: "Wednesday, 10-09-2025",
      fullLabel: "Wednesday 10, September",
      total: "08:00",
    },
    {
      date: "2025-09-11",
      label: "Thursday, 11-09-2025",
      fullLabel: "Thursday 11, September",
      total: "08:00",
    },
    {
      date: "2025-09-12",
      label: "Friday, 12-09-2025",
      fullLabel: "Friday 12, September",
      total: "08:00",
    },
    {
      date: "2025-09-15",
      label: "Monday, 15-09-2025",
      fullLabel: "Monday 15, September",
      total: "07:30",
    },
    {
      date: "2025-09-16",
      label: "Tuesday, 16-09-2025",
      fullLabel: "Tuesday 16, September",
      total: "06:45",
    },
    {
      date: "2025-09-17",
      label: "Wednesday, 17-09-2025",
      fullLabel: "Wednesday 17, September",
      total: "08:00",
    },
    {
      date: "2025-09-18",
      label: "Thursday, 18-09-2025",
      fullLabel: "Thursday 18, September",
      total: "08:00",
    },
    {
      date: "2025-09-19",
      label: "Friday, 19-09-2025",
      fullLabel: "Friday 19, September",
      total: "08:00",
    },
    {
      date: "2025-09-22",
      label: "Monday, 22-09-2025",
      fullLabel: "Monday 22, September",
      total: "08:00",
    },
    {
      date: "2025-09-23",
      label: "Tuesday, 23-09-2025",
      fullLabel: "Tuesday 23, September",
      total: "07:15",
    },
    {
      date: "2025-09-24",
      label: "Wednesday, 24-09-2025",
      fullLabel: "Wednesday 24, September",
      total: "08:30",
    },
    {
      date: "2025-09-25",
      label: "Thursday, 25-09-2025",
      fullLabel: "Thursday 25, September",
      total: "07:45",
    },
    {
      date: "2025-09-26",
      label: "Friday, 26-09-2025",
      fullLabel: "Friday 26, September",
      total: "08:00",
    },
  ];

  const handleFilter = () => {
    if (dateRange.start && dateRange.end) {
      const start = new Date(dateRange.start);
      const end = new Date(dateRange.end);

      const filtered = allReports.filter((r) => {
        const reportDate = new Date(r.date);
        reportDate.setHours(0, 0, 0, 0);
        start.setHours(0, 0, 0, 0);
        end.setHours(0, 0, 0, 0);
        return reportDate >= start && reportDate <= end;
      });

      setFilteredReports(filtered);
      setCurrentPage(1); // Reset to first page when filtering
    } else {
      setFilteredReports(null);
      setCurrentPage(1);
    }
  };

  const reportsToShow = filteredReports || allReports;

  // Pagination logic
  const indexOfLastReport = currentPage * reportsPerPage;
  const indexOfFirstReport = indexOfLastReport - reportsPerPage;
  const currentReports = reportsToShow.slice(
    indexOfFirstReport,
    indexOfLastReport
  );
  const totalPages = Math.ceil(reportsToShow.length / reportsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Scroll to top of reports section
    const reportsSection = document.querySelector(".reports-scrollbar");
    if (reportsSection) {
      reportsSection.scrollTop = 0;
    }
  };

  const totalTime = reportsToShow.reduce((acc, r) => {
    const [h, m] = r.total.split(":").map(Number);
    acc += h * 60 + m;
    return acc;
  }, 0);

  const totalHour = String(Math.floor(totalTime / 60)).padStart(2, "0");
  const totalMinute = String(totalTime % 60).padStart(2, "0");

  const [employee, setEmployee] = useState({
    name: "",
    id: "",
    email: "",
    designation: "",
    projectname: "",
    activitydescription: "",
  });

  const handleEmployeeChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prev) => ({ ...prev, [name]: value }));
  };

  const handleActivityTypeChange = (index, selected) => {
    const updated = [...activities];
    updated[index].type = selected.value;
    setActivities(updated);
  };

  const handleFieldChange = (index, field, value) => {
    const updated = [...activities];
    updated[index][field] = value;
    setActivities(updated);
  };

  const handleTimeChange = (index, field, value) => {
    const numValue = Math.max(0, parseInt(value) || 0);
    if (field === "minutes" && numValue > 59) return;
    const updated = [...activities];
    updated[index][field] = numValue;
    setActivities(updated);
  };

  const removeActivity = (index) => {
    if (activities.length <= 1) return;
    const updated = activities.filter((_, i) => i !== index);
    setActivities(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", { employee, activities });
  };

  return (
    <div className="min-h-screen">
      <div className="w-full mx-auto space-y-8">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow-md p-6 space-y-8"
        >
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Employee Information
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
              <div className="relative mb-0">
                <input
                  type="text"
                  name="name"
                  value={employee.name}
                  onChange={handleEmployeeChange}
                  required
                  className="peer w-full border-b-1 border-gray-300 bg-transparent pt-5 pb-2 text-gray-900 placeholder-transparent focus:border-orange-200 focus:outline-none"
                  placeholder="Full Name"
                />
                <label
                  htmlFor="name"
                  className="absolute left-0 top-0.5 text-gray-500 text-xs transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-0.5 peer-focus:text-sm peer-focus:text-orange-300"
                >
                  Full Name
                </label>
              </div>

              <div className="relative mb-0">
                <input
                  type="text"
                  name="id"
                  value={employee.id}
                  onChange={handleEmployeeChange}
                  required
                  className="peer w-full border-b-1 border-gray-300 bg-transparent pt-5 pb-2 text-gray-900 placeholder-transparent focus:border-orange-200 focus:outline-none"
                  placeholder="Employee ID"
                />
                <label
                  htmlFor="id"
                  className="absolute left-0 top-0.5 text-gray-500 text-xs transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-0.5 peer-focus:text-sm peer-focus:text-orange-300"
                >
                  Employee ID
                </label>
              </div>

              <div className="relative mb-0">
                <input
                  type="email"
                  name="email"
                  value={employee.email}
                  onChange={handleEmployeeChange}
                  required
                  className="peer w-full border-b-1 border-gray-300 bg-transparent pt-5 pb-2 text-gray-900 placeholder-transparent focus:border-orange-200 focus:outline-none"
                  placeholder="Email"
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 top-0.5 text-gray-500 text-xs transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-0.5 peer-focus:text-sm peer-focus:text-orange-300"
                >
                  Email
                </label>
              </div>

              <div className="relative mb-0">
                <input
                  type="text"
                  name="designation"
                  value={employee.designation}
                  onChange={handleEmployeeChange}
                  required
                  className="peer w-full border-b-1 border-gray-300 bg-transparent pt-5 pb-2 text-gray-900 placeholder-transparent focus:border-orange-200 focus:outline-none"
                  placeholder="Designation"
                />
                <label
                  htmlFor="designation"
                  className="absolute left-0 top-0.5 text-gray-500 text-xs transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-0.5 peer-focus:text-sm peer-focus:text-orange-300"
                >
                  Designation
                </label>
              </div>
            </div>
          </section>

          <section>
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-xl font-semibold text-gray-800">
                Time Entries
              </h2>

              {activities.map((activity, index) => (
                <button
                  key={index}
                  type="button"
                  className="flex items-center gap-2  text-yellow-800 px-4 py-2 transition  border-b border-b-gray-300  hover:border-orange-300"
                >
                  <span className="whitespace-nowrap text-xs">Log Time</span>

                  <div className="flex items-center gap-2 bg-white rounded-md px-0 py-1 ">
                    <input
                      type="number"
                      min="0"
                      max="24"
                      value={activity.hours}
                      onChange={(e) =>
                        handleTimeChange(index, "hours", e.target.value)
                      }
                      className="w-10 text-center text-sm text-gray-900 hover:border-orange-200  outline-none  border border-gray-300 rounded"
                      placeholder="HH"
                    />
                    <span className="text-orange-200 font-semibold">:</span>
                    <input
                      type="number"
                      min="0"
                      max="59"
                      value={activity.minutes}
                      onChange={(e) =>
                        handleTimeChange(index, "minutes", e.target.value)
                      }
                      className="w-10 text-center rounded  text-sm text-gray-900 hover:border-orange-200 outline-none border border-gray-300 "
                      placeholder="MM"
                    />
                  </div>
                </button>
              ))}
            </div>

            {activities.map((activity, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-4 mb-4 relative"
              >
                {activities.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeActivity(index)}
                    className="absolute top-3 right-3 text-red-500 hover:text-red-700"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">
                      Project Orientation
                    </label>
                    <Select
                      options={ACTIVITY_TYPES}
                      value={ACTIVITY_TYPES.find(
                        (opt) => opt.value === activity.type
                      )}
                      onChange={(selected) =>
                        handleActivityTypeChange(index, selected)
                      }
                      classNamePrefix="react-select"
                      required
                      styles={{
                        control: (base, state) => ({
                          ...base,
                          border: "none",
                          fontSize: 14,
                          color: "#d1d5db",
                          border: `1px solid ${
                            state.isFocused ? "#ffd7a8" : "#d1d5db"
                          }`,
                          boxShadow: "none",
                          borderRadius: 4,
                          paddingBottom: 2,
                          paddingTop: 2,
                          "&:hover": {
                            border: "1px solid #ffd7a8",
                          },
                        }),
                        option: (base, state) => ({
                          ...base,
                          backgroundColor: state.isFocused
                            ? "#ffedd5"
                            : "white",
                          color: state.isFocused ? "#ca3500" : "#374151",
                          "&:active": {
                            backgroundColor: "#fdba74",
                          },
                        }),
                        dropdownIndicator: (base, state) => ({
                          ...base,
                          color: state.isFocused ? "#ffd7a8" : "#9ca3af",
                          "&:hover": {
                            color: "#ffd7a8",
                          },
                        }),
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">
                      Activity Type
                    </label>
                    <div className="flex gap-2">
                      <Select
                        options={GENERAL_ACTIVITIES}
                        value={activity.target}
                        onChange={(selected) =>
                          handleFieldChange(index, "target", selected)
                        }
                        className="react-select-container flex-1"
                        classNamePrefix="react-select"
                        placeholder="Select target"
                        styles={{
                          control: (base, state) => ({
                            ...base,
                            border: "none",
                            fontSize: 14,
                            color: "#d1d5db",
                            border: `1px solid ${
                              state.isFocused ? "#ffd7a8" : "#d1d5db"
                            }`,
                            boxShadow: "none",
                            borderRadius: 4,
                            paddingBottom: 2,
                            paddingTop: 2,
                            "&:hover": {
                              border: "1px solid #ffd7a8",
                            },
                          }),
                          option: (base, state) => ({
                            ...base,
                            backgroundColor: state.isFocused
                              ? "#ffedd5"
                              : "white",
                            color: state.isFocused ? "#ca3500" : "#374151",
                            "&:active": {
                              backgroundColor: "#fdba74",
                            },
                          }),
                          dropdownIndicator: (base, state) => ({
                            ...base,
                            color: state.isFocused ? "#ffd7a8" : "#9ca3af",
                            "&:hover": {
                              color: "#ffd7a8",
                            },
                          }),
                        }}
                      />
                    </div>
                  </div>
                </div>

                {activity.type === "project" ? (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-500 mb-1">
                          Project Name
                        </label>
                        <Select
                          options={PROJECT_OPTIONS}
                          value={activity.project}
                          onChange={(selected) =>
                            handleFieldChange(index, "project", selected)
                          }
                          className="react-select-container"
                          classNamePrefix="react-select"
                          placeholder="Select project"
                          required
                          styles={{
                            control: (base, state) => ({
                              ...base,
                              border: "none",
                              fontSize: 14,
                              color: "#d1d5db",
                              border: `1px solid ${
                                state.isFocused ? "#ffd7a8" : "#d1d5db"
                              }`,
                              boxShadow: "none",
                              borderRadius: 4,
                              paddingBottom: 2,
                              paddingTop: 2,
                              "&:hover": {
                                border: "1px solid #ffd7a8",
                              },
                            }),
                            option: (base, state) => ({
                              ...base,
                              backgroundColor: state.isFocused
                                ? "#ffedd5"
                                : "white",
                              color: state.isFocused ? "#ca3500" : "#374151",
                              "&:active": {
                                backgroundColor: "#fdba74",
                              },
                            }),
                            dropdownIndicator: (base, state) => ({
                              ...base,
                              color: state.isFocused ? "#ffd7a8" : "#9ca3af",
                              "&:hover": {
                                color: "#ffd7a8",
                              },
                            }),
                          }}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-500 mb-1">
                          Target
                        </label>
                        <div className="flex gap-2">
                          <Select
                            options={TARGET_OPTIONS}
                            value={activity.target}
                            onChange={(selected) =>
                              handleFieldChange(index, "target", selected)
                            }
                            className="react-select-container flex-1"
                            classNamePrefix="react-select"
                            placeholder="Select target"
                            styles={{
                              control: (base, state) => ({
                                ...base,
                                border: "none",
                                fontSize: 14,
                                color: "#d1d5db",
                                border: `1px solid ${
                                  state.isFocused ? "#ffd7a8" : "#d1d5db"
                                }`,
                                boxShadow: "none",
                                borderRadius: 4,
                                paddingBottom: 2,
                                paddingTop: 2,
                                "&:hover": {
                                  border: "1px solid #ffd7a8",
                                },
                              }),
                              option: (base, state) => ({
                                ...base,
                                backgroundColor: state.isFocused
                                  ? "#ffedd5"
                                  : "white",
                                color: state.isFocused ? "#ca3500" : "#374151",
                                "&:active": {
                                  backgroundColor: "#fdba74",
                                },
                              }),
                              dropdownIndicator: (base, state) => ({
                                ...base,
                                color: state.isFocused ? "#ffd7a8" : "#9ca3af",
                                "&:hover": {
                                  color: "#ffd7a8",
                                },
                              }),
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-500 mb-1">
                          Select Activity
                        </label>
                        <Select
                          options={PROJECT_ACTIVITIES}
                          value={activity.activity}
                          onChange={(selected) =>
                            handleFieldChange(index, "activity", selected)
                          }
                          className="react-select-container"
                          classNamePrefix="react-select"
                          placeholder="Select activity"
                          required
                          styles={{
                            control: (base, state) => ({
                              ...base,
                              border: "none",
                              fontSize: 14,
                              color: "#d1d5db",
                              border: `1px solid ${
                                state.isFocused ? "#ffd7a8" : "#d1d5db"
                              }`,
                              boxShadow: "none",
                              borderRadius: 4,
                              paddingBottom: 2,
                              paddingTop: 2,
                              "&:hover": {
                                border: "1px solid #ffd7a8",
                              },
                            }),
                            option: (base, state) => ({
                              ...base,
                              backgroundColor: state.isFocused
                                ? "#ffedd5"
                                : "white",
                              color: state.isFocused ? "#ca3500" : "#374151",
                              "&:active": {
                                backgroundColor: "#fdba74",
                              },
                            }),
                            dropdownIndicator: (base, state) => ({
                              ...base,
                              color: state.isFocused ? "#ffd7a8" : "#9ca3af",
                              "&:hover": {
                                color: "#ffd7a8",
                              },
                            }),
                          }}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-500 mb-1">
                          Feature
                        </label>
                        <Select
                          options={FEATURE_OPTIONS}
                          value={activity.feature}
                          onChange={(selected) =>
                            handleFieldChange(index, "feature", selected)
                          }
                          className="react-select-container"
                          classNamePrefix="react-select"
                          placeholder="Select feature"
                          styles={{
                            control: (base, state) => ({
                              ...base,
                              border: "none",
                              fontSize: 14,
                              color: "#d1d5db",
                              border: `1px solid ${
                                state.isFocused ? "#ffd7a8" : "#d1d5db"
                              }`,
                              boxShadow: "none",
                              borderRadius: 4,
                              paddingBottom: 2,
                              paddingTop: 2,
                              "&:hover": {
                                border: "1px solid #ffd7a8",
                              },
                            }),
                            option: (base, state) => ({
                              ...base,
                              backgroundColor: state.isFocused
                                ? "#ffedd5"
                                : "white",
                              color: state.isFocused ? "#ca3500" : "#374151",
                              "&:active": {
                                backgroundColor: "#fdba74",
                              },
                            }),
                            dropdownIndicator: (base, state) => ({
                              ...base,
                              color: state.isFocused ? "#ffd7a8" : "#9ca3af",
                              "&:hover": {
                                color: "#ffd7a8",
                              },
                            }),
                          }}
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="relative mb-0">
                        <input
                          type="text"
                          name="projectname"
                          value={employee.projectname}
                          onChange={handleEmployeeChange}
                          required
                          className="peer w-full border-b-1 border-gray-300 bg-transparent pt-5 pb-2 text-gray-900 placeholder-transparent focus:border-orange-200 focus:outline-none"
                          placeholder="Project Name"
                        />
                        <label
                          htmlFor="projectname"
                          className="absolute left-0 top-0.5 text-gray-500 text-xs transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-0.5 peer-focus:text-sm peer-focus:text-orange-300"
                        >
                          Project Name
                        </label>
                      </div>
                      <div className="relative mb-0">
                        <input
                          type="text"
                          name="activitydescription"
                          value={employee.activitydescription}
                          onChange={handleEmployeeChange}
                          required
                          className="peer w-full border-b-1 border-gray-300 bg-transparent pt-5 pb-2 text-gray-900 placeholder-transparent focus:border-orange-200 focus:outline-none"
                          placeholder="What did you work on ?"
                        />
                        <label
                          htmlFor="activitydescription"
                          className="absolute left-0 top-0.5 text-gray-500 text-xs transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-0.5 peer-focus:text-sm peer-focus:text-orange-300"
                        >
                          Activity Description
                        </label>
                      </div>
                    </div>
                  </>
                )}

                <div>
                  <div className="relative mb-0">
                    <textarea
                      value={activity.comments}
                      onChange={(e) =>
                        handleFieldChange(index, "comments", e.target.value)
                      }
                      className="peer w-full border-b-1 border-gray-300 bg-transparent pt-5 pb-2 text-gray-900 placeholder-transparent focus:border-orange-200 focus:outline-none mb-5"
                      rows={1}
                      placeholder="Additional notes or details..."
                    />
                    <label
                      htmlFor="comments"
                      className="absolute left-0 top-0.5 text-gray-500 text-xs transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-0.5 peer-focus:text-sm peer-focus:text-orange-300"
                    >
                      Comments
                    </label>
                  </div>
                </div>
              </div>
            ))}

            <div className="flex justify-between items-center mt-6">
              <div className="text-lg font-medium">
                Total Time: {totalHour}h {totalMinute}m
              </div>
              <button
                type="submit"
                className="text-sm px-3 py-2 rounded-sm font-medium bg-orange-200 text-yellow-800 cursor-pointer border border-transparent hover:bg-white hover:text-black hover:border-orange-400 transition"
              >
                Submit Timesheet
              </button>
            </div>
          </section>
        </form>

        <section className="bg-white rounded-xl shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Time Reports
            </h2>
            <div className="flex gap-2">
              <DatePicker
                selected={dateRange.start}
                onChange={(date) => setDateRange({ ...dateRange, start: date })}
                selectsStart
                startDate={dateRange.start}
                endDate={dateRange.end}
                className="border rounded-lg p-2 w-40 text-gray-500 border-gray-400 focus:outline-0"
                placeholderText="Start date"
              />
              <DatePicker
                selected={dateRange.end}
                onChange={(date) => setDateRange({ ...dateRange, end: date })}
                selectsEnd
                startDate={dateRange.start}
                endDate={dateRange.end}
                minDate={dateRange.start}
                className="border rounded-lg p-2 w-40 text-gray-500 border-gray-400 focus:outline-0"
                placeholderText="End date"
              />
              <button
                onClick={handleFilter}
                className="text-sm px-10 py-2 rounded-sm font-medium bg-orange-200 text-yellow-800 cursor-pointer border border-transparent hover:bg-white hover:text-black hover:border-orange-400 transition"
              >
                Filter
              </button>
            </div>
          </div>

          <div className="flex gap-8">
            {/* Reports List with Pagination */}
            <div className="flex-1">
              <div className="reports-scrollbar sleek-scrollbar max-h-96 overflow-y-auto pr-2 mb-4">
                {currentReports.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    No reports found for this range.
                  </div>
                ) : (
                  <div className="space-y-3">
                    {currentReports.map((report, idx) => (
                      <div
                        key={idx}
                        className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow bg-white group"
                      >
                        <div className="flex justify-between items-center mb-3">
                          <h3 className="font-medium text-gray-800 text-sm  transition-colors">
                            {report.label}
                          </h3>
                          <span className="text-sm  text-gray-800 bg-gray-200 px-3 py-1 rounded-full group-hover:bg-gray-300 transition-colors cursor-pointer">
                            {report.total}
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <button className="text-sm px-3 py-2 rounded-full font-medium bg-orange-200 text-yellow-800 cursor-pointer border border-transparent hover:bg-white hover:text-black hover:border-orange-400 transition">
                            View Details
                          </button>
                          <button className="text-sm px-4 py-2 rounded-full font-medium bg-white text-yellow-800 cursor-pointer border border-orange-300 hover:bg-orange-200 hover:shadow-md transition-all">
                            Edit Report
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Pagination */}
              {reportsToShow.length > reportsPerPage && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              )}
            </div>

            {/* Timeline with Beautiful Scrollbar */}
            <div className="relative w-80">
              <div className="sticky top-0 bg-white pb-4 mb-2 border-b z-10">
                <h3 className=" text-gray-400 text-lg">Timeline Overview</h3>
                {/* <p className="text-sm text-gray-500">
                  Showing {reportsToShow.length} reports across{" "}
                  {Math.ceil(reportsToShow.length / 7)} weeks
                </p> */}
              </div>
              <Timeline
                reports={reportsToShow}
                selectedDate={selectedDate}
                onDateClick={handleDateClick}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TimeSheetCard;
