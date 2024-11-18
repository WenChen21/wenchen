import React from "react";

function Nav() {
  return (
    <div className="fixed right-0 top-0 h-screen text-base w-1/6 flex items-center justify-center bg-second">
      <div className="w-full text-center flex flex-col gap-y-10">
        <p>Home</p>
        <p>About</p>
        <p>Work Experience</p>
        <p>Resume</p>
      </div>
    </div>
  );
}

export default Nav;
