"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CiMail } from "react-icons/ci";

interface profileType {
  Age: string;
  Email: string;
  Experience: string;
  Location: string;
  Name: string;
  Projects: string;
  Role: string;
}
interface heroType {
  Image: string;
  Email: string;
  Profile: string;
  Tagline: string;
  Title: string;
}

export const Hero = () => {
  const [profile, setProfile] = useState<profileType[]>([]);
  const [hero, setHero] = useState<heroType[]>([]);
  
  useEffect(() => {
    const storeEmail = JSON.parse(localStorage.getItem("Email")!);
    async function getBasicDetails() {
      const result = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/get/basicdata`,
        { Email: storeEmail.Email }
      );
      if (result.data) {
        setProfile((prev) => [...prev, result.data.allBasicDetails]);
      }
    }
    async function getHeroDetails() {
      const result = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/get/herodata`,
        { Email: storeEmail.Email }
      );
      if (result.data) {
        setHero((prev) => [...prev, result.data.allHeroDetails]);
        
      }
    }

    getBasicDetails();
    getHeroDetails();
  }, []);
  console.log(hero,"herrooooo")
  return (
    <section className="mt-[50px] max-w-[1440px] mx-auto bg-amber-300 grid md:grid-cols-2">
      <div className="w-full px-10 relative h-[400px] overflow-hidden bg-slate-100">
        <Image
          src={"/hero-woman.jpg"}
          alt="main image"
          width={500}
          height={500}
          className="mx-auto"
        />
      </div>

      <div className="flex justify-center items-center">
        {profile.map((cur,index) => {
          return (
            <div key={index} className="p-4 w-full flex flex-col justify-start items-start gap-3 px-4 lg:pl-9">
              <div className="flex justify-center items-center gap-4 ">
                <div className="text-3xl bg-red-500 rounded-full p-2">
                  <CiMail />
                </div>
                <div className="flex flex-col">
                  <p className="font-bold">Email</p>
                  <p className="">{cur.Email}</p>
                </div>
              </div>
              <div className="flex justify-center items-center gap-4 ">
                <div className="text-3xl bg-red-500 rounded-full p-2">
                  <CiMail />
                </div>
                <div className="flex flex-col">
                  <p className="font-bold">Experience</p>
                  <p className="">{cur.Experience} years</p>
                </div>
              </div>
              <div className="flex justify-center items-center gap-4 ">
                <div className="text-3xl bg-red-500 rounded-full p-2">
                  <CiMail />
                </div>
                <div className="flex flex-col">
                  <p className="font-bold">Location</p>
                  <p className="">{cur.Location}</p>
                </div>
              </div>


              <div className=" text-2xl font-bold text-red-500 overflow-hidden mt-3">
                    {cur.Name}
              </div>


            </div>
          );
        })}
        
      </div>
    </section>
  );
};
