import { useState } from "react";
import dayjs from "dayjs";

export default function InteractiveCalendar() {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [selectedDate, setSelectedDate] = useState(null);

  const startOfMonth = currentDate.startOf("month");
  const endOfMonth = currentDate.endOf("month");
  const startDay = startOfMonth.day(); // 0 (Sun) - 6 (Sat)
  const daysInMonth = currentDate.daysInMonth();

  // Previous month's padding days
  const prevMonth = currentDate.subtract(1, "month");
  const prevMonthDays = prevMonth.daysInMonth();
  const leadingDays = Array(startDay)
    .fill(0)
    .map((_, i) => prevMonthDays - startDay + i + 1);

  // Next month's padding days
  const totalCells = leadingDays.length + daysInMonth;
  const trailingDays = Array((7 - (totalCells % 7)) % 7)
    .fill(0)
    .map((_, i) => i + 1);

  const changeMonth = (amount) => {
    setCurrentDate(currentDate.add(amount, "month"));
  };

  const isSameDate = (d1, d2) =>
    d1 &&
    d2 &&
    d1.date() === d2.date() &&
    d1.month() === d2.month() &&
    d1.year() === d2.year();

  return (
    <div className="bg-white p-4 rounded-xl border border-gray-200 w-full max-w-full mx-auto">
      <h2 class="text-lg font-semibold text-gray-700 mb-4">Date Selection</h2>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => changeMonth(-1)}
          className="text-orange-500 hover:text-orange-600"
        >
          ←
        </button>
        <h2 className="text-lg font-bold bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-400 text-transparent bg-clip-text">
          {currentDate.format("MMMM YYYY")}
        </h2>
        <button
          onClick={() => changeMonth(1)}
          className="text-orange-500 hover:text-orange-600"
        >
          →
        </button>
      </div>

      {/* Weekdays */}
      <div className="grid grid-cols-7 gap-2 text-center text-xs text-gray-500 font-semibold mb-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>

      {/* Days Grid */}
      <div className="grid grid-cols-7 gap-2 text-center text-sm">
        {/* Previous Month */}
        {leadingDays.map((day, i) => (
          <div key={`prev-${i}`} className="text-gray-300 py-1 rounded">
            {day}
          </div>
        ))}

        {/* Current Month */}
        {Array(daysInMonth)
          .fill(0)
          .map((_, i) => {
            const day = i + 1;
            const dateObj = currentDate.date(day);
            const isSelected = isSameDate(dateObj, selectedDate);
            const isToday = isSameDate(dateObj, dayjs());

            return (
              <button
                key={day}
                onClick={() => setSelectedDate(dateObj)}
                className={`py-1 rounded transition-all duration-200 border border-transparent
                  ${
                    isSelected
                      ? "bg-orange-500 text-white font-bold shadow"
                      : isToday
                      ? "bg-orange-100 font-semibold"
                      : "hover:bg-orange-50"
                  }`}
              >
                {day}
              </button>
            );
          })}

        {/* Next Month */}
        {trailingDays.map((day, i) => (
          <div key={`next-${i}`} className="text-gray-300 py-1 rounded">
            {day}
          </div>
        ))}
      </div>
    </div>
  );
}
