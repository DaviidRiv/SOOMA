import { useState } from "react";
import { ChevronDown } from "lucide-react";

const menu = [
  {
    title: "Misión, Visión, Valores",
    items: [
      { label: "Misión", href: "#" },
      { label: "Visión", href: "#" },
      { label: "Valores", href: "#" },
    ],
  },
  {
    title: "Seguridad",
    items: [
      { label: "Escolar", href: "#" },
      { label: "Intramuros", href: "#" },
      { label: "Laboral", href: "#" },
      { label: "Ciberseguridad", href: "#" },
      { label: "Datos personales", href: "#" },
      { label: "Gestión de permisos", href: "#" },
      { label: "Vulnerabilidad", href: "#" },
    ],
  },
  {
    title: "Capacitación",
    items: [
      { label: "Técnica", href: "#" },
      { label: "Profesional", href: "#" },
      { label: "General", href: "#" },
      { label: "Específica", href: "#" },
      { label: "Desarrollo humano", href: "#" },
      { label: "Alta dirección", href: "#" },
      { label: "Inducción al puesto", href: "#" },
    ],
  },
  {
    title: "Metodología",
    items: [
      { label: "Diagnóstico", href: "#" },
      { label: "Planificación", href: "#" },
      { label: "Implementación", href: "#" },
      { label: "Evaluación", href: "#" },
    ],
  },
  {
    title: "Cortesías",
    items: [
      { label: "Diagnóstico ejecutivo", href: "#" },
      { label: "Conferencia Ciberseguridad", href: "#" },
      { label: "Conferencia Violencia", href: "#" },
      { label: "Conferencia Liderazgo", href: "#" },
    ],
  },
  {
    title: "Nosotros",
    items: [
      { label: "Semblanza", href: "#" },
      { label: "Contacto", href: "#contacto" },
    ],
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(null);

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <ul className="flex space-x-8">
          {menu.map((group, i) => (
            <li
              key={i}
              className="relative group"
              onMouseEnter={() => setOpen(i)}
              onMouseLeave={() => setOpen(null)}
            >
              <button className="flex items-center gap-1 py-4 font-semibold hover:text-blue-600">
                {group.title}
                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>

              {open === i && (
                <div className="absolute left-0 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-gray-200">
                  <ul className="py-2">
                    {group.items.map((item, j) => (
                      <li key={j}>
                        <a
                          href={item.href}
                          className="block px-4 py-2 text-sm hover:bg-gray-100"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
