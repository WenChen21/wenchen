"use client";
import Hero from "./components/hero";
import About from "./components/about";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Contact from "./components/contact";
import Navigation from "./components/navigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
