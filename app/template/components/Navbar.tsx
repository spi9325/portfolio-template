import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FaBars } from "react-icons/fa6";
export const Navbar = () => {
  return (
    <nav className="max-w-[1440px] mx-auto fixed right-0 left-0 top-0 flex justify-between p-2 backdrop-blur-2xl z-50 shadow-md rounded-md ">
      <div className="pl-2 font-bold">
        <span className="">Drone</span>
        <span className="text-red-500">TV</span>
      </div>

      <div className="md:w-[40%]">
        <ul className="hidden md:flex justify-start items-start gap-4">
          <li className="">Home</li>
          <li className="">About</li>
          <li className="">Service</li>
          <li className="">Contact</li>
        </ul>
        <Sheet >
          <SheetTrigger className="flex justify-center items-center mr-3 md:hidden">
            <FaBars className="text-xl" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription>
                <div className="text-2xl mt-6">
                  <p className="mb-5">Home</p>
                  <p className="mb-5">About</p>
                  <p className="mb-5">Service</p>
                  <p className="mb-5">Contact</p>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};
