"use client";
import { 
  SiJavascript, 
  SiTypescript, 
  SiPython, 
  SiReact, 
  SiNextdotjs, 
  SiNodedotjs,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiSupabase,
  SiPrisma,
  SiGit,
  SiVercel,
  SiExpress,
  SiScikitlearn
} from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaDatabase } from "react-icons/fa";

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
        { name: "Python", icon: SiPython, color: "text-green-400" },
        { name: "HTML5", icon: FaHtml5, color: "text-orange-400" },
        { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: SiReact, color: "text-cyan-400" },
        { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-300" },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
        { name: "Express.js", icon: SiExpress, color: "text-gray-300" },
        { name: "Prisma", icon: SiPrisma, color: "text-indigo-400" },
      ]
    },
    {
      title: "Database",
      skills: [
        { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-600" },
        { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
        { name: "Supabase", icon: SiSupabase, color: "text-green-400" },
        { name: "Database Design", icon: FaDatabase, color: "text-gray-400" },
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", icon: SiGit, color: "text-orange-500" },
        { name: "Vercel", icon: SiVercel, color: "text-white" },
        { name: "Scikit-Learn", icon: SiScikitlearn, color: "text-orange-400" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-blue-400/30 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-colors duration-200"
                  >
                    <skill.icon className={`text-2xl ${skill.color}`} />
                    <span className="text-gray-300 font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700/50">
            <h3 className="text-2xl font-bold text-white mb-4">
              Areas of Interest
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Full-Stack Development",
                "Software Engineering",
                "Machine Learning",
                "Web Technologies"
              ].map((interest, index) => (
                <span
                  key={index}
                  className="bg-blue-900/30 text-blue-300 px-4 py-2 rounded-full text-sm border border-blue-400/20 hover:bg-blue-900/50 transition-colors duration-200"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
