"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BasicDetailsForm } from "@/components/BasicDetailsForm";
import { HeroSectionForm } from "@/components/HeroSectionForm";
import { AboutSectionForm } from "@/components/AboutSectionForm";
import { ServicesForm } from "@/components/ServicesForm";
import { ClientAndTestimonialForm } from "@/components/ClientTestimonialForm";
import { Profile } from "@/components/Profile";
import { Card } from "./template/components/Card";

export default function Home() {
  
  return (
    <section className="max-w-[1440px] mx-auto border border-black p-1">
      <div className="w-full mt-2 flex justify-center items-center gap-1 text-3xl font-bold">
        <h1 className="">Choose Your</h1>
        <span className="text-red-500">Template</span>
      </div>
      <p className="text-slate-400 text-center mt-2">
        Select a Professional template that bset represents your style and
        customize it to your needs
      </p>
      {/* template card */}
        <Card/>
      {/* multi form */}
      <div className="mt-4">
        <Tabs defaultValue="Basic_Details" className="border border-black flex justify-center items-center px-3 py-2">
          
          <TabsList className="overflow-x-scroll flex justify-around overflow-y-hidden hide-scrollbar w-full gap-2 lg:gap-5 mb-5">
            <TabsTrigger className="py-4 px-4" value="Basic_Details">Basic Details</TabsTrigger>
            <TabsTrigger className="py-4 px-4" value="Hero_Section">Header & Hero</TabsTrigger>
            <TabsTrigger className="py-4 px-4" value="About_Section">About Section</TabsTrigger>
            <TabsTrigger className="py-4 px-4" value="Services">Services</TabsTrigger>
            <TabsTrigger className="py-4 px-4" value="Clients_Testimonial">Clients & Testimonial</TabsTrigger>
          </TabsList>
          {/* the actual content */}

            <TabsContent value="Basic_Details" className="w-full px-3 sm:w-[70%]">
              <p className="mb-5 text-2xl font-bold">Basic Company Details</p>
              <BasicDetailsForm/>
            </TabsContent>
            <TabsContent value="Hero_Section" className="w-full px-3 sm:w-[70%]">
              <HeroSectionForm/>
            </TabsContent>
            <TabsContent value="About_Section" className="w-full px-3 sm:w-[70%]">
              <AboutSectionForm/>
            </TabsContent>
            <TabsContent value="Services" className="w-full px-3 sm:w-[70%]">
              <ServicesForm/>
            </TabsContent>
            <TabsContent value="Clients_Testimonial" className="w-full px-3 sm:w-[70%]">
              <ClientAndTestimonialForm/>
            </TabsContent>
            
        </Tabs>
      </div>

      <div className="w-full border p-3 border-black mt-5">
          <Profile/>
      </div>

    </section>
  );
}
