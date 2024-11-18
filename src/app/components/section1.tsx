import React from "react";
import Image from "next/image";
function Section1() {
  return (
    <div className="w-5/6 flex justify-center relative top-[10%]">
      <div className="w-[70%] flex justify-center ">
        <div className="flex justify-around w-full">
          <div className="">
            <p className="text-[40px] text-center text-white font-sans font-semibold">
              Welcome
            </p>
            <div className="flex justify-center mt-[10%]">
              <p className="text-[16px] text-center  text-white font-sans font-semibold break-words w-2/3">
                Hi my name is Wen! I am a senior studying computer science at
                Cornell
              </p>
            </div>
          </div>

          <div>
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
