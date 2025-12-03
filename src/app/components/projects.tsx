"use client";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Legal Assistant Chatbot",
      description:
        "A specialized AI-powered legal assistant designed to inform people who want to self-represent in NYPD cases and proceedings at the New York Office of Administrative Trials and Hearings (OATH). The application leverages Retrieval Augmented Generation (RAG) to provide accurate, context-aware legal information based on relevant case law and procedures.",
      image: "/legal-assistant.png",
      technologies: [
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "OpenAI API",
        "Supabase",
      ],
      githubUrl: "#",
      liveUrl: "https://legal-assistant-one-kappa.vercel.app/",
      featured: true,
    },
    {
      title: "Chirp - Emoji Message Board",
      description:
        "A Twitter-like message board using only emojis, built with the T3 stack. Features real-time messaging, user authentication, and efficient data handling with middleware. Migrated from PlanetScale to Supabase for cost optimization.",
      image: "/chirplogo.png",
      technologies: [
        "TypeScript",
        "React",
        "Next.js",
        "Prisma",
        "tRPC",
        "Supabase",
        "TailwindCSS",
      ],
      githubUrl: "https://github.com/WenChen21/chirp",
      liveUrl: "https://chirp-mu-three.vercel.app/",
      featured: true,
    },
    {
      title: "Dog Stride Prediction Model",
      description:
        "A machine learning project that predicts dog behavior based on stride measurements. Implemented Random Forest algorithm with rigorous data preprocessing, achieving 86% prediction accuracy through iterative optimization.",
      image: "/dog.png",
      technologies: [
        "Python",
        "Scikit-Learn",
        "Pandas",
        "NumPy",
        "Machine Learning",
      ],
      githubUrl: "https://github.com/WenChen21/kagglecompetition",
      liveUrl: "#",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            A collection of projects that showcase my technical skills and
            problem-solving abilities
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700/50 hover:border-blue-400/30 transition-all duration-300 lg:grid lg:grid-cols-2 gap-8"
            >
              <div className="relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={400}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              </div>

              <div className="p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-400/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4 pt-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
                        project.githubUrl === "#"
                          ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                          : "bg-gray-700 hover:bg-gray-600 text-white"
                      }`}
                      onClick={
                        project.githubUrl === "#"
                          ? (e) => e.preventDefault()
                          : undefined
                      }
                    >
                      <FaGithub />
                      <span>
                        {project.githubUrl === "#"
                          ? "Code (Private)"
                          : "View Code"}
                      </span>
                    </a>
                  )}
                  {project.liveUrl && project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                    >
                      <FaExternalLinkAlt />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center space-x-2 bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-lg transition-all duration-200 font-medium"
          >
            <span>Learn More About All Projects</span>
            <FaExternalLinkAlt className="text-sm" />
          </Link>
        </div>
      </div>
    </section>
  );
}
