import React from "react";

const Nav: React.FC = () => {
  // const section2Ref = useRef<HTMLDivElement | null>(null);
  // const section3Ref = useRef<HTMLDivElement | null>(null);

  const scrollToSectionById = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed right-0 top-0 h-screen text-base w-1/6 flex items-center justify-center bg-second">
      <div className="w-full text-center flex flex-col gap-y-10">
        <p
          className="hover:cursor-pointer text-black"
          onClick={() => scrollToSectionById("section-1")}
        >
          About
        </p>
        <p
          className="hover:cursor-pointer text-black"
          onClick={() => scrollToSectionById("section-3")}
        >
          Project Experience
        </p>
      </div>
    </div>
  );
};

export default Nav;
