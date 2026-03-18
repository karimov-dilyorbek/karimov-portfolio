import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import CosmicBackground from "@/components/CosmicBackground";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 px-6 py-20 text-slate-50">
      <CosmicBackground />

      <div className="pointer-events-none fixed right-10 top-20 z-[1] h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-12">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-cyan-400 transition hover:text-cyan-300">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <h1 className="mb-4 text-4xl font-bold sm:text-5xl md:text-6xl">
            All <span className="text-cyan-400">Projects</span>
          </h1>

          <p className="max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            These are the projects I have built so far. I'll continue updating this page as I create more frontend
            websites and landing pages.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}
