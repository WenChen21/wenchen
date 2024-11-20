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
            <div className="w-4/5 min-h-screen" id="section-2">
              <p className="text-[32px] text-center text-white font-sans font-bold">
                Work Experience
              </p>
              <div className="flex gap-x-10 mt-[5%]">
                <div className="flex flex-col gap-y-4">
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
                    <FaJsSquare className="bg-yellow-500 text-[36px]" />
                    <SiTypescript className="bg-blue-500 text-[36px]" />
                    <FaHtml5 className="bg-orange-500 text-[36px]" />
                    <FaCss3Alt className="bg-blue-600 text-[36px]" />
                  </div>
                </div>
                <p className="text-white text-[16px] text-center">
                  Worked in the ELSYS division of Georgia Tech Research
                  Institute. Created and catered web interfaces for clients.
                </p>
              </div>
            </div>
            <div className="w-4/5 min-h-screen" id="section-3">
              <p className="text-[32px] text-center text-white font-sans font-bold">
                Project Experience
              </p>
              <div className="flex gap-x-10 mt-[5%]">
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
                    <FaJsSquare className="bg-yellow-500 text-[36px]" />
                    <FaHtml5 className="bg-orange-500 text-[36px]" />
                    <FaCss3Alt className="bg-blue-600 text-[36px]" />
                  </div>
                </div>
                <p className="text-white text-[16px] text-center">
                  An organization for likeminded web developers who want to
                  create amazing web projects. Taught workshops to students
                  about HTML, CSS, and Javascript. Worked on projects that had
                  impacts.
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
