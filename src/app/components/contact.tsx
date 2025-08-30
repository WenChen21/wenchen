"use client";
import {
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            I&apos;m always open to discussing new opportunities,
            collaborations, or just having a conversation about technology and
            innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Let&apos;s Connect
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                Whether you&apos;re looking for a passionate developer to join
                your team, have a project idea you&apos;d like to collaborate
                on, or simply want to connect with a fellow tech enthusiast,
                I&apos;d love to hear from you!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <FaEnvelope className="text-white text-xl" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Email</h4>
                  <p className="text-gray-400">wc467@cornell.edu</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <FaMapMarkerAlt className="text-white text-xl" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Location</h4>
                  <p className="text-gray-400">
                    Staten Island, NY (Open to relocation)
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="text-white font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/wenchen21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 p-3 rounded-lg transition-all duration-200 hover:scale-105"
                >
                  <FaLinkedinIn className="text-white text-xl" />
                </a>
                <a
                  href="https://github.com/wenChen21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-gray-600 p-3 rounded-lg transition-all duration-200 hover:scale-105"
                >
                  <FaGithub className="text-white text-xl" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700/50">
            <h3 className="text-2xl font-bold text-white mb-6">
              Quick Facts About Me
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">
                  <span className="font-semibold text-white">Currently:</span>{" "}
                  MENG at Cornell University
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">
                  <span className="font-semibold text-white">Interests:</span>{" "}
                  Computer Systems, Software Engineering
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">
                  <span className="font-semibold text-white">Hobbies:</span>{" "}
                  Chess, Board Games, Running, Pickleball
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">
                  <span className="font-semibold text-white">Goal:</span>{" "}
                  Creating impactful digital solutions
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-700">
              <a
                href="/WenChenResume25Database.pdf"
                download
                className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-lg transition-colors duration-200 font-medium"
              >
                Download My Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
