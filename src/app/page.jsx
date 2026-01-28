"use client";

import { useEffect, useRef, useState } from "react";
import { Github, Linkedin, Mail, ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

function CosmicBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = [];

    for (let i = 0; i < 150; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5,
        opacity: Math.random() * 0.5 + 0.5,
        speed: Math.random() * 0.3 + 0.1,
      });
    }

    let animationId;

    const animate = () => {
      ctx.fillStyle = "rgba(5, 15, 40, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        star.opacity += (Math.random() - 0.5) * 0.05;
        star.opacity = Math.max(0.2, Math.min(1, star.opacity));

        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = -10;
          star.x = Math.random() * canvas.width;
        }

        ctx.fillStyle = `rgba(96, 165, 250, ${star.opacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }} />;
}

function GlowingOrb() {
  return (
    <div className="fixed top-20 right-10 w-96 h-96 pointer-events-none opacity-20">
      <div className="w-full h-full rounded-full bg-blue-500 blur-3xl animate-pulse" />
    </div>
  );
}

function ProjectCard({ title, description, tags, link }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative overflow-hidden rounded-lg border border-slate-700 bg-slate-900/50 backdrop-blur p-6 hover:border-cyan-500/50 transition-all duration-300">
      <div
        className={`absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />

      <div className="relative z-10">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{title}</h3>
        <p className="text-slate-400 mb-4 text-sm leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-cyan-300 border border-cyan-500/30">
              {tag}
            </span>
          ))}
        </div>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm font-medium group/link">
          Open
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
}

function SkillBadge({ skill }) {
  return (
    <div className="px-4 py-2 rounded-full border border-cyan-500/30 bg-blue-500/10 text-cyan-300 text-sm hover:border-cyan-400 hover:bg-blue-500/20 transition-all duration-300 inline-block">
      {skill}
    </div>
  );
}

export default function Portfolio() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Modern e-commerce platform Next.js va TypeScript bilan qurilgan. Real-time inventory management va advanced filtering features.",
      tags: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
      link: "#",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management application. Real-time updates, team collaboration, va advanced analytics features.",
      tags: ["React", "Node.js", "MongoDB", "WebSocket"],
      link: "#",
    },
    {
      title: "AI Chat Interface",
      description:
        "Cutting-edge AI chat application. Advanced NLP processing, custom model training, va real-time message streaming.",
      tags: ["Next.js", "OpenAI", "React", "TailwindCSS"],
      link: "#",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Enterprise-grade analytics dashboard. Real-time data visualization, custom reports, va multi-user collaboration.",
      tags: ["React", "D3.js", "GraphQL", "Firebase"],
      link: "#",
    },
  ];

  const skills = ["Html", "Css", "React", "Next.js", "JavaScript", "TailwindCSS", "TypeScript"];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 overflow-hidden">
      <CosmicBackground />
      <GlowingOrb />

      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-slate-950/80 backdrop-blur border-b border-slate-800" : "bg-transparent"
        }`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">
            <span className="text-white">{"<"}</span>
            <span className="text-cyan-400">Portfolio</span>
            <span className="text-white">{"/>"}</span>
          </div>
          <div className="flex gap-8 items-center">
            <a href="#about" className="text-slate-300 hover:text-cyan-400 transition-colors">
              About Me
            </a>
            <a href="#projects" className="text-slate-300 hover:text-cyan-400 transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-slate-300 hover:text-cyan-400 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <section className="min-h-screen relative flex items-center justify-center pt-20 -mb-15">
        <div className="max-w-5xl mx-auto px-6 text-center z-10">
          <div className="mb-8 inline-block">
            <div className="px-4 py-2 rounded-full border border-cyan-500/50 text-cyan-400 text-sm font-medium backdrop-blur animate-pulse">
              ✨ Frontend Developer
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
              Karimov Dilyorbek
            </span>
            <br />
            <span className="text-white"> Young Frontend Developer</span>
          </h1>

          <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Hi! I'm a passionate Frontend Developer focused on building responsive and interactive web
            applications. I enjoy turning ideas into clean and functional code using modern technologies.
          </p>

          <div className="flex gap-4 justify-center mb-16">
            <Button
              size="lg"
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
              Projects
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:text-white font-semibold px-8 bg-transparent"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
              Contact
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="relative px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-6xl font-bold mb-12 text-center">
            <span className="text-white">About </span>
            <span className="text-cyan-400">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                Men 5+ yillardan ortiq web development experience bilan professional developer. React, Next.js va
                JavaScript bilan modern applications yaratishda expert. User experience va clean code quality ga
                focus qilaman.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                Har bir project passion bilan approach qilaman. Performance optimization, responsive design, va
                accessible interfaces yaratish mening priority. Teamwork va continuous learning ga ishonaman.
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-cyan-400 mb-6">Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <SkillBadge key={skill} skill={skill} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">
            <span className="text-white">Featured </span>
            <span className="text-cyan-400">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>

          <div className="mt-10 text-center -mb-18">
            <Button
              size="lg"
              variant="outline"
              className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:text-white font-semibold bg-transparent text-[20px]">
              All Projects
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      <section id="contact" className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            <span className="text-cyan-400">Contact </span>
          </h2>

          <div className="flex flex-wrap gap-6 justify-center">
            <a
              href="mailto:your@email.com"
              className="flex items-center gap-3 px-6 py-3 rounded-lg border border-cyan-500/30 hover:border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 transition-all group">
              <Mail className="w-5 h-5" />
              <span>Email</span>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 rounded-lg border border-cyan-500/30 hover:border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 transition-all group">
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 rounded-lg border border-cyan-500/30 hover:border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 transition-all group">
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          </div>

          <div className="mt-12">
            <a
              target="_blank"
              href="/Karimov_Dilyorbek_resume.pdf"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all">
              Resume Download
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <footer className="relative border-t border-slate-800 py-8 px-6 text-center text-slate-400">
        <div className="max-w-7xl mx-auto">
          <p>© 2026 Portfolio. </p>
        </div>
      </footer>
    </div>
  );
}
