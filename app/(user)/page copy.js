import Image from "next/image";
import Link from "next/link";
import { GiCaptainHatProfile } from "react-icons/gi";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { TbBrandSamsungpass } from "react-icons/tb";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-0">
        <div className="w-full bg-white shadow-lg rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 w-full min-h-screen">
            <div
              className="hidden md:flex items-center justify-end "
              style={{ backgroundColor: "#5D7CF3" }}
            >
              <div
                className="rounded shadow-md text-center w-[70%] h-[75%] md:w-[90%] lg:w-[70%] animate__animated animate__fadeInLeft"
                style={{ backgroundColor: "#6283FA" }}
              >
                <div className="relative h-[100%]">
                  <div className="absolute top-0">
                    <img src="/dots-image.png" alt="no-img" />
                  </div>
                  <div className="flex justify-center items-center h-[100%] flex-col">
                    <GiCaptainHatProfile
                        size={80}
                        className="text-white shadow-xl mb-4"
                      />
                    <h3 className="text-4xl font-semibold text-white ">Group Captain</h3>
                    <p className="text-sm  text-white px-8 mt-4">A complete employee management system designed to streamline HR processes, track attendance, manage projects — all in one centralized platform.  </p>
                  </div>

                  <div className="absolute bottom-0 left-16.5">
                    <img src="/random-dots.png" alt="no-img" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="flex items-center justify-center md:justify-start bg-gray-200 "
              style={{
                backgroundImage: "url('/undraw-thought-process.svg')",
                backgroundSize: "contain",
                backgroundPosition: "bottom",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="bg-white p-8 md:p-4 rounded shadow-md text-center  h-[75%] lg:w-[70%] md:w-[90%] sm:w-[80%]  animate__animated animate__fadeInRight">
                <div className="w-full bg-white flex items-center justify-center lg:p-10 md:p-4 sm:p-0 h-[100%]">
                  <form className="w-full max-w-md space-y-6">
                    <div className="flex justify-center mb-0">
                      <img src="/nextbridge_logo.jfif" alt="no-img" className="mb-0"/>
                      
                      </div>
                      {/* <p className="text-xl font-bold text-black-400">
                        Hi, Welcome !
                      </p>   */}
                    

                    <div className="text-left relative">
                      <label className="block mb-1 text-sm text-gray-600">
                        Email
                      </label>
                      <MdOutlineAlternateEmail className="text-blue-500 text-xl mr-2 absolute top-8.5 left-1" />
                      <input
                        type="email"
                        className="w-full border px-8 py-2 bg-white placeholder:text-sm"
                        placeholder="Enter Your Email Address"
                        autoComplete="off"
                      />
                    </div>

                    <div className="text-left relative">
                      <label className="block mb-1 text-sm text-gray-600">
                        Password
                      </label>
                      <TbBrandSamsungpass className="text-blue-500 text-xl mr-2 absolute top-8.5 left-1" />
                      <input
                        type="password"
                        className="w-full border px-8 py-2 rounded placeholder:text-sm"
                        placeholder="••••••••"
                      />
                    </div>

                    <div className="flex justify-between items-center text-sm">
                      <label className="flex items-center gap-2">
                        <input type="checkbox" /> Remember me
                      </label>
                      <a href="#" className="text-blue-600">
                        Reset Password?
                      </a>
                    </div>

                    <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                      <Link href="/home">Login</Link>
                    </button>

                    
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
