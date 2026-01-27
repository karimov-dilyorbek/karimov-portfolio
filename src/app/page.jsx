"use client";

import { useEffect, useRef, useState } from "react";
import { Github, Linkedin, Mail, ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Animated stars background component
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

    // Create stars
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
        // Twinkling effect
        star.opacity += (Math.random() - 0.5) * 0.05;
        star.opacity = Math.max(0.2, Math.min(1, star.opacity));

        // Movement
        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = -10;
          star.x = Math.random() * canvas.width;
        }

        // Draw star
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

// Glowing orb component
function GlowingOrb() {
  return (
    <div className="fixed top-20 right-10 w-96 h-96 pointer-events-none opacity-20">
      <div className="w-full h-full rounded-full bg-blue-500 blur-3xl animate-pulse" />
    </div>
  );
}

// Project card component
function ProjectCard({ title, description, tags, link }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative overflow-hidden rounded-lg border border-slate-700 bg-slate-900/50 backdrop-blur p-6 hover:border-cyan-500/50 transition-all duration-300">
      {/* Animated background */}
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
          Ochish
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
}

// Skill badge component
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

  const skills = [
    "React",
    "Next.js",
    "JavaScript",
    "TailwindCSS",
    "Node.js",
    "PostgreSQL",
    "MongoDB",
    "GraphQL",
    "WebSocket",
    "Git",
    "Docker",
    "AWS",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 overflow-hidden">
      {/* Background elements */}
      <CosmicBackground />
      <GlowingOrb />

      {/* Navigation */}
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
              Haqimda
            </a>
            <a href="#projects" className="text-slate-300 hover:text-cyan-400 transition-colors">
              Proyektlar
            </a>
            <a href="#contact" className="text-slate-300 hover:text-cyan-400 transition-colors">
              Bog'lanish
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center pt-20">
        <div className="max-w-5xl mx-auto px-6 text-center z-10">
          {/* Animated border */}
          <div className="mb-8 inline-block">
            <div className="px-4 py-2 rounded-full border border-cyan-500/50 text-cyan-400 text-sm font-medium backdrop-blur animate-pulse">
              ✨ Frontend Dasturchiman
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">Salom! Meni</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
              Ismim Nomi
            </span>
            <span className="text-white"> deb ataymiz</span>
          </h1>

          <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Men modern web applications yaratamiz. Next.js, React, va JavaScript bilan professional solutions build
            qilaman. Har bir project attention to detail va performance optimization bilan yaratiladi.
          </p>

          <div className="flex gap-4 justify-center mb-16">
            <Button
              size="lg"
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
              Proyektlarni ko'rish
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 font-semibold px-8 bg-transparent"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
              Bog'lanish
            </Button>
          </div>

          {/* Floating element */}
          <div className="relative h-64 md:h-96">
            <div
              className="absolute left-1/2 -translate-x-1/2 w-80 h-80 rounded-full border-2 border-cyan-500/20 animate-spin opacity-30"
              style={{ animationDuration: "20s" }}></div>
            <div
              className="absolute left-1/2 -translate-x-1/2 w-60 h-60 rounded-full border-2 border-blue-500/20 animate-spin opacity-20"
              style={{ animationDuration: "15s", animationDirection: "reverse" }}></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="text-white">Meni </span>
            <span className="text-cyan-400">Haqimda</span>
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
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <SkillBadge key={skill} skill={skill} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
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

          <div className="mt-16 text-center">
            <Button
              size="lg"
              variant="outline"
              className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 font-semibold bg-transparent">
              Barcha proyektlarni ko'rish
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            <span className="text-white">Keling </span>
            <span className="text-cyan-400">Bog'lana Olamiz</span>
          </h2>

          <p className="text-xl text-slate-400 mb-12">
            Proyekt, collaboration, yoki shunchaki salom deash uchun men bilan bog'laning. Happy to connect!
          </p>

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

          {/* Resume Button */}
          <div className="mt-12">
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all">
              Resume Download
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-slate-800 py-8 px-6 text-center text-slate-400">
        <div className="max-w-7xl mx-auto">
          <p>© 2024 Mening Portfolio. Barcha huquq asoslanadi.</p>
        </div>
      </footer>
    </div>
  );
}
