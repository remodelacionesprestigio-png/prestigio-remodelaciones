import { ImageWithFallback } from './figma/ImageWithFallback';
import { Link } from 'react-router';

interface CTASectionProps {
  onOpenModal: () => void;
}

export function CTASection({ onOpenModal }: CTASectionProps) {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1758448018619-4cbe2250b9ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiYXRocm9vbSUyMHJlbm92YXRpb24lMjBsdXh1cnl8ZW58MXx8fHwxNzcxODQ5NjA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Luxury renovation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <h2 className="text-4xl md:text-5xl mb-8 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
          ¿Listo para transformar tu espacio con planificación y respaldo profesional?
        </h2>
        <p className="text-lg md:text-xl mb-12 text-gray-200 max-w-2xl mx-auto font-light leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
          Agenda una consulta inicial sin costo y recibe una asesoría estructurada para iniciar tu proyecto con claridad y seguridad.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onOpenModal}
            className="inline-block px-10 py-4 bg-[#C9A85C] text-white hover:bg-[#B89644] transition-colors duration-200 text-sm tracking-widest rounded-lg"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            SOLICITAR CONSULTA
          </button>
          <button
            onClick={onOpenModal}
            className="inline-block px-10 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-colors duration-200 text-sm tracking-widest rounded-lg"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            COTIZAR AHORA
          </button>
        </div>
      </div>
    </section>
  );
}