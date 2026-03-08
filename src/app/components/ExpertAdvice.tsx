import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

export function ExpertAdvice() {
  const guides = [
    {
      id: '1',
      image: 'https://images.unsplash.com/photo-1649663724528-3bd2ce98b6e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob21lJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzcxODY5ODQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Tendencias en Construcción de Lujo 2026',
      date: 'Febrero 24, 2026',
      excerpt: 'Descubre las últimas innovaciones en materiales y técnicas de construcción premium.'
    },
    {
      id: '2',
      image: 'https://images.unsplash.com/photo-1625579002297-aeebbf69de89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWRyb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcxODkyODU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Guía Completa de Remodelación',
      date: 'Febrero 20, 2026',
      excerpt: 'Todo lo que necesitas saber antes de comenzar tu proyecto de remodelación.'
    },
    {
      id: '3',
      image: 'https://images.unsplash.com/photo-1707299231603-6c0a93e0f7fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwbGl2aW5nJTIwcm9vbSUyMGRlc2lnbnxlbnwxfHx8fDE3NzE4ODAwNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Materiales Premium para tu Hogar',
      date: 'Febrero 15, 2026',
      excerpt: 'Selección experta de materiales que transformarán tu espacio en algo único.'
    }
  ];

  return (
    <section id="servicios" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
            Consejos & Guías de Expertos
          </h2>
          <div className="w-20 h-0.5 bg-[#C9A85C] mx-auto"></div>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {guides.map((guide) => (
            <Link 
              key={guide.id} 
              to={`/guias/${guide.id}`}
              className="bg-white border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 rounded-lg"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src={guide.image}
                  alt={guide.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="px-6 pb-6 pt-6">
                <div className="text-sm text-gray-500 mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {guide.date}
                </div>
                <h3 className="text-2xl mb-3 text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {guide.title}
                </h3>
                <p className="text-gray-600 mb-4 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {guide.excerpt}
                </p>
                <div className="inline-flex items-center text-[#C9A85C] hover:text-[#B89644] transition-colors duration-200 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Leer más
                  <ArrowRight size={14} className="ml-2" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/guias"
            className="inline-block px-10 py-4 bg-[#C9A85C] text-white hover:bg-[#B89644] transition-colors duration-200 text-sm tracking-widest rounded-lg"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            VER TODAS LAS GUÍAS
          </Link>
        </div>
      </div>
    </section>
  );
}