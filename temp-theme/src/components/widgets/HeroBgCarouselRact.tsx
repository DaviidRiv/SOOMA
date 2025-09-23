import React, { useEffect, useId, useMemo, useRef, useState } from "react";

export type BgImage = {
  src: string;
  alt?: string;
  position?: string;               // ej: 'center 30%'
  fit?: 'cover' | 'contain';       // override por imagen
};

export type Action = {
  text?: string;
  href?: string;
  icon?: string;
  variant?: "primary" | "secondary" | "ghost";
  target?: string;
};

export interface Props {
  images: BgImage[];
  interval?: number;
  tagline?: string;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  actions?: Action[];
  id?: string;
  overlayClass?: string;
  imageFit?: 'cover' | 'contain';          // default para fondo "cover mode"
  imagePosition?: string;                  // foco por defecto
  heightClass?: string;                    // altura del hero
  displayMode?: 'cover' | 'contain' | 'contain-blur'; // 👈 NUEVO
  foregroundScale?: number;                // 0.7–1.0 (escala de la imagen principal en contain-blur)
}

const btnClass = (v: Action["variant"]) => {
  const base =
    "inline-flex items-center justify-center px-5 py-3 rounded-xl text-sm font-semibold transition focus:outline-none focus:ring-4";
  switch (v) {
    case "secondary":
      return `${base} bg-white/90 text-gray-900 hover:bg-white focus:ring-white/40`;
    case "ghost":
      return `${base} bg-transparent border border-white/70 text-white hover:bg-white/10 focus:ring-white/30`;
    default:
      return `${base} bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-400`;
  }
};

export default function HeroBgCarouselReact({
  images = [],
  interval = 3000,
  tagline,
  title,
  subtitle,
  actions = [],
  id,
  overlayClass = "bg-slate-900/45",
  imageFit = "cover",
  imagePosition = "center",
  heightClass = "min-h-[55svh] md:min-h-[75svh]",
  displayMode = "cover",                 // 👈 NUEVO
  foregroundScale = 0.92,                // 👈 NUEVO (ajusta cuánto “más pequeña” se ve la imagen)
}: Props) {
  const uid = useId().replace(/:/g, "");
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<number | null>(null);
  const hasMultiple = images.length > 1;

  const prefersReduced = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
  }, []);

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  useEffect(() => {
    if (!hasMultiple || paused || prefersReduced) return;
    if (timerRef.current) window.clearInterval(timerRef.current);
    timerRef.current = window.setInterval(next, Math.max(1000, interval));
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
      timerRef.current = null;
    };
  }, [interval, paused, prefersReduced, hasMultiple]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!hasMultiple) return;
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft")  prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [hasMultiple]);

  if (images.length === 0) return null;

  return (
    <section
      id={id}
      data-hero-root={uid}
      className={`relative not-prose ${heightClass}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      <div className="absolute inset-0 overflow-hidden -z-10" aria-hidden="true">
        {images.map((img, i) => {
          const fit = img.fit ?? imageFit;
          const pos = img.position ?? imagePosition;
          const active = i === index;

          // === Modo "contain-blur": fondo borroso + imagen principal reducible (contain + scale) ===
          if (displayMode === "contain-blur") {
            return (
              <div
                key={`${uid}-bg-${i}`}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${active ? "opacity-100" : "opacity-0"}`}
                style={{ willChange: "opacity" }}
              >
                {/* Capa borrosa que llena todo (cover) */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url('${img.src}')`,
                    backgroundSize: "cover",
                    backgroundPosition: pos,
                    backgroundRepeat: "no-repeat",
                    filter: "blur(18px)",
                    transform: "scale(1.08)", // para ocultar bordes del blur
                    willChange: "transform",
                  }}
                />
                {/* Imagen principal centrada sin recortes (contain) + escala ajustable */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={img.src}
                    alt={img.alt || ""}
                    className="max-w-full max-h-full object-contain"
                    style={{
                      transform: `scale(${Math.max(0.7, Math.min(1.0, foregroundScale))})`,
                      transition: "transform 300ms ease",
                      willChange: "transform",
                    }}
                  />
                </div>
              </div>
            );
          }

          // === Modo "contain" simple (pueden quedar barras; el overlay las disimula) ===
          if (displayMode === "contain") {
            return (
              <div
                key={`${uid}-bg-${i}`}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${active ? "opacity-100" : "opacity-0"}`}
                style={{
                  backgroundImage: `url('${img.src}')`,
                  backgroundSize: "contain",
                  backgroundPosition: pos,
                  backgroundRepeat: "no-repeat",
                  willChange: "opacity",
                }}
                role="img"
                aria-label={img.alt || ""}
              />
            );
          }

          // === Modo "cover" (original) ===
          return (
            <div
              key={`${uid}-bg-${i}`}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${active ? "opacity-100" : "opacity-0"}`}
              style={{
                backgroundImage: `url('${img.src}')`,
                backgroundSize: fit,                // 'cover'
                backgroundPosition: pos,
                backgroundRepeat: "no-repeat",
                willChange: "opacity",
              }}
              role="img"
              aria-label={img.alt || ""}
            />
          );
        })}
        <div className={`absolute inset-0 ${overlayClass} dark:bg-black/40`} />
      </div>

      {/* Controles */}
      {hasMultiple && (
        <div className="absolute inset-0 z-10 flex items-center justify-between px-3 sm:px-4 pointer-events-none">
          <button
            type="button"
            aria-label="Imagen anterior"
            className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60 focus:outline-none focus:ring-4 focus:ring-black/30"
            onClick={() => { prev(); setPaused(false); }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Imagen siguiente"
            className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60 focus:outline-none focus:ring-4 focus:ring-black/30"
            onClick={() => { next(); setPaused(false); }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}

      {/* Contenido */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="pt-0 md:pt-[76px] pointer-events-none" />
        <div className="py-12 md:py-20 text-center text-white dark:text-gray-100">
          {tagline && <p className="text-base font-bold tracking-wide uppercase">{tagline}</p>}
          {title && (
            <h1 className="text-5xl md:text-6xl font-bold leading-tighter tracking-tighter mb-4 font-heading drop-shadow">
              {typeof title === "string" ? <span dangerouslySetInnerHTML={{ __html: title }} /> : title}
            </h1>
          )}
          <div className="max-w-3xl mx-auto">
            {subtitle && (
              <p className="text-xl mb-6">
                {typeof subtitle === "string" ? <span dangerouslySetInnerHTML={{ __html: subtitle }} /> : subtitle}
              </p>
            )}
            
          </div>
        </div>
      </div>

      {/* Acciones: abajo y centradas del HERO (no del contenido) */}
            {actions && actions.length > 0 && (
            <div className="absolute z-20 bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 pointer-events-none">
                <div className="pointer-events-auto flex flex-col sm:flex-row gap-4">
                {actions.map((a, idx) => (
                    <a
                    key={`${uid}-action-bottom-${idx}`}
                    href={a.href || "#"}
                    target={a.target || "_self"}
                    className={btnClass(a.variant)}
                    >
                    {a.text || "Acción"}
                    </a>
                ))}
                </div>
            </div>
            )}
    </section>
  );
}