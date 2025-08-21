"use client";
import Image from "next/image";

export default function Experience() {
  const experiences = [
    {
      company: "Georgia Tech Research Institute",
      position: "Research Assistant",
      period: "Summer 2024",
      location: "Atlanta, GA",
      description: "Conducted research in advanced computing systems and contributed to innovative projects in technology development.",
      logo: "/gtrilogo.png",
      skills: ["Research", "Data Analysis", "Technical Documentation"]
    },
    {
      company: "Cornell University",
      position: "Teaching Assistant",
      period: "2023 - Present",
      location: "Ithaca, NY", 
      description: "Assisted in teaching computer science courses, mentored students, and helped develop curriculum materials.",
      logo: "/cornell.png",
      skills: ["Teaching", "Mentoring", "Curriculum Development"]
    },
    {
      company: "Cornell Web Development",
      position: "Workshop Instructor",
      period: "2022 - 2023",
      location: "Ithaca, NY",
      description: "Taught workshops to students about HTML, CSS, and JavaScript. Worked on projects that benefited the Cornell community.",
      logo: "/webdev.svg",
      skills: ["HTML", "CSS", "JavaScript", "Teaching"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            My professional journey and contributions across various roles
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-slate-800/50 rounded-xl p-8 border border-slate-700/50 hover:border-blue-400/30 transition-all duration-300"
            >
              <div className="grid md:grid-cols-4 gap-6 items-start">
                <div className="md:col-span-1 flex flex-col items-center space-y-4">
                  <div className="w-24 h-24 bg-white rounded-lg p-2 flex items-center justify-center">
                    <Image
                      src={exp.logo}
                      alt={exp.company}
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-blue-400 text-sm font-medium">{exp.period}</p>
                    <p className="text-gray-400 text-sm">{exp.location}</p>
                  </div>
                </div>
                
                <div className="md:col-span-3 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {exp.position}
                    </h3>
                    <h4 className="text-xl text-blue-400 font-semibold">
                      {exp.company}
                    </h4>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-400/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
