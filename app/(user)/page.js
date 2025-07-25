import Image from "next/image";
import Link from "next/link";
import { GiCaptainHatProfile } from "react-icons/gi";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { TbBrandSamsungpass } from "react-icons/tb";

export default function Home() {
  return (
    <>
      <div className=" flex items-center justify-center bg-gray-100 p-0">
        <div className="absolute inset-0 bg-white/30 backdrop-blur-sm z-0"></div>
        <div className="w-full bg-white shadow-lg rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 w-full min-h-screen">
            <div
              className="hidden md:flex items-center justify-end "
              style={{ backgroundColor: "#e5e7eb" }}
            >
              <div
                className="relative rounded-lg shadow-xl text-center w-[70%] h-[75%] md:w-[90%] lg:w-[70%] animate__animated animate__fadeInLeft bg-gradient-to-br from-[#fdd9b5] via-[#fca982] to-[#f78061] backdrop-blur-md"
                // style={{
                //       backgroundImage: "url('/scattered.png')",
                //       backgroundSize: "cover",
                //       backgroundPosition: "bottom",
                //       backgroundRepeat: "no-repeat",
                //     }}
              >
                <img
                  src="/blob.svg" // make sure this path is valid
                  alt="illustration"
                  className="absolute top-[-30px] right-[-30px] w-64 opacity-30 blur-md pointer-events-none z-0"
                />

                <img
                  src="/blob2.svg" // make sure this path is valid
                  alt="illustration"
                  className="absolute bottom-[0px] left-[20px] w-64 opacity-30 blur-md pointer-events-none z-0"
                />
                <img
                  src="/blob3.svg" // make sure this path is valid
                  alt="illustration"
                  className="absolute top-[0px] left-[0px] w-64 opacity-30 blur-md pointer-events-none z-0"
                />
                <img
                  src="/blob4.svg" // make sure this path is valid
                  alt="illustration"
                  className="absolute bottom-[0px] left-[-120px] w-64 opacity-30 blur-md pointer-events-none z-0"
                />

                <div className="absolute inset-0 z-[-1] rounded-lg"></div>
                <div className="relative h-[100%]">
                  <div className="flex justify-center items-center h-[100%] flex-col">
                    <img src="/Ncb-white.svg" alt="no-img" className="mb-0" />
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
                <div
                  className="w-full bg-white flex items-center justify-center lg:p-10 md:p-4 sm:p-0 h-[100%]"
                  // style={{
                  //   backgroundImage: "url('/scattered.png')",
                  //   backgroundSize: "contain",
                  //   backgroundPosition: "bottom",
                  //   backgroundRepeat: "no-repeat",
                  // }}
                >
                  <form className="w-full max-w-md space-y-6">
                    <div className="flex justify-center mb-0">
                      {/* text-transparent bg-clip-text bg-gradient-to-br from-[#eec398] via-[#ec733a] to-[#f05933] backdrop-blur-md */}
                      <h3 className="text-4xl font-bold mb-10 ">
                        Group Captain
                      </h3>
                    </div>
                    {/* <p className="text-xl font-bold text-black-400">
                        Hi, Welcome !
                      </p>   */}

                    <div className="text-left relative">
                      <label className="block mb-1 text-sm text-gray-600">
                        Email
                      </label>
                      <MdOutlineAlternateEmail className="text-orange-500 text-xl mr-2 absolute top-8.5 left-2" />
                      <input
                        type="email"
                        className="w-full border border-orange-500 px-10 py-2 rounded placeholder:text-sm focus:outline-none focus:ring-1 focus:ring-orange-400"
                        placeholder="Email Address"
                        autoComplete="new Email"
                      />
                    </div>

                    <div className="text-left relative">
                      <label className="block mb-1 text-sm text-gray-600">
                        Password
                      </label>
                      <TbBrandSamsungpass className="text-orange-500 text-xl mr-2 absolute top-8.5 left-2" />
                      <input
                        type="password"
                        className="w-full border border-orange-500 px-10 py-2 rounded placeholder:text-sm focus:outline-none focus:ring-1 focus:ring-orange-400"
                        placeholder="••••••••"
                        autoComplete="new-password"
                      />
                    </div>

                    <div className="flex justify-between items-center text-sm mb-8">
                      <label className="flex items-center gap-2">
                        <input type="checkbox" /> Remember me
                      </label>
                      {/*text-   bg-clip-text bg-gradient-to-br from-[#eec398] via-[#ec733a] to-[#f05933] backdrop-blur-md */}
                      <a href="#" className=" text-black ">
                        Reset Password?
                      </a>
                    </div>
                    <div className="border-t border-gray-300 my-4"></div>
                      <div className="flex justify-center mt-10">
                        <Link href="/home" className="block w-42 text-white py-2 rounded text-center bg-gradient-to-br from-[#eec398] via-[#ec733a] to-[#f05933] hover:bg-orange-400 transition backdrop-blur-md">
                            Login
                        </Link>
                      </div>
                    
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
