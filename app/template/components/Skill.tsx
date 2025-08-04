"use client";
import { Slider } from "@/components/ui/slider";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { PiDrone } from "react-icons/pi";

interface skillType {
  Title: string;
  Email: string;
  SkillOne: string;
  SkillTwo: string;
  SkillThird: string;
  RatingOne: string;
  RatingTwo: string;
  RatingThird: string;
}

export const Skill = () => {
  const [skill, setSkill] = useState<skillType[]>([]);
  useEffect(() => {
    const Email = localStorage.getItem("Email");
    async function getSkillDetails() {
      const result = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/get/skilldata`,
        { Email }
      );
      if (result.data) {
        setSkill((prev) => [...prev, ...result.data.allSkillDetails]);
      }
    }

    getSkillDetails();
  }, []);
  return (
    <section className="max-w-[1440px] mx-auto mt-4 p-1">
      <div className="w-full text-2xl flex justify-center items-center mb-4">
        <p className="">My</p>
        <p className="text-red-500">Skills</p>
      </div>
      {skill.map((cur, index) => {
        return (
          <div key={index} className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="border border-black shadow-md rounded-md px-1 py-3">
              <div className="flex items-center justify-start px-3 gap-2 mb-2">
                <div className="text-2xl bg-red-500 w-[50px] h-[50px] flex justify-center items-center rounded-full">
                  <PiDrone />
                </div>
                <p className="font-bold">{cur?.Title}</p>
              </div>

              <div className="flex items-center justify-start px-3 gap-2">
                <div className="flex justify-between items-center w-full">
                  <p className="">{cur?.SkillOne}</p>
                  <p className="">{cur.RatingOne}%</p>
                </div>
              </div>
              <div className="flex items-center justify-start px-3 gap-2 mt-3">
                <div className="flex justify-between items-center w-full">
                  <Slider defaultValue={[Number(cur?.RatingOne)]} max={100} step={1} />
                </div>
              </div>

              <div className="flex items-center justify-start px-3 gap-2 mt-4">
                <div className="flex justify-between items-center w-full">
                  <p className="">{cur?.SkillTwo}</p>
                  <p className="">{cur?.RatingTwo}%</p>
                </div>
              </div>
              <div className="flex items-center justify-start px-3 gap-2 mt-3">
                <div className="flex justify-between items-center w-full">
                  <Slider defaultValue={[Number(cur?.RatingTwo)]} max={100} step={1} />
                </div>
              </div>

              <div className="flex items-center justify-start px-3 gap-2 mt-4">
                <div className="flex justify-between items-center w-full">
                  <p className="">{cur?.SkillThird}</p>
                  <p className="">{cur?.RatingThird}%</p>
                </div>
              </div>
              <div className="flex items-center justify-start px-3 gap-2 mt-3">
                <div className="flex justify-between items-center w-full">
                  <Slider defaultValue={[Number(cur?.RatingThird)]} max={100} step={1} />
                </div>
              </div>
            </div>
            {/* <div className="border border-black shadow-md rounded-md px-1 py-3">
              <div className="flex items-center justify-start px-3 gap-2 mb-2">
                <div className="text-2xl bg-red-500 w-[50px] h-[50px] flex justify-center items-center rounded-full">
                  <PiDrone />
                </div>
                <p className="font-bold">Drone Training</p>
              </div>

              <div className="flex items-center justify-start px-3 gap-2">
                <div className="flex justify-between items-center w-full">
                  <p className="">skills sssssssss(444444444)</p>
                  <p className="">96%</p>
                </div>
              </div>
              <div className="flex items-center justify-start px-3 gap-2 mt-3">
                <div className="flex justify-between items-center w-full">
                  <Slider defaultValue={[96]} max={100} step={1} />
                </div>
              </div>

              <div className="flex items-center justify-start px-3 gap-2 mt-4">
                <div className="flex justify-between items-center w-full">
                  <p className="">skills sssssssss(444444444)</p>
                  <p className="">96%</p>
                </div>
              </div>
              <div className="flex items-center justify-start px-3 gap-2 mt-3">
                <div className="flex justify-between items-center w-full">
                  <Slider defaultValue={[96]} max={100} step={1} />
                </div>
              </div>

              <div className="flex items-center justify-start px-3 gap-2 mt-4">
                <div className="flex justify-between items-center w-full">
                  <p className="">skills sssssssss(444444444)</p>
                  <p className="">96%</p>
                </div>
              </div>
              <div className="flex items-center justify-start px-3 gap-2 mt-3">
                <div className="flex justify-between items-center w-full">
                  <Slider defaultValue={[96]} max={100} step={1} />
                </div>
              </div>
            </div>
            <div className="border border-black shadow-md rounded-md px-1 py-3">
              <div className="flex items-center justify-start px-3 gap-2 mb-2">
                <div className="text-2xl bg-red-500 w-[50px] h-[50px] flex justify-center items-center rounded-full">
                  <PiDrone />
                </div>
                <p className="font-bold">Drone Training</p>
              </div>

              <div className="flex items-center justify-start px-3 gap-2">
                <div className="flex justify-between items-center w-full">
                  <p className="">skills sssssssss(444444444)</p>
                  <p className="">96%</p>
                </div>
              </div>
              <div className="flex items-center justify-start px-3 gap-2 mt-3">
                <div className="flex justify-between items-center w-full">
                  <Slider defaultValue={[96]} max={100} step={1} />
                </div>
              </div>

              <div className="flex items-center justify-start px-3 gap-2 mt-4">
                <div className="flex justify-between items-center w-full">
                  <p className="">skills sssssssss(444444444)</p>
                  <p className="">96%</p>
                </div>
              </div>
              <div className="flex items-center justify-start px-3 gap-2 mt-3">
                <div className="flex justify-between items-center w-full">
                  <Slider defaultValue={[96]} max={100} step={1} />
                </div>
              </div>

              <div className="flex items-center justify-start px-3 gap-2 mt-4">
                <div className="flex justify-between items-center w-full">
                  <p className="">skills sssssssss(444444444)</p>
                  <p className="">96%</p>
                </div>
              </div>
              <div className="flex items-center justify-start px-3 gap-2 mt-3">
                <div className="flex justify-between items-center w-full">
                  <Slider defaultValue={[96]} max={100} step={1} />
                </div>
              </div>
            </div> */}
          </div>
        );
      })}
    </section>
  );
};
