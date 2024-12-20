"use client";
import Nav from "./components/nav";
import Section1 from "./components/section1";
import Projectdesc from "./components/projectdesc";
import Link from "next/link";
import { Button } from "@mui/material";
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
            {/* <div className="w-4/5 min-h-fit" id="section-2">
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
                
              </div>
            </div> */}
            <div className="w-4/5 min-h-screen mb-10" id="section-3">
              <p className="text-[32px] text-center text-white font-sans font-bold">
                Project Experience
              </p>
              {/* <Projectdesc
                image={"/webdev.svg"}
                text="An organization for likeminded web developers who want to create amazing
                web projects. Taught workshops to students about HTML, CSS, and
                Javascript. Worked on projects that benefited the Cornell community."
              /> */}
              <Projectdesc
                image={"/roomie.png"}
                text="Worked and developed a roommate matching service tailored for Cornell students, integrating both roommate and housing search functionalities into a single platform. The backend was implemented using Supabase, Node.js, and Express.js to manage server-side logic and database operations, while the frontend was built with JavaScript, HTML, and TailwindCSS to ensure a responsive and user-friendly interface. This project enhanced my technical skills in handling user authentication, crafting complex database queries, and designing a cohesive full-stack application that bridges the gap between backend services and the user interface."
                skills={["Javascript", "HTML", "CSS"]}
              />
              <Projectdesc
                image={"/chirplogo.png"}
                text="Chirp is an individual project that is a message board similar to Twitter,
                but only using emojis. Utilized the T3 stack, which includes TailwindCSS, 
                Typescript, Prisma, TRPC, and PlanetScale. Worked on both the frontend and backend to create a 
                dynamic and interactive web application. Throughout this project, I learned a 
                great deal about full-stack development, including handling the flow of information
                between the frontend and backend. I gained valuable experience working with middleware, 
                ensuring efficient data handling, and displaying the information seamlessly to users. Since completing this project, 
                I have migrated the database from PlanetScale to Supabase from a MySQL database to a Postgresql database to be more
                cost effective."
                skills={["Typescript", "HTML", "CSS"]}
              />
              <Projectdesc
                image={"/dog.png"}
                text="For this class project, I independently developed a predictive model 
                that incorporated machine learning techniques alongside rigorous data preprocessing 
                and cleaning methods. The predictive model was trained on a dataset containing measurements of 
                dog strides, and I utilized the Random Forest algorithm to train the model and tune 
                the parameters to improve its performance. Through iterative optimization, I was able to 
                reduce the error term and achieve a prediction accuracy of approximately 86%. 
                This project provided me with valuable experience in the application of machine learning principles, 
                including data preparation, model training, hyperparameter tuning, and performance assessment."
                skills={["Python", "Scikit"]}
              />
              <div className="flex flex-col justify-center mt-10 items-center gap-y-3">
                <p className="text-white">
                  To learn more about my projects, click the button below.
                </p>
                <Link href="/projects">
                  <Button variant="contained">Learn More</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Nav />
      </div>
    </div>
  );
}
