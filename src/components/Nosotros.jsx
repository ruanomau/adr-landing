// src/components/Nosotros.jsx
import Image from 'next/image';

export default function Nosotros() {
  /* ----- Datos del equipo (ajusta nombres, roles y archivos) ----- */
  const equipo = [
    {
      nombre: 'Arq. Daniela Ruano',
      rol: 'CEO & Founder',
      foto: '/team/daniela.jpg', // ⇦ guarda esta imagen en public/team/
    },
    {
      nombre: 'Ing. Mauricio Ruano',
      rol: 'Director de Operaciones',
      foto: '/team/mauricio.jpg',
    },
    {
      nombre: 'Arq. Karime Maytorena',
      rol: 'Líder de Diseño',
      foto: '/team/karime.jpg',
    },
  ];

  /* ----- Render ----- */
  return (
    <section
      id="nosotros"
      className="py-24 bg-gray-50 text-gray-800 scroll-mt-16"
    >
      <div className="max-w-5xl mx-auto px-4">
        {/* Encabezado */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Sobre nosotros
        </h2>

        {/* Historia + Misión */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <div>
            <h3 className="text-xl font-semibold mb-2">Nuestra historia</h3>
            <p className="leading-relaxed text-sm md:text-base">
              ADR nació en 2010 con la visión de integrar arquitectura,
              sostenibilidad y desarrollo inmobiliario en un solo equipo
              multidisciplinario. A lo largo de los años hemos entregado más de
              120 000 m² de proyectos certificados y premiados
              internacionalmente.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Misión</h3>
            <p className="leading-relaxed text-sm md:text-base">
              Diseñar y construir espacios que generen valor económico y
              bienestar ambiental, aplicando principios de eficiencia
              energética y economía circular en cada etapa del desarrollo.
            </p>
          </div>
        </div>

        {/* Equipo */}
        <h3 className="text-xl font-semibold text-center mb-8">
          Nuestro equipo
        </h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {equipo.map(({ nombre, rol, foto }) => (
            <div
              key={nombre}
              className="bg-white rounded-lg shadow p-6 text-center"
            >
              <Image
                src={foto}
                alt={nombre}
                width={96}
                height={96}
                className="mx-auto rounded-full object-cover mb-4"
              />
              <h4 className="font-medium">{nombre}</h4>
              <p className="text-sm text-gray-500">{rol}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
