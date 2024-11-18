import Nav from "./components/nav";
import Image from "next/image";
import Section1 from "./components/section1";
export default function Home() {
  return (
    <div className="bg-main">
      <div className="flex flex-row">
        <div className="flex w-5/6 flex-col justify-center gap-y-40">
          <Section1 />
          <div className="flex items-center flex-col">
            <div className="w-4/5 min-h-screen">
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
                  
                </div>
                <p className="text-white text-[16px] text-center">
                  Worked in the ELSYS division of Georgia Tech Research
                  Institute. Created and catered web interfaces for clients.
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
