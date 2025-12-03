import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "Legal Assistant Chatbot",
      description:
        "A specialized AI-powered legal assistant designed to inform people who want to self-represent in NYPD cases and proceedings at the New York Office of Administrative Trials and Hearings (OATH). The application will offer general legal things to do and legal precedents for their queries. The application leverages Retrieval Augmented Generation (RAG) to provide accurate, context-aware legal information based on relevant case law and procedures.",
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
      status: "Deployed",
      features: [
        "AI-powered legal guidance",
        "NYPD & OATH case support",
        "Retrieval Augmented Generation (RAG)",
        "Context-aware responses",
        "Relevant case law citation",
      ],
    },
    {
      title: "Chirp - Emoji Message Board",
      description:
        "Chirp is a Twitter-like message board using only emojis, built with the T3 stack. This project showcases full-stack development skills, including handling data flow between frontend and backend, working with middleware, and efficient data handling. The application was migrated from PlanetScale to Supabase for cost optimization.",
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
      status: "Deployed",
      features: [
        "Emoji-only messaging system",
        "Real-time updates with tRPC",
        "User authentication",
        "Database migration from MySQL to PostgreSQL",
        "Responsive design",
      ],
      screenshots: ["/chirpwebpage.png"],
    },
    {
      title: "Dog Stride Prediction Model",
      description:
        "A machine learning project that predicts dog behavior based on stride measurements. The predictive model was trained using Random Forest algorithm with rigorous data preprocessing and cleaning methods. Through iterative optimization and hyperparameter tuning, achieved approximately 86% prediction accuracy.",
      image: "/dog.png",
      technologies: [
        "Python",
        "Scikit-Learn",
        "Pandas",
        "NumPy",
        "Random Forest",
      ],
      githubUrl: "https://github.com/WenChen21/kagglecompetition",
      status: "Completed",
      features: [
        "Data preprocessing and cleaning",
        "Random Forest algorithm implementation",
        "Hyperparameter tuning",
        "86% prediction accuracy",
        "Performance assessment and optimization",
      ],
    },
  ];

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
            All Projects
          </h1>
          <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            A detailed look at my projects, showcasing technical skills and
            problem-solving abilities
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700/50 hover:border-blue-400/30 transition-all duration-300"
            >
              <div className="lg:grid lg:grid-cols-2 gap-8">
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        project.status === "Deployed"
                          ? "bg-green-900/50 text-green-300 border border-green-400/20"
                          : project.status === "In Development"
                          ? "bg-yellow-900/50 text-yellow-300 border border-yellow-400/20"
                          : "bg-blue-900/50 text-blue-300 border border-blue-400/20"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="p-8 space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-4">
                      {project.title}
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Key Features
                    </h3>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start space-x-2"
                        >
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Technologies Used
                    </h3>
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
                  </div>

                  <div className="flex space-x-4 pt-4">
                    {project.githubUrl && project.githubUrl !== "#" && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                      >
                        <FaGithub />
                        <span>View Code</span>
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

              {project.screenshots && (
                <div className="p-8 border-t border-slate-700/50">
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Screenshots
                  </h3>
                  <div className="grid gap-4">
                    {project.screenshots.map((screenshot, screenshotIndex) => (
                      <Image
                        key={screenshotIndex}
                        src={screenshot}
                        alt={`${project.title} screenshot`}
                        width={800}
                        height={500}
                        className="rounded-lg border border-slate-600"
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
