export default function Proceso() {
  // Pasos del proceso
  const pasos = [
    { titulo: '1. Diagnóstico', desc: 'Análisis de viabilidad, normativas y metas de sostenibilidad.' },
    { titulo: '2. Diseño',      desc: 'Conceptual, arquitectónico y ejecutivo con metodología BIM.' },
    { titulo: '3. Construcción',desc: 'Gestión LEAN, control de costos y obra certificada.' },
    { titulo: '4. Entrega',     desc: 'Puesta en marcha, commissioning y validación de KPIs.' },
  ];

  // Galería de casos de éxito (usa imágenes de /public/)
  const galeria = ['caso1.jpg', 'caso2.jpg', 'caso3.jpg', 'caso4.jpg'];

  return (
    <section
      id="proceso"
      className="py-24 bg-gray-50 text-gray-800 scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Encabezado */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Proceso &amp; resultados esperados
        </h2>

        {/* Timeline del proceso */}
        <ol className="relative border-l border-emerald-600 mb-16">
          {pasos.map(({ titulo, desc }) => (
            <li key={titulo} className="mb-10 ml-6">
              <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-emerald-600 rounded-full ring-8 ring-gray-50 text-white text-sm font-bold">
                {titulo.charAt(0)}
              </span>
              <h3 className="font-semibold text-lg">{titulo}</h3>
              <p className="text-sm text-gray-600">{desc}</p>
            </li>
          ))}
        </ol>

        {/* Galería */}
        <h3 className="text-xl font-semibold text-center mb-8">Casos de éxito</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {galeria.map((img) => (
            <div key={img} className="overflow-hidden rounded-lg shadow">
              <img
                src={`/${img}`}
                alt="Caso de éxito"
                className="w-full h-40 object-cover hover:scale-105 transition-transform"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
