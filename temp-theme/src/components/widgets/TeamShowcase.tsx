import { motion } from "framer-motion";
import clsx from "clsx";

type Member = {
  name: string;
  role?: string;
  bio: string;
  img: { src: string; alt: string };
};

type Props = {
  id?: string;
  tagline?: string;
  title?: string;
  subtitle?: string;
  members: Member[];
  className?: string;
};

export default function TeamShowcase({
  id,
  tagline = "Equipo",
  title = "Conoce a nuestro equipo",
  subtitle,
  members,
  className,
}: Props) {
  return (
    <section id={id} className={clsx("py-16 md:py-20", className)}>
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          {tagline ? (
            <p className="text-sm uppercase tracking-wide text-accent">{tagline}</p>
          ) : null}
          <h2 className="mt-1 text-3xl font-bold md:text-4xl">{title}</h2>
          {subtitle ? (
            <p className="mt-3 text-slate-600 dark:text-slate-300">{subtitle}</p>
          ) : null}
        </div>

        {/* Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((m, i) => (
            <article
              key={m.name + i}
              className={clsx(
                "group relative overflow-hidden rounded-2xl",
                "bg-white/70 shadow-lg ring-1 ring-slate-900/5 backdrop-blur",
                "dark:bg-slate-900/60 dark:ring-white/10"
              )}
            >
              {/* soft glow background */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -inset-24 bg-gradient-to-br from-accent/10 via-transparent to-transparent blur-2xl dark:from-accent/15" />
              </div>

              <div className="p-6">
                {/* Avatar */}
                <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: [-2, 2, -2] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: [0.42, 0, 0.58, 1] }}
                    className="mx-auto flex items-center justify-center"
                >
                  <div className="relative h-36 w-36">
                    <img
                      src={m.img.src}
                      alt={m.img.alt}
                      loading="lazy"
                      className={clsx(
                        "h-36 w-36 rounded-full object-cover",
                        "ring-2 ring-white shadow-lg",
                        "dark:ring-slate-800"
                      )}
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src =
                          "/images/placeholder-avatar.png";
                      }}
                    />
                    {/* subtle ring pulse on hover */}
                    <div className="pointer-events-none absolute inset-0 rounded-full ring-0 transition-all duration-300 group-hover:ring-4 group-hover:ring-accent/25" />
                  </div>
                </motion.div>

                {/* Name / Role */}
                <div className="mt-5 text-center">
                  <h3 className="text-lg font-semibold leading-tight">
                    {m.name}
                  </h3>
                  {m.role ? (
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                      {m.role}
                    </p>
                  ) : null}
                </div>

                {/* Bio */}
                <p className="mt-4 text-pretty text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  {m.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
