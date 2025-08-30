"use client";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="text-gray-300 text-lg leading-relaxed space-y-4">
              <p>
                I&apos;m a senior at Cornell University majoring in Computer
                Science, with a passion for creating robust and dynamic web
                applications. My expertise spans full-stack development, with
                particular interests in computer systems and software
                engineering.
              </p>
              <p>
                Throughout my academic journey, I&apos;ve gained extensive
                experience in modern web technologies, database management, and
                machine learning. I enjoy tackling complex problems and building
                solutions that make a real impact.
              </p>
              <p>
                When I&apos;m not coding, you can find me playing board games
                like chess and Catan, staying active through running, or
                enjoying a competitive game of pickleball. I&apos;m always eager
                to learn new technologies and collaborate on innovative
                projects.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="space-y-2">
                <h4 className="text-blue-400 font-semibold">Education</h4>
                <p className="text-gray-300">Cornell University</p>
                <p className="text-gray-400 text-sm">B.S. Computer Science</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-blue-400 font-semibold">Location</h4>
                <p className="text-gray-300">Staten Island, NY</p>
                <p className="text-gray-400 text-sm">Open to relocation</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-800/50 p-4 rounded-lg">
                <Image
                  src="/teaching.jpeg"
                  alt="Teaching experience"
                  width={200}
                  height={150}
                  className="rounded-lg w-full h-32 object-cover"
                />
                <p className="text-gray-300 text-sm mt-2 text-center">
                  Teaching & Mentoring
                </p>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-lg">
                <Image
                  src="/cornell.png"
                  alt="Cornell University"
                  width={200}
                  height={150}
                  className="rounded-lg w-full h-32 object-contain bg-white"
                />
                <p className="text-gray-300 text-sm mt-2 text-center">
                  Cornell University
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-800/50 p-4 rounded-lg">
                <Image
                  src="/chess.webp"
                  alt="Chess"
                  width={200}
                  height={150}
                  className="rounded-lg w-full h-32 object-cover"
                />
                <p className="text-gray-300 text-sm mt-2 text-center">
                  Chess Enthusiast
                </p>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-lg">
                <Image
                  src="/catan.png"
                  alt="Catan"
                  width={200}
                  height={150}
                  className="rounded-lg w-full h-32 object-cover"
                />
                <p className="text-gray-300 text-sm mt-2 text-center">
                  Board Games
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action to visit full about page */}
        <div className="text-center mt-12">
          <Link
            href="/about"
            className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-all duration-200 font-medium"
          >
            <span>Learn More About Me</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
