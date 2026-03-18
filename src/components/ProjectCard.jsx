import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <div className="group overflow-hidden rounded-[28px] border border-fuchsia-500/20 bg-black/60 shadow-[0_0_40px_rgba(168,85,247,0.08)] backdrop-blur-sm transition duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_50px_rgba(34,211,238,0.12)]">
      <div className="relative h-60 w-full overflow-hidden sm:h-[280px] lg:h-[320px]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="bg-gradient-to-br from-[#13061d]/95 via-black/95 to-black/95 p-6 sm:p-8">
        <h3 className="mb-4 text-3xl font-bold text-white sm:text-4xl">{project.title}</h3>

        <p className="max-w-[95%] text-lg leading-9 text-slate-200 sm:text-[20px]">{project.description}</p>

        <div className="mt-8 flex flex-wrap gap-4">
          {project.githubUrl && project.githubUrl !== "#" && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black px-7 py-4 text-xl text-white shadow-[inset_0_-8px_20px_rgba(255,255,255,0.05)] transition hover:border-cyan-400/40 hover:text-cyan-300">
              <Github className="h-5 w-5" />
              Manba
            </a>
          )}

          {project.liveUrl && project.liveUrl !== "#" && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black px-7 py-4 text-xl text-white shadow-[inset_0_-8px_20px_rgba(255,255,255,0.05)] transition hover:border-cyan-400/40 hover:text-cyan-300">
              <ExternalLink className="h-5 w-5" />
              Ko'rish
            </a>
          )}
        </div>

        {project.tags?.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
