import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  nombre: z.string().min(2, "Nombre requerido"),
  email: z.string().email("Email inválido"),
  mensaje: z.string().min(10, "Cuéntanos un poco más (min 10 caracteres)"),
});

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful } } =
    useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (data) => {
    // Opción 1: servicio sin backend (Formspree/StaticForms)
    // await fetch("https://formspree.io/f/xxxxxxx", { method: "POST", body: JSON.stringify(data) })
    // Opción 2: tu endpoint serverless propio
    alert(`¡Gracias! Te contactamos pronto.\n${JSON.stringify(data, null, 2)}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 rounded-xl bg-white p-4 shadow">
      <div>
        <label className="block text-sm font-medium">Nombre</label>
        <input className="mt-1 w-full rounded border px-3 py-2"
               placeholder="Tu nombre" {...register("nombre")} />
        {errors.nombre && <p className="mt-1 text-xs text-red-600">{errors.nombre.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium">Email</label>
        <input className="mt-1 w-full rounded border px-3 py-2"
               placeholder="tu@correo.com" {...register("email")} />
        {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium">Mensaje</label>
        <textarea rows={4} className="mt-1 w-full rounded border px-3 py-2"
                  placeholder="¿En qué podemos ayudarte?" {...register("mensaje")} />
        {errors.mensaje && <p className="mt-1 text-xs text-red-600">{errors.mensaje.message}</p>}
      </div>

      <button disabled={isSubmitting}
              className="w-full rounded bg-black px-4 py-2 font-medium text-white disabled:opacity-60">
        {isSubmitting ? "Enviando..." : (isSubmitSuccessful ? "¡Enviado!" : "Enviar")}
      </button>
    </form>
  );
}
