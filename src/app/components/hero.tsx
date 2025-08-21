"use client";
import Image from "next/image";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="text-white space-y-6">
          <div className="space-y-2">
            <p className="text-blue-400 text-lg font-medium">Hello, I&apos;m</p>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Wen Chen
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 font-light">
              Computer Science Student
            </h2>
          </div>
          
          <p className="text-xl text-gray-400 leading-relaxed max-w-lg">
            Senior at Cornell University passionate about full-stack development 
            and creating impactful digital solutions. Currently interested in 
            computer systems and software engineering.
          </p>
          
          <div className="flex items-center space-x-6 pt-4">
            <a
              href="https://www.linkedin.com/in/wenchen21"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 p-3 rounded-lg transition-all duration-200 hover:scale-105"
            >
              <FaLinkedinIn className="text-xl" />
            </a>
            <a
              href="https://github.com/wenChen21"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-600 p-3 rounded-lg transition-all duration-200 hover:scale-105"
            >
              <FaGithub className="text-xl" />
            </a>
            <button 
              onClick={() => {
                const element = document.getElementById("about");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-6 py-3 rounded-lg transition-all duration-200 font-medium"
            >
              Learn More About Me
            </button>
          </div>
        </div>
        
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-blue-400/30 shadow-2xl">
              <Image
                src="/wenchen.jpg"
                alt="Wen Chen"
                width={320}
                height={320}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-400 to-purple-600 opacity-20 blur-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
