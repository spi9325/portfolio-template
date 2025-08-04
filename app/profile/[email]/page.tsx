"use client";
import axios from "axios";
import { Briefcase, Mail, MapPin } from "lucide-react";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

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
export default function Page() {
  const [profile, setProfile] = useState<profileType[]>([]);
  const [hero, setHero] = useState<heroType[]>([]);
  const [skill, setSkill] = useState<skillType[]>([]);

  const params = useParams();
  if(!params.email) return
  const Email = decodeURIComponent(params.email.toString()!);

  useEffect(() => {
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
  console.log(skill)

  useEffect(() => {
    async function getBasicDetails() {
      const result = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/get/basicdata`,
        { Email: Email }
      );
      if (result.data) {
        setProfile((prev) => [...prev, result.data.allBasicDetails]);
      }
    }

    async function getHeroDetails() {
      const result = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/get/herodata`,
        { Email: Email }
      );
      if (result.data) {
        setHero((prev) => [...prev, result.data.allHeroDetails]);
      }
    }

    getBasicDetails();
    getHeroDetails();


  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center px-4">
      {profile.map((cur, index) => {
        return (
          <div key={index} className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full text-center">
            <img
              src={hero[0]?.Profile == "" ? "profile" : hero[0]?.Profile}
              alt="Profile"
              className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-indigo-300"
            />
            <h2 className="text-2xl font-bold text-zinc-800 mb-1">
              User Profile
            </h2>
            <p className="text-zinc-500 mb-4">Welcome Back</p>

            <div className="space-y-3 text-left text-zinc-700">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-indigo-500" />
                <span>{cur.Email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-pink-500" />
                <span>{cur.Location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-purple-500" />
                <span> Expreirnce : {cur.Experience} Years</span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2"><span className="font-bold">Skill</span><span className="">{skill[0]?.SkillOne}</span></div>
                <div className="flex gap-2"><span className="font-bold">Rateing</span><span className="">{skill[0]?.RatingOne+"%"}</span> </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
