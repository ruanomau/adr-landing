export default function Hero() {
  return (
    <section
      id="inicio"
      className="h-screen flex flex-col justify-center items-center text-center text-white relative"
      style={{
        backgroundImage: "url('/hero.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Capa oscura */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
          Innovación en Arquitectura,<br />
          Sostenibilidad y Desarrollo Inmobiliario
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          Descubre por qué ADR es tu mejor opción
        </p>
        <a
          href="#contacto"
          className="inline-block bg-emerald-600 hover:bg-emerald-700 px-8 py-3 rounded-full text-white font-semibold transition-colors"
        >
          Conócenos
        </a>
      </div>
    </section>
  );
}
