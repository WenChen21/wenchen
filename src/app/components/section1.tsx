import React from "react";
import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Button from "@mui/material/Button";
import Link from "next/link";
import DownloadResumeButton from "./downloadbutton";

function Section1() {
  return (
    <div className="flex justify-center relative top-[10%]">
      <div className="w-full flex justify-center ">
        <div className="flex justify-around w-full">
          <div className="w-2/3">
            <p className="text-[40px] text-center text-white font-sans font-semibold animate-fadeIn">
              Welcome
            </p>

            <div className="flex justify-center mt-[10%]">
              <p className="text-[16px] text-center  text-white font-sans font-semibold break-words w-2/3">
                Hi, I&rsquo;m Wen! I&rsquo;m majoring in Computer Science in the
                Masters of Engineering Program at Cornell University. I&rsquo;m
                a passionate software developer specializing in full-stack
                development, with extensive experience building robust and
                dynamic web applications. Outside of coding, I love playing
                board games like chess and Catan, staying active through
                running, and playing pickleball. I&rsquo;m always eager to
                learn, collaborate, and create impactful digital solutions.
                Currently, I am interested in computer systems and software
                engineering. Feel free to reach out!
              </p>
            </div>
            <div className="flex justify-center gap-x-8">
              <a
                href="https://www.linkedin.com/in/wenchen21"
                className="text-white bg-blue-600 rounded-sm p-2 hover:shadow-lg hover:scale-110"
              >
                <FaLinkedinIn className="text-[24px]" />
              </a>
              <a
                href="https://github.com/wenChen21"
                className="text-black bg-white rounded-sm p-2 hover:shadow-lg hover:scale-110"
              >
                <FaGithub className="text-[24px]" />
              </a>
              <div>
                <DownloadResumeButton />
              </div>
              <Link href="/about">
                <Button
                  variant="contained"
                  className="hover:scale-110 hover:shadow-lg"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          <div className="w-1/3">
            <Image
              alt="image"
              src={"/wenchen.jpg"}
              width={200}
              height={200}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
