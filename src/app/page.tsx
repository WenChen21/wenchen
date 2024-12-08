"use client";
import Nav from "./components/nav";
import Image from "next/image";
import Section1 from "./components/section1";
import { FaJsSquare } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";

export default function Home() {
  return (
    <div className="bg-main">
      <div className="flex flex-row">
        <div
          id="section-1"
          className="flex w-5/6 flex-col justify-center gap-y-40"
        >
          <Section1 />
          <div className="flex items-center flex-col mt-[5%]">
            <div>
              <div className="w-full min-h-[300px]">
                <p className="text-[32px] text-center text-white font-sans font-bold">
                  Education
                </p>
                <div className="flex gap-x-10 mt-[5%]">
                  <div className="flex flex-col gap-y-4 w-2/5">
                    <Image
                      alt="cornell"
                      src={"/cornell.png"}
                      width={300}
                      height={200}
                    />
                  </div>
                  <div className="flex flex-col w-full justify-center items-center">
                    <p className="text-white text-[16px] text-center font-bold w-3/5">
                      Expected Graduation: May 2025
                    </p>
                    <p className="text-white text-[16px] text-center font-bold w-3/5">
                      Major: Computer Science
                    </p>
                    <p className="text-white text-[16px] text-center font-bold w-3/5">
                      Minor: Applied Economics
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-4/5 min-h-fit" id="section-2">
              <p className="text-[32px] text-center text-white font-sans font-bold">
                Work Experience
              </p>
              <div className="flex gap-x-10 mt-[5%]">
                <div className="flex flex-col gap-y-4 w-2/5">
                  <Image
                    alt="experience 1"
                    src={"/gtrilogo.png"}
                    width={300}
                    height={200}
                  />
                  <p className="text-white text-[16px] text-center font-bold">
                    Skills
                  </p>
                  <div className="flex gap-x-10">
                    <FaJsSquare className="bg-yellow-500 text-[36px] text-black" />
                    <SiTypescript className="bg-blue-500 text-[36px] text-black" />
                    <FaHtml5 className="bg-orange-500 text-[36px] text-black" />
                    <FaCss3Alt className="bg-blue-600 text-[36px] text-black" />
                  </div>
                </div>
                <p className="text-white text-[16px] text-center font-bold w-3/5">
                  Worked in the ELSYS division of Georgia Tech Research
                  Institute. Created and catered web interfaces for clients.
                </p>
              </div>
            </div>
            <div className="w-4/5 min-h-screen" id="section-3">
              <p className="text-[32px] text-center text-white font-sans font-bold">
                Project Experience
              </p>
              <div className="flex gap-x-10 mt-[5%] w-full">
                <div className="w-2/5">
                  <div className="flex flex-col gap-y-4">
                    <Image
                      alt="experience 1"
                      src={"/webdev.svg"}
                      width={300}
                      height={200}
                    />
                    <p className="text-white text-[16px] text-center font-bold">
                      Skills
                    </p>
                    <div className="flex gap-x-10">
                      <SiTypescript className="bg-blue-500 text-[36px] text-black" />
                      <FaHtml5 className="bg-orange-500 text-[36px] text-black" />
                      <FaCss3Alt className="bg-blue-600 text-[36px] text-black" />
                    </div>
                  </div>
                </div>
                <p className="text-white text-[16px] text-center font-semibold w-3/5">
                  An organization for likeminded web developers who want to
                  create amazing web projects. Taught workshops to students
                  about HTML, CSS, and Javascript. Worked on projects that
                  benefited the Cornell community.
                </p>
              </div>
              <div className="flex gap-x-10 mt-[5%] w-full">
                <div className="w-2/5">
                  <div className="flex flex-col gap-y-4">
                    <Image
                      alt="experience 1"
                      src={"/roomie.png"}
                      width={300}
                      height={200}
                    />
                    <p className="text-white text-[16px] text-center font-bold">
                      Skills
                    </p>
                    <div className="flex gap-x-10">
                      <FaJsSquare className="bg-yellow-500 text-[36px] text-black" />
                      <FaHtml5 className="bg-orange-500 text-[36px] text-black" />
                      <FaCss3Alt className="bg-blue-600 text-[36px] text-black" />
                    </div>
                  </div>
                </div>
                <p className="text-white text-[16px] text-center font-semibold w-3/5">
                  Worked on a roommate matching service to match Cornell
                  students who are looking for roommates and housing in one
                  place. Utilizing Supabase, NodeJs, and ExpressJs to handle
                  server calls and database requests, and Javascript, HTML, and
                  TailwindCSS for frontend
                </p>
              </div>
            </div>
          </div>
        </div>
        <Nav />
      </div>
    </div>
  );
}
