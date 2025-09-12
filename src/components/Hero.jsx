export default function Hero() {
  return (
    <section
      className="relative isolate"
      style={{
        backgroundImage: "url('/hero-bg.jpg')", // coloca tu imagen
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#07395e]/80 via-[#155a8c]/70 to-[#5385a7]/60" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 text-white">
        <h1 className="text-4xl font-bold md:text-5xl">
          Consultoría y capacitación en seguridad y desarrollo humano
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-white/90">
          Estandarizamos procesos, fortalecemos la prevención y elevamos la calidad del servicio desde el
          primer contacto con tus usuarios.
        </p>
        <div className="mt-8 flex gap-3">
          <a href="#contacto" className="rounded-lg bg-white px-5 py-3 font-semibold text-[#0f3f66] shadow">
            Solicitar diagnóstico
          </a>
          <a href="/nosotros" className="rounded-lg bg-white/10 px-5 py-3 font-medium text-white ring-1 ring-white/40">
            Conócenos
          </a>
        </div>
      </div>
    </section>
  );
}
