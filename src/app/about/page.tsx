import React from "react";
import Image from "next/image";
import Link from "next/link";

function About() {
  return (
    <div className="bg-main min-h-screen w-full">
      <div className="ml-20 py-2">
        <Link href="/">
          <button className="text-white font-sans font-semibold transform transition-transform duration-500 ease-in-out hover:scale-110">
            Back to main
          </button>
        </Link>
      </div>
      <div className="flex justify-center">
        <div className="w-3/4 flex flex-col px-20 py-2 text-white ">
          <p className="text-[40px] text-white flex justify-center text-center font-sans font-semibold">
            About Me
          </p>
          <div className="flex gap-x-5 w-full">
            <div className="w-1/3">
              <Image
                alt="image"
                src={"/teaching.jpeg"}
                width={300}
                height={300}
              />
              <div className="flex mt-10">
                <Image
                  alt="image"
                  src={"/catan.png"}
                  width={150}
                  height={150}
                />
                <Image
                  alt="image"
                  src={"/chess.webp"}
                  width={150}
                  height={150}
                />
              </div>
              <Image
                alt="image"
                src={"/gtrilogo.png"}
                width={300}
                height={300}
                className="mt-10"
              />
            </div>
            <p className="text-[18px] text-white font-sans font-semibold w-2/3">
              Hi, I&rsquo;m Wen! I&rsquo;m a senior at Cornell University,
              majoring in Computer Science. I&rsquo;m a passionate software
              developer specializing in full-stack development, with extensive
              experience building robust and dynamic web applications. Outside
              of coding, I love playing board games like chess and Catan,
              staying active through running, and playing pickleball. I&rsquo;m
              always eager to learn, collaborate, and create impactful digital
              solutions. Currently, I am interested in computer systems and
              software engineering. <br></br>
              <br></br>
              While on campus, I am involved with Cornell Web Dev, a student
              organization for web developers. It is a place for web developers
              new or experienced to come together and create amazing web
              applications that they are passionate about. Currently I am part
              of the workshop team, where I prepare and teach HTML, CSS, and
              Javascript to students that are interested in learn and picking up
              web development. <br></br>
              <br></br>
              In the past I have worked in the ELSYS division of Georgia Tech
              Research Institute. While working at Georgia Tech Research
              Institute as a research intern I was tasked with creating web
              interfaces that meant clients&rsquo; needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
