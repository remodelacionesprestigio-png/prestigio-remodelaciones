import { ImageWithFallback } from './figma/ImageWithFallback';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

export function ExploreSelections() {
  const plans = [
    {
      id: 'esencia',
      image: 'https://images.unsplash.com/photo-1640109414028-4c7f29f39ad4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBiZWRyb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcxODY5Mzg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Plan Esencia',
      description: 'Remodelación completa optimizando elementos existentes y priorizando funcionalidad.'
    },
    {
      id: 'integral',
      image: 'https://images.unsplash.com/photo-1771218829838-f30edb7e0263?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZGluaW5nJTIwcm9vbSUyMGNoYW5kZWxpZXJ8ZW58MXx8fHwxNzcxODY0OTAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Plan Integral',
      description: 'Remodelación completa con mayor nivel de especificación en acabados.',
      featured: true
    },
    {
      id: 'signature',
      image: 'https://images.unsplash.com/photo-1754788358645-d6e6cca12e25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiYXRocm9vbSUyMHNwYSUyMG1hcmJsZXxlbnwxfHx8fDE3NzE4MjI5NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Plan Prestigio',
      description: 'Remodelación completa con alto nivel de personalización y acabados de especificación superior.'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
            Nuestros Planes
          </h2>
          <div className="w-20 h-0.5 bg-[#C9A85C] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
            Tres niveles de especificación. Un mismo estándar de ejecución.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col ${
                plan.featured ? 'ring-2 ring-[#C9A85C] transform md:scale-105' : ''
              }`}
            >
              {/* Badge */}
              {plan.featured && (
                <div className="bg-[#C9A85C] text-white text-center py-2 text-xs tracking-widest" style={{ fontFamily: 'Inter, sans-serif' }}>
                  MÁS POPULAR
                </div>
              )}
              
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src={plan.image}
                  alt={plan.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-3xl mb-4 text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {plan.title}
                </h3>
                <p className="text-gray-600 mb-8 font-light leading-relaxed flex-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {plan.description}
                </p>

                {/* Ver más Button */}
                <Link
                  to={`/planes#${plan.id}`}
                  className="w-full py-3 bg-white border-2 border-gray-300 text-gray-900 hover:border-[#C9A85C] hover:bg-[#C9A85C] hover:text-white transition-colors duration-200 text-sm tracking-wider rounded-lg flex items-center justify-center group"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  VER MÁS
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Ver todos los planes */}
        <div className="text-center mt-12">
          <Link
            to="/planes"
            className="inline-block px-10 py-4 bg-[#C9A85C] text-white hover:bg-[#B89644] transition-colors duration-200 text-sm tracking-widest rounded-lg"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            VER TODOS LOS PLANES
          </Link>
        </div>
      </div>
    </section>
  );
}