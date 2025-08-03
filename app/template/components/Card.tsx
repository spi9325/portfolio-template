"use client"
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdRemoveRedEye } from "react-icons/md";


export const Card = () => {

    function handelTemplate(value:string){
    if (typeof window !== "undefined") {
    localStorage.setItem("template", value);
  }
  }

  return (
    <div className="bg-amber-50 mt-[50px] p-2 lg:px-9 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 lg:gap-[40px]">

        <div className="bg-slate-100 rounded-2xl py-2 border border-black px-3">
          <div className="h-[150px] lg:h-[200px] relative">
            <Image
              src={"/notebook.jpg"}
              alt="notebook image"
              width={500}
              height={500}
              className="object-cover w-full h-full"
            />
            <p className="absolute bottom-1 text-white font-bold left-2 ">
              template 1
            </p>
          </div>
          <p className="px-3 mt-2 text-sm mb-2">
            Modern and clean design with yellow hero section professional layout
          </p>
          <span className="px-3 text-sm font-bold">Key Feature:</span>
          <div className="flex px-3 justify-between mt-1">
            <ul className="font-thin text-sm list-disc px-5 marker:text-red-500 marker:text-xl">
              <li>Yellow Hero Section</li>
              <li>Testimonials Carousel</li>
            </ul>
            <ul className="font-thin text-sm list-disc px-5 marker:text-red-500 marker:text-xl">
              <li>Grid Portfolio</li>
              <li>Contact Form</li>
            </ul>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-1 md:gap-4 mt-4 sm:text-sm">
            <button onClick={()=>handelTemplate("template1")} className="bg-red-500 text-white flex justify-center items-center gap-2 lg:gap-5 py-2 px-3 rounded-2xl w-full md:w-[500px]">
              Customize This Template <FaArrowRightLong />
            </button>
            <button className="flex justify-center items-center gap-2 border-[2px] border-yellow-300 py-1 md:py-2 px-2 rounded-xl w-full md:w-[200px]">
              <MdRemoveRedEye />
              Preview
            </button>
          </div>
        </div>

        <div className="bg-slate-100 rounded-2xl py-2 border border-black px-3">
          <div className="h-[150px] lg:h-[200px] relative">
            <Image
              src={"/laptop.jpg"}
              alt="notebook image"
              width={500}
              height={500}
              className="object-cover w-full h-full"
            />
            <p className="absolute bottom-1 text-white font-bold left-2 ">
              template 1
            </p>
          </div>
          <p className="px-3 mt-2 text-sm mb-2">
            Modern and clean design with yellow hero section professional layout
          </p>
          <span className="px-3 text-sm font-bold">Key Feature:</span>
          <div className="flex px-3 justify-between mt-1">
            <ul className="font-thin text-sm list-disc px-5 marker:text-red-500 marker:text-xl">
              <li>Yellow Hero Section</li>
              <li>Testimonials Carousel</li>
            </ul>
            <ul className="font-thin text-sm list-disc px-5 marker:text-red-500 marker:text-xl">
              <li>Grid Portfolio</li>
              <li>Contact Form</li>
            </ul>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-1 md:gap-4 mt-4 sm:text-sm">
            <button onClick={()=>handelTemplate("template2")} className="bg-red-500 text-white flex justify-center items-center gap-2 lg:gap-5 py-2 px-3 rounded-2xl w-full md:w-[500px]">
              Customize This Template <FaArrowRightLong />
            </button>
            <button className="flex justify-center items-center gap-2 border-[2px] border-yellow-300 py-1 md:py-2 px-2 rounded-xl w-full md:w-[200px]">
              <MdRemoveRedEye />
              Preview
            </button>
          </div>
        </div>

      </div>
  )
}
