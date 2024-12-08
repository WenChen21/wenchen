import React from "react";
import Image from "next/image";
function Section1() {
  return (
    <div className="flex justify-center relative top-[10%]">
      <div className="w-full flex justify-center ">
        <div className="flex justify-around w-full">
          <div className="w-2/3">
            <p className="text-[40px] text-center text-white font-sans font-semibold">
              Welcome
            </p>
            <div className="flex justify-center mt-[10%]">
              <p className="text-[16px] text-center  text-white font-sans font-semibold break-words w-2/3">
                Hi my name is Wen! I am a senior studying computer science at
                Cornell. Outside of class I enjoy playing board games such as
                chess and Catan. I like running and playing pickleball.
              </p>
            </div>
            <div className="flex justify-center">
              <Image src={"/catan.png"} alt="catan" width={200} height={200} />
              <Image src={"/chess.webp"} alt="chess" width={200} height={200} />
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
