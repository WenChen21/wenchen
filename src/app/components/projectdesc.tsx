import React from "react";
import Image from "next/image";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiScikitlearn } from "react-icons/si";
type props = {
  image: string;
  text: string;
  skills: string[];
};
function Projectdesc(props: props) {
  return (
    <div className="flex gap-x-10 mt-[5%] w-full">
      <div className="w-2/5">
        <div className="flex flex-col gap-y-4 items-center">
          <Image alt="image" src={props.image} width={200} height={150} />
          <p className="text-white text-[16px] text-center font-bold">Skills</p>
          <div className="flex gap-x-10 justify-center">
            {props.skills.includes("Typescript") ? (
              <SiTypescript className="bg-blue-500 text-[36px] text-black" />
            ) : (
              <></>
            )}
            {props.skills.includes("HTML") ? (
              <FaHtml5 className="bg-orange-500 text-[36px] text-black" />
            ) : (
              <></>
            )}
            {props.skills.includes("CSS") ? (
              <FaCss3Alt className="bg-blue-600 text-[36px] text-black" />
            ) : (
              <></>
            )}
            {props.skills.includes("Javascript") ? (
              <SiJavascript className="bg-yellow-500 text-[36px] text-black" />
            ) : (
              <></>
            )}
            {props.skills.includes("Python") ? (
              <FaPython className="bg-yellow-500 text-[36px] text-black" />
            ) : (
              <></>
            )}
            {props.skills.includes("Scikit") ? (
              <SiScikitlearn className="bg-yellow-500 text-[36px] text-black" />
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      <p className="text-white text-[16px] text-center font-semibold w-3/5">
        {props.text}
      </p>
    </div>
  );
}

export default Projectdesc;
