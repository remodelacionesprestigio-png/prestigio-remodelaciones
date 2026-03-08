import { Link } from 'react-router';
import { SEO } from '../components/SEO';

export function NotFound() {
  return (
    <>
      <SEO
        title="Página No Encontrada - 404"
        description="La página que buscas no existe. Regresa a Prestigio Remodelaciones para explorar nuestros proyectos y servicios de construcción de lujo."
        keywords="404, página no encontrada"
      />
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center px-6">
          <h1 className="text-6xl mb-4 text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
            404
          </h1>
          <p className="text-xl text-gray-600 mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
            Página no encontrada
          </p>
          <Link
            to="/"
            className="inline-block px-10 py-4 bg-[#C9A85C] text-white hover:bg-[#B89644] transition-colors duration-200 text-sm tracking-widest rounded-lg"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            VOLVER AL INICIO
          </Link>
        </div>
      </div>
    </>
  );
}