import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router';
import { SEO } from '../components/SEO';

export function GuiasPage() {
  const guides = [
    {
      id: '1',
      image: 'https://images.unsplash.com/photo-1649663724528-3bd2ce98b6e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob21lJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzcxODY5ODQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Tendencias en Construcción de Lujo 2026',
      date: 'Febrero 24, 2026',
      category: 'Tendencias',
      excerpt: 'Descubre las últimas innovaciones en materiales y técnicas de construcción premium que están definiendo el lujo contemporáneo.'
    },
    {
      id: '2',
      image: 'https://images.unsplash.com/photo-1625579002297-aeebbf69de89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWRyb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcxODkyODU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Guía Completa de Remodelación',
      date: 'Febrero 20, 2026',
      category: 'Guías',
      excerpt: 'Todo lo que necesitas saber antes de comenzar tu proyecto de remodelación, desde la planificación hasta la ejecución.'
    },
    {
      id: '3',
      image: 'https://images.unsplash.com/photo-1707299231603-6c0a93e0f7fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwbGl2aW5nJTIwcm9vbSUyMGRlc2lnbnxlbnwxfHx8fDE3NzE4ODAwNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Materiales Premium para tu Hogar',
      date: 'Febrero 15, 2026',
      category: 'Materiales',
      excerpt: 'Selección experta de materiales de lujo que transformarán tu espacio en algo único y atemporal.'
    },
    {
      id: '4',
      image: 'https://images.unsplash.com/photo-1668089677938-b52086753f77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob21lJTIwaW50ZXJpb3IlMjBkZXNpZ24lMjBtb2Rlcm58ZW58MXx8fHwxNzcyNDk1NDY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Diseño de Interiores Modernos',
      date: 'Febrero 10, 2026',
      category: 'Diseño',
      excerpt: 'Principios fundamentales del diseño de interiores contemporáneo para crear espacios elegantes y funcionales.'
    },
    {
      id: '5',
      image: 'https://images.unsplash.com/photo-1646119982518-272b622c4e40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBtYXRlcmlhbHMlMjBwcmVtaXVtJTIwcXVhbGl0eXxlbnwxfHx8fDE3NzI0OTU0Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Sostenibilidad en Construcción de Lujo',
      date: 'Febrero 5, 2026',
      category: 'Sostenibilidad',
      excerpt: 'Cómo integrar prácticas sostenibles en proyectos de construcción de lujo sin comprometer la elegancia.'
    },
    {
      id: '6',
      image: 'https://images.unsplash.com/photo-1736390800504-d3963b553aa3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwcmVub3ZhdGlvbiUyMG1vZGVybiUyMGtpdGNoZW58ZW58MXx8fHwxNzcyNDk1NDY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Remodelación de Cocinas Premium',
      date: 'Enero 30, 2026',
      category: 'Espacios',
      excerpt: 'Transforma tu cocina en un espacio gourmet con acabados de lujo y funcionalidad excepcional.'
    }
  ];

  return (
    <div className="pt-24">
      <SEO
        title="Guías y Consejos de Remodelación y Construcción"
        description="Consejos expertos sobre remodelación de lujo, construcción, materiales premium, diseño de interiores y tendencias 2026. Guías completas para tu proyecto."
        keywords="guías remodelación, consejos construcción, tendencias diseño 2026, materiales lujo, sostenibilidad construcción, remodelación cocina, diseño interiores"
        image="https://images.unsplash.com/photo-1649663724528-3bd2ce98b6e3?w=1200&h=630&fit=crop"
        type="website"
      />
      {/* Hero */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Consejos & Guías
          </h1>
          <div className="w-20 h-0.5 bg-[#C9A85C] mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Conocimiento experto para tu proyecto de construcción y remodelación
          </p>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide) => (
              <Link
                key={guide.id}
                to={`/guias/${guide.id}`}
                className="group bg-white border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 rounded-lg"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={guide.image}
                    alt={guide.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-xs text-[#C9A85C] tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {guide.category}
                    </span>
                    <div className="flex items-center text-sm text-gray-500" style={{ fontFamily: 'Inter, sans-serif' }}>
                      <Calendar size={14} className="mr-1" />
                      {guide.date}
                    </div>
                  </div>
                  <h3 className="text-2xl mb-3 text-gray-900 group-hover:text-[#C9A85C] transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {guide.title}
                  </h3>
                  <p className="text-gray-600 mb-4 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {guide.excerpt}
                  </p>
                  <div className="inline-flex items-center text-[#C9A85C] text-sm group-hover:text-[#B89644] transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Leer más
                    <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}