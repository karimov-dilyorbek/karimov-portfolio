"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Github, Mail } from "lucide-react";
import CosmicBackground from "@/components/CosmicBackground";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-50">
      <CosmicBackground />

      <div className="pointer-events-none fixed right-10 top-20 z-[1] h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />

      <nav
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          isScrolled ? "border-b border-slate-800 bg-slate-950/70 backdrop-blur-md" : "bg-transparent"
        }`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="text-xl font-bold sm:text-3xl max-[440px]:text-[18px]">
            <span className="text-white">{"<"}</span>
            <span className="text-cyan-400">Portfolio</span>
            <span className="text-white">{"/>"}</span>
          </div>

          <div className="flex items-center gap-4 sm:gap-8">
            <a
              href="#about"
              className="text-sm text-slate-300 transition-colors hover:text-cyan-400 sm:text-lg max-[440px]:text-[12px]">
              About Me
            </a>
            <a
              href="#projects"
              className="text-sm text-slate-300 transition-colors hover:text-cyan-400 sm:text-lg max-[440px]:text-[12px]">
              Projects
            </a>
            <a
              href="#contact"
              className="text-sm text-slate-300 transition-colors hover:text-cyan-400 sm:text-lg max-[440px]:text-[12px]">
              Contact
            </a>
            <a
              href="http://www.fiverr.com/s/ljwy47R"
              target="_blank"
              className="text-sm text-slate-300 transition-colors hover:text-cyan-400 sm:text-lg max-[440px]:text-[12px]">
              Fiverr
            </a>
          </div>
        </div>
      </nav>

      <section className="relative z-10 flex min-h-[88vh] items-start justify-center px-6 pt-32 sm:pt-36 md:pt-40">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-6 inline-block rounded-full border border-cyan-500/40 bg-slate-900/30 px-5 py-2 text-sm font-medium text-cyan-400 backdrop-blur animate-badge-glow sm:text-base">
            ✨ Frontend Developer
          </div>

          <h1 className="mb-5 text-4xl font-bold leading-tight sm:text-6xl md:text-7xl">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Karimov Dilyorbek
            </span>
            <br />
            <span className="mt-8 block text-2xl text-white sm:text-4xl md:text-5xl">
              Young Frontend <br /> Developer
            </span>
          </h1>

          <p className="mx-auto max-w-2xl text-base leading-8 text-slate-400 sm:text-xl">
            Hi! I'm a passionate Frontend Developer focused on building responsive and interactive web
            applications. I enjoy turning ideas into clean and functional code using modern technologies.
          </p>
        </div>
      </section>

      <section id="about" className="relative z-10 px-6 pb-16 -mt-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-20 text-center text-4xl font-bold sm:text-5xl md:text-6xl">
            <span className="text-white">About </span>
            <span className="text-cyan-400">Me</span>
          </h2>

          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="mb-6 text-base leading-8 text-slate-300 sm:text-lg">
                I'm Karimov Dilyorbek from Uzbekistan. I started learning frontend development at the age of 16 and
                have been improving my skills through practice and real projects. I mainly work with React,
                Next.js, Tailwind CSS, and JavaScript.
              </p>

              <p className="text-base leading-8 text-slate-300 sm:text-lg">
                I care about clean UI, responsive layouts, and writing code that feels polished and usable. My goal
                is to build websites that look modern and work smoothly on all devices.
              </p>
            </div>

            <div>
              <h3 className="mb-6 text-3xl font-bold text-cyan-400 sm:text-4xl">Skills</h3>

              <div className="flex flex-wrap gap-3">
                {["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "TypeScript"].map((skill) => (
                  <span
                    key={skill}
                    className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 transition hover:border-cyan-400 hover:bg-cyan-500/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="relative z-10 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-14 text-center text-4xl font-bold sm:text-5xl">
            <span className="text-white">Featured </span>
            <span className="text-cyan-400">Projects</span>
          </h2>

          <div className="grid gap-8 lg:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-xl border border-cyan-500/50 bg-transparent px-6 py-3 text-base font-semibold text-cyan-400 transition hover:bg-cyan-500/10 hover:text-white">
              All Projects
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <section id="contact" className="relative z-10 px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-8 text-4xl font-bold sm:text-5xl">
            <span className="text-cyan-400">Contact</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="mailto:karimovdilyorbekk@gmail.com?subject=Portfolio%20Contact"
              className="flex items-center gap-3 rounded-lg border border-cyan-500/30 px-6 py-3 text-cyan-400 transition-all hover:border-cyan-500 hover:bg-cyan-500/10">
              <Mail className="h-5 w-5" />
              <span>Email</span>
            </a>

            <a
              href="https://github.com/karimov-dilyorbek"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg border border-cyan-500/30 px-6 py-3 text-cyan-400 transition-all hover:border-cyan-500 hover:bg-cyan-500/10">
              <Github className="h-5 w-5" />
              <span>GitHub</span>
            </a>
          </div>

          <div className="mt-12">
            <a
              href="/Karimov_Dilyorbek_resume.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-3 font-semibold text-white transition hover:from-cyan-600 hover:to-blue-600">
              Resume Download
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-slate-800 px-6 py-8 text-center text-slate-400">
        <div className="mx-auto max-w-7xl">
          <p>© 2026 Karimov Dilyorbek.</p>
        </div>
      </footer>
    </div>
  );
}
