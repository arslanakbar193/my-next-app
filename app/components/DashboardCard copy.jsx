import React from 'react'
import Link from "next/link";

export default function DashboardCard({ icon, title, border, href, onClick, index }) {
  const content = (
    <div
      style={{ animationDelay: `${index * 0.1}s` }}
      className={`rounded-xl lg:p-6 p-4 flex flex-col items-center justify-center text-white animate__animated animate__fadeInUp bg-white/5 backdrop-blur-md border border-white/10 shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer`}
    >
      <div className={`w-16 h-16 rounded-full bg-gradient-to-tr ${border} flex items-center justify-center mb-4`}>
        <div className="w-10 h-10 flex items-center justify-center">{icon}</div>
      </div>
      <span className="lg:text-xl text-sm font-semibold text-center">{title}</span>
    </div>
  );

  return href ? (
    <Link href={href} className="w-full">{content}</Link>
  ) : (
    <div onClick={onClick} className="w-full">{content}</div>
  );
}