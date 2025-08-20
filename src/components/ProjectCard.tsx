import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";

export default function ProjectCard({
  slug, title, summary, tech, cover, coverAlt, period, video,
}: Project & { coverAlt?: string; video?: { webm?: string; mp4?: string; poster?: string } }) {
  return (
    <article className="group overflow-hidden rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <Link href={`/projects/${slug}`} className="block">
        <div className="aspect-[16/9] w-full bg-muted overflow-hidden">
          {video ? (
            <video
              className="h-full w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              poster={video.poster}
            >
              {video.webm && <source src={video.webm} type="video/webm" />}
              {video.mp4 && <source src={video.mp4} type="video/mp4" />}
            </video>
          ) : cover?.endsWith(".gif") ? (
            <img src={cover} alt={coverAlt ?? ""} className="h-full w-full object-cover" loading="lazy" />
          ) : cover ? (
            <Image
              src={cover}
              alt={coverAlt ?? ""}
              width={1280}
              height={720}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          ) : null}
        </div>

        <div className="p-5">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-lg font-semibold">{title}</h3>
            {period ? <span className="text-xs text-muted-foreground">{period}</span> : null}
          </div>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{summary}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {tech.map((t) => (
              <span key={t} className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs">
                {t}
              </span>
            ))}
          </div>
          <p className="mt-3 text-sm text-primary">Read more →</p>
        </div>
      </Link>
    </article>
  );
}
