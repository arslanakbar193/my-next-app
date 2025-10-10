"use client";

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function WFHRequestModal() {
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [reason, setReason] = useState("");
  const [equipmentRequired, setEquipmentRequired] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fromDate || !toDate || !reason.trim()) {
      alert("Please fill all required fields (From Date, To Date, Reason).");
      return;
    }

    alert(
      `✅ WFH Request Submitted:\n\nFrom: ${fromDate.toLocaleDateString()}\nTo: ${toDate.toLocaleDateString()}\nReason: ${reason}\nEquipments Required: ${
        equipmentRequired ? "Yes" : "No"
      }`
    );
  };

  return (
    <div className="flex items-start justify-center min-h-[calc(100vh-35%)] bg-gray-100 p-4">
      <div className="w-full  bg-white rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center border-b pb-4">
          🏠 Work From Home Request
        </h2>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
          {/* From Date */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              From Date *
            </label>
            <DatePicker
              selected={fromDate}
              onChange={(date) => setFromDate(date)}
              dateFormat="yyyy-MM-dd"
              className="border p-3 w-full rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              placeholderText="Select from date"
              required
            />
          </div>

          {/* To Date */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              To Date *
            </label>
            <DatePicker
              selected={toDate}
              onChange={(date) => setToDate(date)}
              dateFormat="yyyy-MM-dd"
              className="border p-3 w-full rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              placeholderText="Select to date"
              minDate={fromDate}
              required
            />
          </div>

          {/* Reason */}
          <div className="md:col-span-2">
            <label className="block font-medium text-gray-700 mb-1">
              Reason *
            </label>
            <textarea
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Explain why you’re requesting to work from home..."
              rows="4"
              className="border p-3 w-full rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
              required
            />
          </div>

          {/* Equipments Required */}
          <div className="flex items-center gap-2 md:col-span-2">
            <input
              type="checkbox"
              id="equipmentRequired"
              checked={equipmentRequired}
              onChange={() => setEquipmentRequired(!equipmentRequired)}
              className="h-5 w-5 accent-blue-600 cursor-pointer"
            />
            <label
              htmlFor="equipmentRequired"
              className="text-gray-700 font-medium cursor-pointer"
            >
              Equipments Required
            </label>
          </div>

          {/* Apply Button */}
          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="text-lg px-3 py-2 rounded-sm font-medium bg-orange-200 text-yellow-800 cursor-pointer border border-transparent hover:bg-white hover:text-black hover:border-orange-400 transition"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
