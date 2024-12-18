import React from "react";
import Image from "next/image";
import Link from "next/link";
function Projects() {
  return (
    <div className="bg-main min-h-screen w-full">
      <div className="ml-20 py-2">
        <Link href="/">
          <button className="text-white font-sans font-semibold transform transition-transform duration-500 ease-in-out hover:scale-110">
            Back to main
          </button>
        </Link>
      </div>
      <div className="w-3/4 flex flex-col p-20 items-center text-white mx-auto">
        <p className="text-[40px] text-white flex justify-center text-center font-sans font-semibold">
          Projects
        </p>
        <div className="w-full flex flex-col">
          <div className="w-full flex gap-x-5 ">
            <div className="w-1/3">
              <Image alt="image" src={"/roomie.png"} width={300} height={300} />
            </div>
            <p className="text-[18px] text-white font-sans font-semibold w-2/3">
              Roomie is currently in development and has not been deployed yet.
              You can check it out at the Github link below <br></br>
              <a href="https://github.com/WenChen21/Roomie">
                https://github.com/WenChen21/Roomie
              </a>
            </p>
          </div>
          <div className="w-full flex gap-x-5 ">
            <div className="w-1/3">
              <Image
                alt="image"
                src={"/chirplogo.png"}
                width={150}
                height={150}
              />
            </div>
            <p className="text-[18px] text-white font-sans font-semibold w-2/3">
              Chirp has been deployed but the database may be disabled. You can
              check it out at the Github link below and see a photo of the end
              product below. <br></br>
              <a href="https://github.com/WenChen21/chirp">
                https://github.com/WenChen21/chirp
              </a>
              <Image
                alt="image"
                src={"/chirpwebpage.png"}
                width={600}
                height={600}
              />
            </p>
          </div>
          <div className="w-full flex gap-x-5 ">
            <div className="w-1/3">
              <Image alt="image" src={"/dog.png"} width={200} height={200} />
            </div>
            <p className="text-[18px] text-white font-sans font-semibold w-2/3">
              Some of the things that I did while cleaning the data was getting
              rid of some features that would not matter in the predict such as
              the birthdate of the dog. In addition, some of the fields were not
              valid values so in the process of cleaning I had to figure out how
              to give these invalid values a reasonable value since the data
              might have been corrupted. Finally, I had to decide on the loss
              function to use and split the data into a training set, validation
              set, and then a testing set. Once the model was trained I used it
              to predict on another set of data to a csv file of predictions on
              whether the dog was injured or not. The model can be found at the
              Github link below. <br></br>
              <a href="https://github.com/WenChen21/kagglecompetition">
                https://github.com/WenChen21/kagglecompetition
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
