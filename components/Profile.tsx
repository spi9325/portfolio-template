"use client";
import React, { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { StarRating } from "./StarRatings";
import axios from "axios";

interface profileType {
  Age: string;
  Email: string;
  Experience: string;
  Location: string;
  Name: string;
  Projects: string;
  Role: string;
}

export const Profile = () => {
  const [profile, setProfile] = useState<profileType[]>([]);
  const [review, setReview] = useState("");
  const [email, setEmail] = useState<string | null>(null); 

  useEffect(() => {
    const stored = localStorage.getItem("Email");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setEmail(parsed.Email); 
      } catch (e) {
        console.error("Failed to parse Email:", e);
      }
    }
  }, []);

  useEffect(() => {
    if (!email) return; 

    async function getBasicDetails() {
      const result = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/get/basicdata`, {
        Email: email,
      });
      if (result.data) {
        setProfile((prev) => [...prev, result.data.allBasicDetails]);
      }
    }

    async function getTestimonialDetails() {
      const result = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/get/testimonialdata`, {
        Email: email,
      });
      if (result.data) {
        setReview(result.data.allTestimonialDetails.Review);
      }
    }

    getBasicDetails();
    getTestimonialDetails();
  }, [email]); 

  return (
    <div className="flex flex-row gap-2 px-2 overflow-x-scroll relative md:pr-4">
      {profile?.map((cur, index) => {
        return (
          <div
            key={index}
            className="border border-black bg-yellow-300 flex flex-col items-center py-[50px] min-w-full sm:min-w-[280px] rounded-lg"
          >
            <div className="w-[100px] h-[100px] rounded-full flex justify-center items-center bg-amber-300">
              profile
            </div>
            <p className="mt-2 font-bold text-lg">{cur.Name}</p>
            <p className="">Age: {cur.Age}</p>
            <p className="bg-black text-white px-2 rounded-lg mt-1">{cur.Role}</p>
            <div className="flex justify-center items-center gap-1 mt-2 text-sm">
              <CiLocationOn />
              <p className="">{cur.Location}</p>
            </div>
            <div className="flex justify-center items-center gap-1 mt-2">
              <StarRating rating={4.5} />
              <p className="">4.5</p>
            </div>
            <p className="w-[80%] md:w-full text-center mt-4">{review}</p>
            <div className="flex justify-between items-center gap-4 mt-4">
              <div className="bg-amber-300 flex justify-center items-center flex-col w-[100px] py-1 rounded-lg">
                <p className="font-bold">{cur.Experience} years</p>
                <p className="">Experience</p>
              </div>
              <div className="bg-amber-100 flex justify-center items-center flex-col w-[100px] py-1 rounded-lg">
                <p className="">{cur.Projects}</p>
                <p className="">Projects</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
