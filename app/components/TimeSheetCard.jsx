import React from "react";
import { useState } from "react";
import Select from "react-select";
const dropdownOptions = [
  { value: "one", label: "Option One" },
  { value: "two", label: "Option Two" },
  { value: "three", label: "Option Three" },
];
const TimeSheetCard = () => {
  const [fromDate, setFromDate] = useState("2025-07-14");
  const [toDate, setToDate] = useState("2025-07-20");

  const handleInputChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };
  return (
    <div className="min-h-screen bg-gray-100 p-4 space-y-6">
      <h1 className="text-2xl font-bold text-gray-700 mb-4">
        Time Logging Dashboard
      </h1>
      <form className="bg-white p-6 rounded-xl shadow space-y-6 max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold text-gray-700">
          Submit Your Information
        </h2>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center gap-4">
              <label className="w-32 text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                className="border rounded p-2 w-full"
                placeholder="Enter name"
              />
            </div>

            <div className="flex items-center gap-4">
              <label className="w-32 text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="border rounded p-2 w-full"
                placeholder="Enter email"
              />
            </div>

            <div className="flex items-center gap-4">
              <label className="w-32 text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="tel"
                className="border rounded p-2 w-full"
                placeholder="Enter phone number"
              />
            </div>

            <div className="flex items-center gap-4">
              <label className="w-32 text-sm font-medium text-gray-700">
                Date of Birth
              </label>
              <input type="date" className="border rounded p-2 w-full" />
            </div>

            {Array.from({ length: 4 }, (_, i) => (
              <div key={i} className="flex items-center gap-4">
                <label className="w-32 text-sm font-medium text-gray-700">
                  Dropdown {i + 1}
                </label>
                <Select
                  options={dropdownOptions}
                  placeholder={`Select Option ${i + 1}`}
                  onChange={(selected) =>
                    handleInputChange(`dropdown${i + 1}`, selected)
                  }
                  className="react-select-container w-full"
                  classNamePrefix="react-select"
                />
              </div>
            ))}
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded"
          >
            Submit
          </button>
        </div>
      </form>
      {/* Date Range Inputs */}
      <div className="bg-white shadow-md rounded-xl p-4 flex flex-wrap items-center gap-4">
        <div className="flex flex-col">
          <label
            htmlFor="fromDate"
            className="text-sm font-medium text-gray-600"
          >
            From Date
          </label>
          <input
            type="date"
            id="fromDate"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            className="border rounded p-2 w-44"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="toDate" className="text-sm font-medium text-gray-600">
            To Date
          </label>
          <input
            type="date"
            id="toDate"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            className="border rounded p-2 w-44"
          />
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-6">
          Reset
        </button>
      </div>

      {/* Weekly Summary */}
      <div className="mt-6 grid grid-cols-8 text-center font-semibold bg-white rounded-xl shadow">
        <div className="p-3 border-r">
          Mon
          <br />
          00:00
        </div>
        <div className="p-3 border-r">
          Tue
          <br />
          08:00
        </div>
        <div className="p-3 border-r">
          Wed
          <br />
          08:00
        </div>
        <div className="p-3 border-r">
          Thu
          <br />
          08:00
        </div>
        <div className="p-3 border-r bg-blue-100 text-blue-600">
          Fri
          <br />
          00:00
        </div>
        <div className="p-3 border-r">
          Sat
          <br />
          00:00
        </div>
        <div className="p-3 border-r">
          Sun
          <br />
          00:00
        </div>
        <div className="p-3">Total: 24:00</div>
      </div>

      {/* Daily Logs */}
      {["Tuesday 15, July", "Wednesday 16, July", "Thursday 17, July"].map(
        (day, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow p-4 border border-gray-200"
          >
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold">{day}</h2>
              <span className="text-sm text-gray-500">
                Total Duration: 08:00
              </span>
            </div>
            <div className="flex gap-4 text-sm text-blue-600">
              <button>Edit EOD Report</button>
              <button>View Sent Email</button>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default TimeSheetCard;
