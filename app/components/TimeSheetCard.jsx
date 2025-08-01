import React, { useState } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Activity Options
const ACTIVITY_TYPES = [
  { value: "project", label: "Project Activity" },
  { value: "general", label: "General Activity" }
];

const PROJECT_OPTIONS = [
  { value: "project1", label: "Website Redesign" },
  { value: "project2", label: "Mobile App Development" }
];

const TARGET_OPTIONS = [
  { value: "target1", label: "Frontend Implementation" },
  { value: "target2", label: "Backend API" }
];

const PROJECT_ACTIVITIES = [
  { value: "development", label: "Development" },
  { value: "testing", label: "Testing" },
  { value: "meeting", label: "Client Meeting" }
];

const GENERAL_ACTIVITIES = [
  { value: "training", label: "Training" },
  { value: "documentation", label: "Documentation" }
];

const FEATURE_OPTIONS = [
  { value: "auth", label: "Authentication" },
  { value: "dashboard", label: "Admin Dashboard" }
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
  feature: null
};

const TimeSheetCard = () => {
  const [activities, setActivities] = useState([{ ...initialActivity }]);
  const [dateRange, setDateRange] = useState({
    start: new Date("2025-07-14"),
    end: new Date("2025-07-20")
  });
  const [employee, setEmployee] = useState({
    name: "",
    id: "",
    email: ""
  });

  // Handlers
  const handleEmployeeChange = (e) => {
    const { name, value } = e.target;
    setEmployee(prev => ({ ...prev, [name]: value }));
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
  // Ensure value is a positive number
  const numValue = Math.max(0, parseInt(value) || 0);
  
  // For minutes, cap at 59
  if (field === "minutes" && numValue > 59) return;
  
  // Update the state
  const updated = [...activities];
  updated[index][field] = numValue;
  setActivities(updated);
};

  const addActivity = () => {
    setActivities([...activities, { ...initialActivity }]);
  };

  const removeActivity = (index) => {
    if (activities.length <= 1) return;
    const updated = activities.filter((_, i) => i !== index);
    setActivities(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", { employee, activities });
    // Add your submission logic here
  };

  // Calculate total time
  const totalTime = activities.reduce((total, activity) => {
    return total + activity.hours * 60 + activity.minutes;
  }, 0);

  const totalHours = Math.floor(totalTime / 60);
  const totalMinutes = totalTime % 60;

  return (
    <div className="min-h-screen  p-4 md:p-8">
      <div className="w-full mx-auto space-y-8">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">Time Logging System</h1>
          <p className="text-gray-600 mt-2">Track and submit your work hours</p>
        </header>

        {/* Main Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-6 space-y-8">
          {/* Employee Info */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Employee Information</h2>
            {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={employee.name}
                  onChange={handleEmployeeChange}
                  className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Employee ID</label>
                <input
                  type="text"
                  name="id"
                  value={employee.id}
                  onChange={handleEmployeeChange}
                  className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={employee.email}
                  onChange={handleEmployeeChange}
                  className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div> */}
          </section>

          {/* Time Entries */}
          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Time Entries</h2>
              <button
                type="button"
                onClick={addActivity}
                className="flex items-center gap-1 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Add Entry
              </button>
            </div>

            {activities.map((activity, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 mb-4 relative">
                {activities.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeActivity(index)}
                    className="absolute top-3 right-3 text-red-500 hover:text-red-700"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  {/* Date Picker */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                    <DatePicker
                      selected={activity.date}
                      onChange={(date) => handleFieldChange(index, "date", date)}
                      className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                      dateFormat="MMMM d, yyyy"
                      required
                    />
                  </div>

                  {/* Time Spent */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Time Spent</label>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        min="0"
                        max="24"
                        value={activity.hours}
                        onChange={(e) => handleTimeChange(index, "hours", e.target.value)}
                        className="w-16 border rounded-lg p-2 text-center"
                        placeholder="Hrs"
                      />
                      <span>:</span>
                      <input
                        type="number"
                        min="0"
                        max="59"
                        value={activity.minutes}
                        onChange={(e) => handleTimeChange(index, "minutes", e.target.value)}
                        className="w-16 border rounded-lg p-2 text-center"
                        placeholder="Mins"
                      />
                    </div>
                  </div>
                </div>

                {/* Activity Type */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Activity Type</label>
                  <Select
                    options={ACTIVITY_TYPES}
                    value={ACTIVITY_TYPES.find(opt => opt.value === activity.type)}
                    onChange={(selected) => handleActivityTypeChange(index, selected)}
                    className="react-select-container"
                    classNamePrefix="react-select"
                    required
                  />
                </div>

                {/* Dynamic Fields Based on Activity Type */}
                {activity.type === "project" ? (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Project</label>
                        <Select
                          options={PROJECT_OPTIONS}
                          value={activity.project}
                          onChange={(selected) => handleFieldChange(index, "project", selected)}
                          className="react-select-container"
                          classNamePrefix="react-select"
                          placeholder="Select project"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Target</label>
                        <div className="flex gap-2">
                          <Select
                            options={TARGET_OPTIONS}
                            value={activity.target}
                            onChange={(selected) => handleFieldChange(index, "target", selected)}
                            className="react-select-container flex-1"
                            classNamePrefix="react-select"
                            placeholder="Select target"
                            required
                          />
                          <button
                            type="button"
                            className="bg-gray-200 text-gray-700 px-3 py-1 rounded-lg hover:bg-gray-300"
                          >
                            Add New
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Activity</label>
                      <Select
                        options={PROJECT_ACTIVITIES}
                        value={activity.activity}
                        onChange={(selected) => handleFieldChange(index, "activity", selected)}
                        className="react-select-container"
                        classNamePrefix="react-select"
                        placeholder="Select activity"
                        required
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Activity Description</label>
                      <input
                        type="text"
                        value={activity.activityLog}
                        onChange={(e) => handleFieldChange(index, "activityLog", e.target.value)}
                        className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                        placeholder="What did you work on?"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                        <Select
                          options={GENERAL_ACTIVITIES}
                          value={activity.typeOption}
                          onChange={(selected) => handleFieldChange(index, "typeOption", selected)}
                          className="react-select-container"
                          classNamePrefix="react-select"
                          placeholder="Select type"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Feature</label>
                        <Select
                          options={FEATURE_OPTIONS}
                          value={activity.feature}
                          onChange={(selected) => handleFieldChange(index, "feature", selected)}
                          className="react-select-container"
                          classNamePrefix="react-select"
                          placeholder="Select feature"
                        />
                      </div>
                    </div>
                  </>
                )}

                {/* Comments */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Comments</label>
                  <textarea
                    value={activity.comments}
                    onChange={(e) => handleFieldChange(index, "comments", e.target.value)}
                    className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                    rows={3}
                    placeholder="Additional notes or details..."
                  />
                </div>
              </div>
            ))}

            {/* Summary and Submit */}
            <div className="flex justify-between items-center mt-6">
              <div className="text-lg font-medium">
                Total Time: {totalHours}h {totalMinutes}m
              </div>
              <button
                type="submit"
                className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
              >
                Submit Timesheet
              </button>
            </div>
          </section>
        </form>

        {/* Reports Section */}
        <section className="bg-white rounded-xl shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Time Reports</h2>
            <div className="flex gap-2">
              <DatePicker
                selected={dateRange.start}
                onChange={(date) => setDateRange({ ...dateRange, start: date })}
                selectsStart
                startDate={dateRange.start}
                endDate={dateRange.end}
                className="border rounded-lg p-2 w-36"
                placeholderText="Start date"
              />
              <DatePicker
                selected={dateRange.end}
                onChange={(date) => setDateRange({ ...dateRange, end: date })}
                selectsEnd
                startDate={dateRange.start}
                endDate={dateRange.end}
                minDate={dateRange.start}
                className="border rounded-lg p-2 w-36"
                placeholderText="End date"
              />
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                Filter
              </button>
            </div>
          </div>

          {/* Weekly Summary */}
          <div className="grid grid-cols-8 text-center font-medium bg-gray-100 rounded-lg overflow-hidden mb-6">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
              <div key={day} className={`p-3 border-r ${i === 4 ? 'bg-blue-100 text-blue-600' : ''}`}>
                {day}
                <br />
                {i === 4 ? '00:00' : '08:00'}
              </div>
            ))}
            <div className="p-3 font-semibold">Total: 24:00</div>
          </div>

          {/* Daily Reports */}
          <div className="space-y-4">
            {['Monday 14, July', 'Tuesday 15, July', 'Wednesday 16, July'].map((day) => (
              <div key={day} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium text-gray-800">{day}</h3>
                  <span className="text-sm text-gray-500">Total: 08:00</span>
                </div>
                <div className="flex gap-4 text-sm">
                  <button className="text-blue-600 hover:underline">View Details</button>
                  <button className="text-blue-600 hover:underline">Edit Report</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default TimeSheetCard;