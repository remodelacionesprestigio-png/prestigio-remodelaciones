import { ImageWithFallback } from './figma/ImageWithFallback';
import { Link } from 'react-router';

interface HeroProps {
  onOpenModal: () => void;
}

export function Hero({ onOpenModal }: HeroProps) {
  return (
    <section id="inicio" className="relative min-h-[700px] md:min-h-screen flex items-center justify-center py-24 md:py-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1759256243437-9c8f7238c42b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtYW5zaW9uJTIwb3V0ZG9vciUyMHBvb2x8ZW58MXx8fHwxNzcxODkzMjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Luxury construction"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
          <h1 className="text-[2.75rem] md:text-4xl lg:text-6xl pt-6 md:pt-0 mb-6 tracking-wide leading-tight max-w-6xl" style={{ fontFamily: 'Playfair Display, serif', lineHeight: '1.08' }}>
            Desde el diseño hasta la entrega final, ejecutamos tu proyecto con orden, precisión y alto nivel de detalle.
          </h1>
        <p className="text-base md:text-lg mb-10 text-gray-200 max-w-3xl mx-auto font-light tracking-wide" style={{ fontFamily: 'Inter, sans-serif', lineHeight: '1.6' }}>
          En Prestigio Remodelaciones y Construcciones S.A.S transformamos espacios residenciales y comerciales mediante una planeación rigurosa, control de tiempos y acabados cuidadosamente especificados.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onOpenModal}
            className="inline-block px-10 py-4 bg-[#C9A85C] text-white hover:bg-[#B89644] transition-colors duration-200 text-sm tracking-widest rounded-lg"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            COTIZAR MI PROYECTO
          </button>
          <Link
            to="/servicios"
            className="inline-block px-10 py-4 bg-white text-gray-900 hover:bg-gray-100 transition-colors duration-200 text-sm tracking-widest rounded-lg"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            VER CÓMO TRABAJAMOS
          </Link>
        </div>
      </div>
    </section>
  );
}