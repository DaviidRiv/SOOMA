import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  nombre: z.string().min(2, "Nombre requerido"),
  email: z.string().email("Email inválido"),
  mensaje: z.string().min(10, "Mínimo 10 caracteres"),
});

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful } } =
    useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (data) => {
    // TODO: integrar Formspree/endpoint
    alert(`¡Gracias! Te contactamos pronto.\n${JSON.stringify(data, null, 2)}`);
  };

  return (
    <section id="contacto" className="bg-gray-50 py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold text-[#0f3f66]">Contáctanos</h2>
          <p className="mt-3 text-gray-600">
            Cuéntanos sobre tu organización y el reto que quieres resolver.
          </p>
          <ul className="mt-6 space-y-2 text-gray-600">
            <li><strong>Correo:</strong> hola@sooma.consultores</li>
            <li><strong>Teléfono:</strong> +52 (229) 000 0000</li>
            <li><strong>Cobertura:</strong> México y LATAM</li>
          </ul>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 rounded-2xl bg-white p-6 shadow-lg">
          <div>
            <label className="block text-sm font-medium">Nombre</label>
            <input className="mt-1 w-full rounded border px-3 py-2" {...register("nombre")} />
            {errors.nombre && <p className="mt-1 text-xs text-red-600">{errors.nombre.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium">Email</label>
            <input className="mt-1 w-full rounded border px-3 py-2" {...register("email")} />
            {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium">Mensaje</label>
            <textarea rows={4} className="mt-1 w-full rounded border px-3 py-2" {...register("mensaje")} />
            {errors.mensaje && <p className="mt-1 text-xs text-red-600">{errors.mensaje.message}</p>}
          </div>

          <button
            disabled={isSubmitting}
            className="w-full rounded-lg bg-[#0f3f66] px-4 py-2 font-semibold text-white disabled:opacity-60"
          >
            {isSubmitting ? "Enviando..." : (isSubmitSuccessful ? "¡Enviado!" : "Enviar")}
          </button>
        </form>
      </div>
    </section>
  );
}
