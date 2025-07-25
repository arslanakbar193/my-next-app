import {
  MdCheckCircle,
  MdAccessTime,
  MdPending,
  MdCancel,
  MdOutlinePending,
} from "react-icons/md";
import { BsSendCheck } from "react-icons/bs";
import InteractiveCalendar from "./Calendars";
export default function DashboardPage() {
  const weeklyData = [
    { day: "Mon", eod: 14, hours: 6, approvals: 2, absents: 1 },
    { day: "Tue", eod: 15, hours: 7.5, approvals: 1, absents: 3 },
    { day: "Wed", eod: 14, hours: 8, approvals: 5, absents: 8 },
    { day: "Thu", eod: 15, hours: 7, approvals: 1, absents: 1 },
    { day: "Fri", eod: 13, hours: 7.5, approvals: 0, absents: 0 },
    { day: "Sat", eod: 15, hours: 10, approvals: 2, absents: 0 },
    { day: "Sun", eod: 14, hours: 10, approvals: 3, absents: 1 },
  ];

  const getBarSegments = (item) => {
    const segments = [
      { key: "absents", value: item.absents, color: "#80808042" }, // red
      { key: "approvals", value: item.approvals, color: "#80808042" }, // yellow
      { key: "hours", value: item.hours, color: "#80808042" }, // blue
      { key: "eod", value: item.eod, color: "#80808042" }, // orange
    ];
    return segments.filter((seg) => seg.value > 0);
  };

  const BarSegment = ({ value, color, isTop }) => (
    <div
      className="w-full  transition-all duration-300"
      style={{
        height: `${value * 6}px`,
        backgroundColor: color,
        borderTopLeftRadius: isTop ? "20px" : "0px",
        borderTopRightRadius: isTop ? "20px" : "0px",
        borderBottomLeftRadius: "0px",
        borderBottomRightRadius: "0px",
      }}
    />
  );
  return (
    <>
      {/* Summary Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        <Card
          title="EOD Submitted"
          value="14/15"
          color="bg-green-100"
          icon={<BsSendCheck />}
        />
        <Card
          title="Hours Logged"
          value="35.5h"
          color="bg-blue-100"
          icon={<MdAccessTime />}
        />
        <Card
          title="Pending Approvals"
          value="2"
          color="bg-yellow-100"
          icon={<MdOutlinePending />}
        />
        <Card
          title="Absents"
          value="1"
          color="bg-red-100"
          icon={<MdCancel />}
        />
      </div>
      {/* <h2 className="mb-8 mt-8 text-xl font-bold bg-gradient-to-r from-orange-300 via-orange-700 to-yellow-400 text-transparent bg-clip-text">
        Weekly Team Metrics
      </h2> */}
      {/* Chart and Activity */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mb-6">
        <div className="p-6 rounded-xl bg-white border border-gray-200 ">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Weekly Team Metrics
          </h2>

          {/* Chart Bars */}
          <div className="flex items-end justify-between space-x-4 h-64">
            {weeklyData.map((item, index) => {
              const segments = getBarSegments(item);
              return (
                <div
                  key={index}
                  className="flex flex-col items-center group relative w-10"
                >
                  {/* Bar Segments */}
                  <div className="flex flex-col-reverse w-full items-center">
                    {segments.map((seg, idx) => {
                      const isTop = idx === segments.length - 1;
                      return (
                        <BarSegment
                          key={seg.key}
                          value={seg.value}
                          color={seg.color}
                          isTop={isTop}
                        />
                      );
                    })}
                  </div>

                  {/* Tooltip on hover */}
                  <div className="absolute -top-32 hidden group-hover:flex flex-col items-center z-10">
                    <div className="text-xs bg-black text-white px-2 py-1 rounded shadow-md text-center">
                      <strong>{item.day}</strong>
                      <br />
                      EOD: {item.eod}
                      <br />
                      Hours: {item.hours}
                      <br />
                      Approvals: {item.approvals}
                      <br />
                      Absents: {item.absents}
                    </div>
                  </div>

                  {/* Day label */}
                  <span className="text-xs text-gray-700 mt-2">{item.day}</span>
                </div>
              );
            })}
          </div>

          {/* Legend */}
          <div className="flex justify-center gap-4 mt-6 text-sm text-gray-600 flex-wrap">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-orange-200 rounded-full"></span> EOD
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-orange-200 rounded-full"></span> Hours
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-orange-200 rounded-full"></span>
              Approvals
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-orange-200 rounded-full"></span>
              Absents
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Work From Home Requests
          </h2>
          <div className="max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400 pr-2">
            <ul className="divide-y divide-gray-200 text-sm">
              {[
                {
                  name: "Ahmad Ali",
                  date: "19 Jun",
                  reason: "Health Issue",
                  status: "Approved",
                },
                {
                  name: "Ayesha Noor",
                  date: "20 Jun",
                  reason: "Family Emergency",
                  status: "Pending",
                },
                {
                  name: "Imran Khan",
                  date: "21 Jun",
                  reason: "Internet Issue",
                  status: "Rejected",
                },
                {
                  name: "Sana Tariq",
                  date: "22 Jun",
                  reason: "Child Care",
                  status: "Approved",
                },
                {
                  name: "Zubair Malik",
                  date: "23 Jun",
                  reason: "Wedding Function",
                  status: "Pending",
                },
                {
                  name: "Maria Baloch",
                  date: "24 Jun",
                  reason: "Doctor Visit",
                  status: "Rejected",
                },
                {
                  name: "Talha Naveed",
                  date: "25 Jun",
                  reason: "Electricity Issue",
                  status: "Approved",
                },
                {
                  name: "Anaya Aslam",
                  date: "26 Jun",
                  reason: "School Event",
                  status: "Pending",
                },
                {
                  name: "Faisal Shah",
                  date: "27 Jun",
                  reason: "Out of Town",
                  status: "Approved",
                },
                {
                  name: "Neha Rauf",
                  date: "28 Jun",
                  reason: "Family Gathering",
                  status: "Rejected",
                },
                {
                  name: "Hassan Bilal",
                  date: "29 Jun",
                  reason: "Network Down",
                  status: "Pending",
                },
                {
                  name: "Sadia Sheikh",
                  date: "30 Jun",
                  reason: "Home Renovation",
                  status: "Approved",
                },
                {
                  name: "Bilal Farooq",
                  date: "01 Jul",
                  reason: "Medical Checkup",
                  status: "Pending",
                },
                {
                  name: "Nimra Waseem",
                  date: "02 Jul",
                  reason: "Exam Preparation",
                  status: "Rejected",
                },
                {
                  name: "Usman Zafar",
                  date: "03 Jul",
                  reason: "Electric Maintenance",
                  status: "Approved",
                },
                {
                  name: "Hina Nasir",
                  date: "04 Jul",
                  reason: "Travel Plan",
                  status: "Pending",
                },
                {
                  name: "Faraz Qureshi",
                  date: "05 Jul",
                  reason: "Car Repair",
                  status: "Approved",
                },
                {
                  name: "Zara Imtiaz",
                  date: "06 Jul",
                  reason: "School Interview",
                  status: "Pending",
                },
                {
                  name: "Junaid Akram",
                  date: "07 Jul",
                  reason: "Weather Issue",
                  status: "Rejected",
                },
              ].map((req, idx) => (
                <li key={idx} className="py-2 flex flex-col">
                  <span className="font-semibold text-gray-800">
                    {req.name}
                  </span>
                  <span className="text-gray-600">
                    {req.date} — {req.reason}
                  </span>
                  <span
                    className={`text-xs mt-1 w-fit px-2 py-1 rounded ${
                      req.status === "Approved"
                        ? "bg-green-200 text-green-800"
                        : req.status === "Pending"
                        ? "bg-orange-200 text-yellow-800"
                        : "bg-red-200 text-red-800"
                    }`}
                  >
                    {req.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Calendar and WFH Requests */}
      {/* <h2 className="mb-8 mt-8 text-xl font-bold bg-gradient-to-r from-orange-300 via-orange-700 to-yellow-400 text-transparent bg-clip-text">
        Recent Activity
      </h2> */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mb-6">
        {/* Calendar */}

        <InteractiveCalendar />
        {/* <div className="bg-white p-4 rounded-xl border border-orange-300 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            June 2025
          </h2>
          <div className="grid grid-cols-7 gap-2 text-center text-sm text-gray-700">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d, i) => (
              <div key={i} className="font-semibold">
                {d}
              </div>
            ))}
            {Array(5)
              .fill("")
              .map((_, i) => (
                <div key={`empty-${i}`} />
              ))}
            {Array(30)
              .fill(0)
              .map((_, i) => {
                const day = i + 1;
                return (
                  <div
                    key={day}
                    className={`py-1 rounded ${
                      day === 18
                        ? "bg-orange-200 font-bold"
                        : "hover:bg-orange-100"
                    }`}
                  >
                    {day}
                  </div>
                );
              })}
          </div>
        </div> */}

        {/* Work From Home Requests */}

        <div className="bg-white p-4 rounded-xl border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Recent Activity
          </h2>
          <ul className="text-sm text-gray-600 divide-y divide-gray-200">
            {[
              "✅ Timesheet submitted for 18 June",
              "🕐 Logged 7.5 hours on CRM Email Templates",
              '📌 Added 3 new items to project "GoyzerCRM"',
              "📤 EOD mail sent to team lead",
              "📝 Feedback form submitted for UI Design Review",
              '🔍 QA testing completed on "Addendum Module"',
              "📦 Deployed bug fix for report filtering issue",
            ].map((activity, idx) => (
              <li key={idx} className="py-2">
                {activity}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* <h2 className="mb-8 mt-8 text-xl font-bold bg-gradient-to-r from-orange-300 via-orange-700 to-yellow-400 text-transparent bg-clip-text">
        Weekly Timesheet
      </h2> */}
      {/* Timesheet Table */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-md p-4 mb-6">
        <div className="overflow-x-auto">
          <h2 class="text-lg font-semibold text-gray-700 mb-4">
            Weekly Timesheet
          </h2>
          <table className="w-full text-sm text-left text-gray-600">
            <thead className="text-xs bg-orange-100 text-orange-700">
              <tr>
                <th className="px-4 py-3">Emp ID</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Project</th>
                <th className="px-4 py-3">Hours</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  empId: "E101",
                  name: "Ali Khan",
                  date: "Mon, 17 Jun",
                  project: "CodeQubrix",
                  hours: "8",
                  status: "Submitted",
                },
                {
                  empId: "E102",
                  name: "Sara Sheikh",
                  date: "Tue, 18 Jun",
                  project: "Addendum Contract",
                  hours: "7.5",
                  status: "Submitted",
                },
                {
                  empId: "E103",
                  name: "Imran Malik",
                  date: "Wed, 19 Jun",
                  project: "CRM Group Code",
                  hours: "8",
                  status: "Pending",
                },
                {
                  empId: "E104",
                  name: "Hina Rauf",
                  date: "Thu, 20 Jun",
                  project: "Better Homes",
                  hours: "6.5",
                  status: "Submitted",
                },
                {
                  empId: "E103",
                  name: "Imran Malik",
                  date: "Wed, 19 Jun",
                  project: "CRM Group Code",
                  hours: "8",
                  status: "Pending",
                },
                {
                  empId: "E104",
                  name: "Hina Rauf",
                  date: "Thu, 20 Jun",
                  project: "Better Homes",
                  hours: "6.5",
                  status: "Submitted",
                },
                {
                  empId: "E103",
                  name: "Imran Malik",
                  date: "Wed, 19 Jun",
                  project: "CRM Group Code",
                  hours: "8",
                  status: "Pending",
                },
                {
                  empId: "E104",
                  name: "Hina Rauf",
                  date: "Thu, 20 Jun",
                  project: "Better Homes",
                  hours: "6.5",
                  status: "Submitted",
                },
                {
                  empId: "E105",
                  name: "Usman Ahmed",
                  date: "Fri, 21 Jun",
                  project: "Frontend Migration",
                  hours: "8",
                  status: "Pending",
                },
              ].map((entry, idx) => (
                <tr key={idx} className="border-b">
                  <td className="px-4 py-2 font-medium text-gray-700">
                    {entry.empId}
                  </td>
                  <td className="px-4 py-2">{entry.name}</td>
                  <td className="px-4 py-2">{entry.date}</td>
                  <td className="px-4 py-2">{entry.project}</td>
                  <td className="px-4 py-2">{entry.hours}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`text-xs px-2 py-1 rounded font-medium ${
                        entry.status === "Submitted"
                          ? "bg-green-200 text-green-800"
                          : "bg-orange-200 text-yellow-800"
                      }`}
                    >
                      {entry.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

const Card = ({ title, value, icon }) => (
  <div
    className="p-5 rounded-xl bg-gradient-to-br from-white via-white to-orange-50 
               border border-gray-200  cursor-pointer 
               hover:bg-orange-100 hover:border-orange-300 hover:scale-[1.02] hover:shadow-md 
               transition-all duration-300"
  >
    <div className="flex items-center justify-between">
      {/* Icon */}

      {/* Text */}
      <div className="text-left">
        <p className="text-sm text-gray-600 group-hover:text-orange-700">
          {title}
        </p>
        <p className="text-2xl font-semibold text-gray-800 group-hover:text-orange-900">
          {value}
        </p>
      </div>
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 text-orange-500 text-2xl">
        {icon}
      </div>
    </div>
  </div>
);
