import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaGraduationCap, FaCode, FaGamepad } from "react-icons/fa";

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link 
            href="/"
            className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
          >
            <FaArrowLeft />
            <span>Back to Home</span>
          </Link>
        </div>

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h1>
          <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            Learn more about my journey, interests, and what drives my passion for technology
          </p>
        </div>

        <div className="space-y-16">
          {/* Main About Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="text-gray-300 text-lg leading-relaxed space-y-4">
                <p>
                  I&apos;m a senior at Cornell University majoring in Computer Science, 
                  with a deep passion for creating robust and dynamic web applications. 
                  My expertise spans full-stack development, with particular interests 
                  in computer systems and software engineering.
                </p>
                <p>
                  Throughout my academic journey, I&apos;ve gained extensive experience 
                  in modern web technologies, database management, and machine learning. 
                  I enjoy tackling complex problems and building solutions that make 
                  a real impact on people&apos;s lives.
                </p>
                <p>
                  What drives me most is the intersection of technology and human needs. 
                  I believe that great software should not only be technically sound 
                  but also intuitive and accessible to everyone.
                </p>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <Image
                  src="/teaching.jpeg"
                  alt="Wen Chen teaching"
                  width={400}
                  height={500}
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -inset-4 rounded-lg bg-gradient-to-r from-blue-400 to-purple-600 opacity-20 blur-lg"></div>
              </div>
            </div>
          </div>

          {/* Interests Section */}
          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700/50">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              What I&apos;m Passionate About
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <FaCode className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">Development</h3>
                <p className="text-gray-300">
                  Building full-stack applications with modern technologies. 
                  I love the entire process from design to deployment.
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <FaGraduationCap className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">Learning</h3>
                <p className="text-gray-300">
                  Constantly exploring new technologies and methodologies. 
                  Currently diving deep into systems programming and ML.
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <FaGamepad className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">Recreation</h3>
                <p className="text-gray-300">
                  Strategic games like chess and Catan, staying active through 
                  running and pickleball. Balance is key!
                </p>
              </div>
            </div>
          </div>

          {/* Experience Highlights */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              My Journey
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                <div className="flex items-center space-x-4 mb-4">
                  <Image
                    src="/cornell.png"
                    alt="Cornell University"
                    width={60}
                    height={60}
                    className="rounded-lg bg-white p-2"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-white">Cornell University</h3>
                    <p className="text-blue-400">Computer Science Student</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  Pursuing my passion for computer science at one of the world&apos;s 
                  leading institutions. Focusing on systems programming, software 
                  engineering, and machine learning.
                </p>
              </div>
              
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                <div className="flex items-center space-x-4 mb-4">
                  <Image
                    src="/gtrilogo.png"
                    alt="Georgia Tech Research Institute"
                    width={60}
                    height={60}
                    className="rounded-lg bg-white p-2"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-white">GTRI Research</h3>
                    <p className="text-blue-400">Research Assistant</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  Conducted research in advanced computing systems, contributing 
                  to innovative projects in technology development and gaining 
                  valuable research experience.
                </p>
              </div>
            </div>
          </div>

          {/* Personal Interests Gallery */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Beyond Coding
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-slate-800/50 p-4 rounded-lg text-center">
                <Image
                  src="/chess.webp"
                  alt="Chess"
                  width={150}
                  height={150}
                  className="rounded-lg w-full h-32 object-cover mb-3"
                />
                <p className="text-gray-300 font-medium">Chess Strategy</p>
              </div>
              
              <div className="bg-slate-800/50 p-4 rounded-lg text-center">
                <Image
                  src="/catan.png"
                  alt="Catan"
                  width={150}
                  height={150}
                  className="rounded-lg w-full h-32 object-cover mb-3"
                />
                <p className="text-gray-300 font-medium">Board Games</p>
              </div>
              
              <div className="bg-slate-800/50 p-4 rounded-lg text-center">
                <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-lg w-full h-32 flex items-center justify-center mb-3">
                  <span className="text-white text-4xl">🏃‍♂️</span>
                </div>
                <p className="text-gray-300 font-medium">Running</p>
              </div>
              
              <div className="bg-slate-800/50 p-4 rounded-lg text-center">
                <div className="bg-gradient-to-br from-yellow-400 to-red-500 rounded-lg w-full h-32 flex items-center justify-center mb-3">
                  <span className="text-white text-4xl">🏓</span>
                </div>
                <p className="text-gray-300 font-medium">Pickleball</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-slate-800/50 rounded-xl p-8 border border-slate-700/50">
            <h2 className="text-2xl font-bold text-white mb-4">
              Let&apos;s Connect!
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              I&apos;m always excited to meet new people, discuss technology, 
              or explore potential collaborations. Feel free to reach out!
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                href="/#contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 font-medium"
              >
                Get In Touch
              </Link>
              <a
                href="/WenChenResume25Database.pdf"
                download
                className="bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-6 py-3 rounded-lg transition-all duration-200 font-medium"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
