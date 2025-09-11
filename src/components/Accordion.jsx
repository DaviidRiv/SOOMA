import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

function Item({ value, title, children }) {
  return (
    <Accordion.Item value={value} className="border-b">
      <Accordion.Header>
        <Accordion.Trigger className="flex w-full items-center justify-between py-3 text-left font-medium hover:opacity-90">
          <span>{title}</span>
          <ChevronDown className="size-4 transition-transform data-[state=open]:rotate-180" />
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content className="pb-4 text-sm leading-relaxed">
        {children}
      </Accordion.Content>
    </Accordion.Item>
  );
}

export default function SoomaAccordion() {
  return (
    <Accordion.Root type="single" collapsible className="w-full rounded-xl bg-white p-4 shadow">
      <Item value="seguridad" title="Seguridad">
        Escolar · Intramuros · Laboral · Ciberseguridad · Datos personales · Permisos · Vulnerabilidad
      </Item>
      <Item value="capacitacion" title="Capacitación">
        Técnica · Profesional · General · Específica · Desarrollo humano · Alta dirección · Inducción al puesto
      </Item>
      <Item value="metodologia" title="Metodología">
        Diagnóstico → Planificación → Implementación → Evaluación
      </Item>
      <Item value="cortesias" title="Cortesías">
        Diagnóstico ejecutivo · Conferencias: Ciberseguridad, Violencia, Liderazgo
      </Item>
      <Item value="nosotros" title="Nosotros">
        Semblanza y contacto
      </Item>
    </Accordion.Root>
  );
}
