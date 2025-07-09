export default function Areas() {
  const areas = [
    {
      titulo: 'Arquitectura',
      desc: 'Diseño integral de espacios funcionales y estéticos con BIM y metodologías LEAN.',
      icono: '🏛️',
    },
    {
      titulo: 'Sostenibilidad',
      desc: 'Consultoría LEED®, eficiencia energética y selección de materiales de bajo impacto.',
      icono: '🌱',
    },
    {
      titulo: 'ReHabilita',
      desc: 'Restauración y renovación de activos inmobiliarios para maximizar su valor.',
      icono: '♻️',
    },
    {
      titulo: 'Desarrollo',
      desc: 'Planeación, gestión legal y comercialización de proyectos inmobiliarios.',
      icono: '🏗️',
    },
  ];

  return (
    <section
      id="areas"
      className="py-24 bg-white text-gray-800 scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Áreas de negocio
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {areas.map(({ titulo, desc, icono }) => (
            <div
              key={titulo}
              className="flex flex-col items-center text-center p-6 border rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              <span className="text-4xl mb-4">{icono}</span>
              <h3 className="text-lg font-semibold mb-2">{titulo}</h3>
              <p className="text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
