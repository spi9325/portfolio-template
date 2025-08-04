import React from "react";
import { PiDroneThin } from "react-icons/pi";

export const Certificate = () => {
  return (
    <section className="max-w-[1440px] mx-auto bg-black text-white py-9 mt-7">
      <div className="w-full text-center text-2xl ">
        Certification & <span className="text-yellow-300">Achievements</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3 w-full">
        <div className="bg-slate-700 mx-auto w-[50%] sm:w-auto rounded-md px-3 py-2 flex justify-center items-center gap-3">
          <div className="text-2xl w-[50px] h-[50px] flex justify-center items-center rounded-full bg-red-500">
            <PiDroneThin />
          </div>
          <div className="">
            <p className="font-bold">DOCA RPAS Instructor</p>
            <p className="font-extralight text-sm">Medium & Small Class Certified</p>
          </div>
        </div>
        <div className="bg-slate-700 mx-auto w-[50%] sm:w-auto rounded-md px-3 py-2 flex justify-center items-center gap-3">
          <div className="text-2xl w-[50px] h-[50px] flex justify-center items-center rounded-full bg-red-500">
            <PiDroneThin />
          </div>
          <div className="">
            <p className="font-bold">DOCA RPAS Instructor</p>
            <p className="font-extralight text-sm">Medium & Small Class Certified</p>
          </div>
        </div>
        <div className="bg-slate-700 mx-auto w-[50%] sm:w-auto rounded-md px-3 py-2 flex justify-center items-center gap-3">
          <div className="text-2xl w-[50px] h-[50px] flex justify-center items-center rounded-full bg-red-500">
            <PiDroneThin />
          </div>
          <div className="">
            <p className="font-bold">DOCA RPAS Instructor</p>
            <p className="font-extralight text-sm">Medium & Small Class Certified</p>
          </div>
        </div>
      </div>
    </section>
  );
};
