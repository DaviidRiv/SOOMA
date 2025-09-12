import { useState, useRef, useEffect } from "react";
import { ChevronDown, User } from "lucide-react";

const groups = [
  {
    heading: "MISIÓN, VISIÓN, VALORES",
    colorBar: "bg-[#2c7cc5]",
    links: [
      { label: "Misión", href: "/mision" },
      { label: "Visión", href: "/vision" },
      { label: "Valores", href: "/valores" },
    ],
  },
  {
    heading: "SEGURIDAD",
    colorBar: "bg-[#d46623]",
    links: [
      { label: "Escolar", href: "/seguridad/escolar" },
      { label: "Intramuros", href: "/seguridad/intramuros" },
      { label: "Laboral", href: "/seguridad/laboral" },
      { label: "Ciberseguridad", href: "/seguridad/ciberseguridad" },
      { label: "De datos personales", href: "/seguridad/datos" },
      { label: "Gestión de permisos", href: "/seguridad/permisos" },
      { label: "Vulnerabilidad", href: "/seguridad/vulnerabilidad" },
    ],
  },
  {
    heading: "CAPACITACIÓN",
    colorBar: "bg-[#2e7d32]",
    links: [
      { label: "Técnica", href: "/capacitacion/tecnica" },
      { label: "Profesional", href: "/capacitacion/profesional" },
      { label: "General", href: "/capacitacion/general" },
      { label: "Específica", href: "/capacitacion/especifica" },
      { label: "Desarrollo Humano", href: "/capacitacion/desarrollo" },
      { label: "Alta dirección", href: "/capacitacion/alta-direccion" },
      { label: "Inducción al puesto", href: "/capacitacion/induccion" },
    ],
  },
  {
    heading: "METODOLOGÍA",
    colorBar: "bg-[#264f7d]",
    links: [
      { label: "Diagnóstico", href: "/metodologia/diagnostico" },
      { label: "Planificación", href: "/metodologia/planificacion" },
      { label: "Implementación", href: "/metodologia/implementacion" },
      { label: "Evaluación", href: "/metodologia/evaluacion" },
    ],
  },
  {
    heading: "CORTESÍAS",
    colorBar: "bg-[#cf9a17]",
    links: [
      { label: "Diagnóstico ejecutivo", href: "/cortesias/diagnostico-ejecutivo" },
      { label: "Conferencia \"Ciberseguridad\"", href: "/cortesias/ciberseguridad" },
      { label: "Conferencia \"Violencia\"", href: "/cortesias/violencia" },
      { label: "Conferencia \"Liderazgo\"", href: "/cortesias/liderazgo" },
    ],
  },
  {
    heading: "NOSOTROS",
    colorBar: "bg-[#4c9bb1]",
    links: [
      { label: "Semblanza curricular", href: "/nosotros/semblanza" },
      { label: "Contacto", href: "#contacto" },
    ],
  },
];

function MegaPanel() {
  return (
    <div className="absolute left-1/2 top-full z-40 mt-4 w-[min(1100px,92vw)] -translate-x-1/2 rounded-2xl bg-white/95 p-4 shadow-2xl ring-1 ring-black/5 backdrop-blur">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-6">
        {groups.map((g, idx) => (
          <div key={idx} className="rounded-lg border border-gray-100">
            <div className={`${g.colorBar} h-7 rounded-t-lg px-2 text-xs font-bold uppercase tracking-wide text-white flex items-center`}>
              {g.heading}
            </div>
            <ul className="divide-y divide-gray-100">
              {g.links.map((l, i) => (
                <li key={i}>
                  <a
                    href={l.href}
                    className="block px-3 py-2 text-[13px] hover:bg-gray-50 hover:text-blue-700"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function NavbarMega() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Cierra al hacer click afuera
  useEffect(() => {
    function onDoc(e) {
      if (!ref.current) return;
      if (!ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  return (
    <header
      className="relative z-50"
      style={{
        // degradado tipo IRENA
        background:
          "linear-gradient(90deg, rgba(7,57,94,0.95) 0%, rgba(21,90,140,0.92) 50%, rgba(83,133,167,0.9) 100%)",
      }}
    >
      <nav ref={ref} className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 text-white">
        {/* Logo */}
 <a href="/" className="flex items-center gap-3">
  <img
    src="/logo-sooma.jpg"     // tu archivo en /public
    alt="SOOMA logo"
    className="h-12 w-auto rounded-full bg-white/10 p-1" // ⬅️ antes era h-9, ahora h-12
  />
  <span className="text-xl font-extrabold tracking-wide">SOOMA</span>
  <span className="ml-1 hidden text-sm font-semibold md:inline">CONSULTORES</span>
</a>


        {/* Menú principal */}
        <ul className="hidden items-center gap-8 md:flex">
          <li
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button className="flex items-center gap-1 text-[18px] font-medium hover:opacity-90">
              Nuestros servicios
              <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
            </button>
            {open && <MegaPanel />}
          </li>

          <li>
            <a href="/nosotros" className="text-[18px] font-medium hover:opacity-90">
              ¿Quiénes somos?
            </a>
          </li>

          <li className="relative group">
            <button className="flex items-center gap-1 text-[18px] font-medium hover:opacity-90">
              Nuestras soluciones en acción
              <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
            </button>
            {/* Submenú simple */}
            <div className="invisible absolute left-0 top-full z-40 mt-3 w-72 rounded-xl bg-white/95 p-2 text-gray-800 shadow-xl ring-1 ring-black/5 group-hover:visible">
              <a href="/casos/educacion" className="block rounded-md px-3 py-2 hover:bg-gray-50">Casos: Educación</a>
              <a href="/casos/empresarial" className="block rounded-md px-3 py-2 hover:bg-gray-50">Casos: Empresarial</a>
              <a href="/casos/sector-publico" className="block rounded-md px-3 py-2 hover:bg-gray-50">Casos: Sector público</a>
            </div>
          </li>

          <li>
            <a href="/capacitaciones" className="text-[18px] font-medium hover:opacity-90">
              Capacitaciones
            </a>
          </li>

          <li className="flex items-center gap-2">
            <a href="#contacto" className="text-[18px] font-semibold">Contacto</a>
            <User className="h-5 w-5" />
          </li>
        </ul>

        {/* Mobile toggle (simple link al contacto) */}
        <a href="#contacto" className="md:hidden rounded-full bg-white/10 px-3 py-1 text-sm">
          Contacto
        </a>
      </nav>
    </header>
  );
}
