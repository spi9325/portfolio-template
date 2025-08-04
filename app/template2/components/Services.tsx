"use client";
import { GoDotFill } from "react-icons/go";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaHatCowboy } from "react-icons/fa6";

interface serviceType {
  Service: string;
  Description: string;
}

export const Services = () => {
  const [service, setService] = useState<serviceType[]>([]);
  
  useEffect(() => {
    const Email = localStorage.getItem("Email")
    async function getServiceDetails() {
      const result = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/get/servicedata`,
        { Email:Email }
      );
      if (result.data) {
        setService((prev) => [...prev, ...result.data.allServiceDetails]);
      }
    }

    getServiceDetails();
  }, []);

  return (
    <section className="max-w-[1440px] mx-auto mt-3 mb-9">
      <div className="w-full font-bold text-2xl flex justify-center items-center gap-2">
        <span className="">My</span>
        <span className="text-red-500">Services</span>
      </div>
      <div className="w-[70%] text-center mx-auto mt-2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, eum
        voluptates repudiandae quo, error unde repellat dolore amet dolor
        similique dolor
      </div>

      <div className="w-full border border-black mt-3 p-2 rounded-md grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {service.map((cur,index) => {
          return (
            <div key={index} className="px-2 py-2 rounded-md bg-green-300 w-full">
              <FaHatCowboy className="text-3xl" />
              <p className="font-bold text-xl mt-2">{cur.Service}</p>
              <p className="mt-2 h-[50px] overflow-hidden">
                {cur.Description}
              </p>
              <div className="mt-2">
                <p className="flex gap-2 items-center">
                  <GoDotFill className="text-red-500 text-xl" />
                  basic
                </p>
                <p className="flex gap-2 items-center">
                  <GoDotFill className="text-red-500 text-xl" />
                    Training
                </p>
                <p className="flex gap-2 items-center">
                  <GoDotFill className="text-red-500 text-xl" />
                  Random
                </p>
                <p className="flex gap-2 items-center">
                  <GoDotFill className="text-red-500 text-xl" />
                  Learning
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
