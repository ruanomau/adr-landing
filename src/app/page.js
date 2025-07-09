import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Nosotros from '@/components/Nosotros';
import Areas from '@/components/Areas';
import Proceso from '@/components/Proceso';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      {/* Secciones */}
      <Nosotros />
      <Areas />  
      <Proceso />
      <Contact />
    </>
  );
}
