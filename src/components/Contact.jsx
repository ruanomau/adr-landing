// src/components/Contact.jsx
export default function Contact() {
  return (
    <section
      id="contacto"
      className="py-24 bg-white text-gray-800 scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Encabezado */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Contáctanos
        </h2>

        {/* Grid principal */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* ---------- Formulario ---------- */}
          <form
            action="https://formspree.io/f/tuEndpoint"   // ← reemplaza por tu endpoint real o usa mailto:
            method="POST"
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-medium mb-1">Nombre</label>
              <input
                type="text"
                name="nombre"
                required
                className="w-full border rounded-md px-4 py-2 focus:outline-emerald-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Correo</label>
              <input
                type="email"
                name="correo"
                required
                className="w-full border rounded-md px-4 py-2 focus:outline-emerald-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Mensaje</label>
              <textarea
                name="mensaje"
                rows="4"
                required
                className="w-full border rounded-md px-4 py-2 focus:outline-emerald-600"
              />
            </div>
            <button
              type="submit"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-md transition-colors"
            >
              Enviar
            </button>
            {/* Nota: Si no tienes un servicio de backend aún, puedes reemplazar
               action="mailto:tu@email.com" para abrir el cliente de correo. */}
          </form>

          {/* ---------- Info lateral ---------- */}
          <div className="space-y-8">
            {/* Botón WhatsApp */}
            <a
              href="https://wa.me/526862543103"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-medium px-5 py-3 rounded-md w-max transition-colors"
            >
              <span>💬</span> Escríbenos por WhatsApp
            </a>

            {/* Redes sociales */}
            <div className="space-y-2">
              <p className="font-semibold">Síguenos:</p>
              <div className="flex gap-4 text-xl">
                <a href="#" className="hover:text-emerald-600">👤 FB</a>
                <a href="#" className="hover:text-emerald-600">📸 IG</a>
                <a href="#" className="hover:text-emerald-600">💼 LI</a>
              </div>
            </div>

            {/* Mapa */}
            <div className="w-full h-52 md:h-64 border rounded-md overflow-hidden">
                <iframe
                    title="Ubicación ADR"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3359.768979920948!2d-115.46240422571164!3d32.6389750910302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d7716ae27cffbf%3A0xae82d8b6cbf69678!2sSECI!5e0!3m2!1ses-419!2smx!4v1752097294512!5m2!1ses-419!2smx"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}