export default function Navbar() {
  const links = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Áreas de negocio', href: '#areas' },
    { label: 'Proceso y resultados', href: '#proceso' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4 flex items-center h-16">
        <span className="text-xl font-bold tracking-wide">ADR</span>

        <ul className="ml-auto flex gap-6 list-none">
          {links.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="text-gray-700 hover:text-emerald-600 visited:text-gray-700 transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
