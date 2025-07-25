// import React, { useEffect, useRef, useState } from "react";

// const weeklyData = [
//   { day: "Mon", eod: 14, hours: 6, approvals: 2, absents: 1 },
//   { day: "Tue", eod: 15, hours: 7.5, approvals: 1, absents: 3 },
//   { day: "Wed", eod: 14, hours: 8, approvals: 5, absents: 8 },
//   { day: "Thu", eod: 15, hours: 7, approvals: 1, absents: 1 },
//   { day: "Fri", eod: 13, hours: 7.5, approvals: 0, absents: 0 },
//   { day: "Sat", eod: 15, hours: 10, approvals: 2, absents: 0 },
//   { day: "Sun", eod: 14, hours: 10, approvals: 3, absents: 1 },
// ];

// const getBarSegments = (item) => {
//   const segments = [
//     { key: "absents", value: item.absents, color: "#fdba74" },
//     { key: "approvals", value: item.approvals, color: "#fdba74" },
//     { key: "hours", value: item.hours, color: "#fdba74" },
//     { key: "eod", value: item.eod, color: "#fdba74" },
//   ];
//   return segments.filter((seg) => seg.value > 0);
// };

// const BarSegment = ({ value, color, isTop }) => (
//   <div
//     className="w-full transition-all duration-300"
//     style={{
//       height: `${value * 6}px`,
//       backgroundColor: color,
//       borderTopLeftRadius: isTop ? "20px" : "0px",
//       borderTopRightRadius: isTop ? "20px" : "0px",
//     }}
//   />
// );

// const WeeklyStackedBarsWithLine = () => {
//   const containerRef = useRef(null);
//   const [linePoints, setLinePoints] = useState([]);

//   useEffect(() => {
//     const barWrappers = containerRef.current.querySelectorAll(".bar-wrapper");
//     const containerRect = containerRef.current.getBoundingClientRect();

//     const points = Array.from(barWrappers).map((el) => {
//       const barStack = el.querySelector(".bar-stack");
//       const barRect = barStack.getBoundingClientRect();
//       const x = barRect.left + barRect.width / 2 - containerRect.left;
//       const y = barRect.top - containerRect.top;
//       return { x, y };
//     });

//     setLinePoints(points);
//   }, []);

//   return (
//     <div className="relative bg-white p-6 rounded-xl shadow-md max-w-6xl mx-auto mt-10">
//       <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">
//         Weekly Attendance with Connecting Line
//       </h2>

//       <div
//         className="flex items-end justify-between space-x-4 h-64 relative"
//         ref={containerRef}
//       >
//         {weeklyData.map((item, index) => {
//           const segments = getBarSegments(item);
//           return (
//             <div
//               key={index}
//               className="bar-wrapper flex flex-col items-center group relative w-10"
//             >
//               <div className="bar-stack flex flex-col-reverse w-full items-center">
//                 {segments.map((seg, idx) => {
//                   const isTop = idx === segments.length - 1;
//                   return (
//                     <BarSegment
//                       key={seg.key}
//                       value={seg.value}
//                       color={seg.color}
//                       isTop={isTop}
//                     />
//                   );
//                 })}
//               </div>

//               {/* Tooltip */}
//               <div className="absolute -top-32 hidden group-hover:flex flex-col items-center z-10">
//                 <div className="text-xs bg-black text-white px-2 py-1 rounded shadow-md text-center">
//                   <strong>{item.day}</strong>
//                   <br />
//                   EOD: {item.eod}
//                   <br />
//                   Hours: {item.hours}
//                   <br />
//                   Approvals: {item.approvals}
//                   <br />
//                   Absents: {item.absents}
//                 </div>
//               </div>

//               {/* Day label */}
//               <span className="text-xs text-gray-700 mt-2">{item.day}</span>
//             </div>
//           );
//         })}

//         {/* Connecting Line */}
//         {linePoints.length > 0 && (
//           <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
//             <polyline
//               fill="none"
//               stroke="#3b82f6"
//               strokeWidth="2"
//               points={linePoints.map((p) => `${p.x},${p.y}`).join(" ")}
//             />
//             {linePoints.map((p, idx) => (
//               <circle key={idx} cx={p.x} cy={p.y} r="3" fill="#3b82f6" />
//             ))}
//           </svg>
//         )}
//       </div>
//     </div>
//   );
// };

// export default WeeklyStackedBarsWithLine;
