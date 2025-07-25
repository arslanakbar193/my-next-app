import React from "react";
import { MdOutlineSpaceDashboard } from "react-icons/md";

const Header = () => {
  return (
    <>
      <header className="text-gray-600 w-full px-4">
        <div className="max-w-screen-2xl mx-auto flex lg:flex-row flex-col justify-between items-center pt-10">
          <h1 className="lg:text-3xl font-bold text-white flex items-center lg:mb-0 mb-4">
            <MdOutlineSpaceDashboard className="mr-1" size={32}/>Group Captain
            <span className="text-sm font-light pl-1">| Dashboard</span>
          </h1>
          <div className="flex items-center space-x-2">
            <span
              className="rounded-full w-9 h-9 flex items-center justify-center"
              style={{
                backgroundColor: "#2f190f",
                border: "2px solid rgb(242 26 73)",
              }}
            >
              <span className="text-sm text-white cursor-pointer">AA</span>
            </span>
            <span className="text-white">Arslan Akbar</span>
          </div>
        </div>
        <div className="max-w-screen-2xl mx-auto flex justify-between items-center pb-2 px-0">
          <h1 className="text-[0px]">Dashboard</h1>
        </div>
      </header>
    </>
  );
};

export default Header;
