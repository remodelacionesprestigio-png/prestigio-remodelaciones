import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { CheckCircle, X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { useModal } from './Root';
import { useEffect } from 'react';
import { SEO } from '../components/SEO';

export function ServiciosPage() {
  const { onOpenModal } = useModal();
  
  // Scroll to plan on load if hash exists
  useEffect(() => {
    if (window.location.hash) {
      const planId = window.location.hash.substring(1);
      const element = document.getElementById(planId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      }
    }
  }, []);
  
  const plans = [
    {
      id: 'esencia',
      name: 'Plan Esencia',
      description: 'Remodelación completa optimizando elementos existentes y priorizando funcionalidad.',
      tagline: 'Ideal para transformar el espacio con equilibrio entre inversión y resultado.',
      image: 'https://images.unsplash.com/photo-1640109414028-4c7f29f39ad4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBiZWRyb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcxODY5Mzg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: [
        { included: true, text: 'Conservación de mesones en acero o granito (si están en buen estado)' },
        { included: true, text: 'Enchapes de alta calidad estándar' },
        { included: true, text: 'Mobiliario en melanina RH con fondos blancos' },
        { included: true, text: 'Herrajes funcionales estándar' },
        { included: true, text: 'Duchas existentes o sistemas tradicionales' },
        { included: true, text: 'Iluminación funcional estratégica' }
      ]
    },
    {
      id: 'integral',
      name: 'Plan Integral',
      description: 'Remodelación completa con mayor nivel de especificación en acabados.',
      tagline: 'Un salto claro en estética y detalle.',
      image: 'https://images.unsplash.com/photo-1771218829838-f30edb7e0263?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZGluaW5nJTIwcm9vbSUyMGNoYW5kZWxpZXJ8ZW58MXx8fHwxNzcxODY0OTAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      featured: true,
      features: [
        { included: true, text: 'Mesones en cuarzo o granito seleccionado' },
        { included: true, text: 'Enchapes de mayor formato' },
        { included: true, text: 'Mobiliario personalizado en tonos combinados' },
        { included: true, text: 'Herrajes de cierre lento de alta durabilidad' },
        { included: true, text: 'Duchas cuadradas o torre ducha' },
        { included: true, text: 'Iluminación LED integrada en cocina' }
      ]
    },
    {
      id: 'signature',
      name: 'Plan Prestigio',
      description: 'Remodelación completa con alto nivel de personalización y acabados de especificación superior.',
      tagline: 'Máximo nivel de detalle y personalización.',
      image: 'https://images.unsplash.com/photo-1754788358645-d6e6cca12e25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiYXRocm9vbSUyMHNwYSUyMG1hcmJsZXxlbnwxfHx8fDE3NzE4MjI5NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: [
        { included: true, text: 'Mesones en mármol o piedra sinterizada' },
        { included: true, text: 'Enchapes premium de gran formato' },
        { included: true, text: 'Mobiliario totalmente personalizado' },
        { included: true, text: 'Herrajes de alta gama' },
        { included: true, text: 'Torre ducha premium o sistemas tipo spa' },
        { included: true, text: 'Iluminación arquitectónica integral' },
        { included: true, text: 'Detalles constructivos adicionales' }
      ]
    }
  ];

  return (
    <div className="pt-24">
      <SEO
        title="Planes de Remodelación - Esencia, Integral y Prestigio"
        description="Descubre nuestros 3 planes de remodelación de lujo: Plan Esencia ($1.1M/m²), Plan Integral ($1.3M/m²) y Plan Prestigio ($1.5M/m²). Diseño arquitectónico, acabados premium y ejecución impecable."
        keywords="planes remodelación, precios remodelación, plan esencia, plan integral, plan prestigio, remodelación por m2, cotización remodelación, diseño arquitectónico"
        image="https://images.unsplash.com/photo-1721132537184-5494c01ed87f?w=1200&h=630&fit=crop"
      />
      {/* Hero */}
      <section className="relative py-32 overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1721132537184-5494c01ed87f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3QlMjBibHVlcHJpbnQlMjBwbGFuc3xlbnwxfHx8fDE3NzIwMDU0NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Architecture plans"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <h1 className="text-6xl md:text-7xl lg:text-8xl mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Nuestros Planes
          </h1>
          <div className="w-20 h-0.5 bg-[#C9A85C] mx-auto mb-6"></div>
          <p className="text-xl font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
            Tres niveles de especificación. Un mismo estándar de ejecución.
          </p>
        </div>
      </section>

      {/* Plans Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div 
                key={plan.id}
                id={plan.id}
                className={`bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl ${
                  plan.featured ? 'ring-2 ring-[#C9A85C] transform md:scale-105' : ''
                }`}
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={plan.image}
                    alt={plan.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-8">
                  {plan.featured && (
                    <div className="inline-block px-4 py-1 bg-[#C9A85C] text-white text-xs tracking-wider mb-4 rounded-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
                      MÁS POPULAR
                    </div>
                  )}
                  
                  <h3 className="text-3xl mb-2 text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {plan.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {plan.description}
                  </p>

                  <p className="text-sm text-gray-900 mb-4 font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Incluye:
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        {feature.included ? (
                          <CheckCircle size={20} className="text-[#C9A85C] mr-3 mt-0.5 flex-shrink-0" />
                        ) : (
                          <X size={20} className="text-gray-300 mr-3 mt-0.5 flex-shrink-0" />
                        )}
                        <span 
                          className={`text-sm font-light ${feature.included ? 'text-gray-700' : 'text-gray-400'}`}
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-sm text-gray-600 italic mb-6 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {plan.tagline}
                  </p>

                  {/* CTA Button */}
                  <button
                    onClick={onOpenModal}
                    className={`w-full py-3 text-center text-sm tracking-wider transition-colors duration-200 rounded-lg ${
                      plan.featured
                        ? 'bg-[#C9A85C] text-white hover:bg-[#B89644]'
                        : 'border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
                    }`}
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    SOLICITAR COTIZACIÓN
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6 text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
              Todos los Planes Incluyen
            </h2>
            <div className="w-20 h-0.5 bg-[#C9A85C] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#C9A85C] mx-auto mb-4 flex items-center justify-center rounded-lg">
                <CheckCircle size={32} className="text-white" />
              </div>
              <h3 className="text-xl mb-3 text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
                Consultoría Inicial
              </h3>
              <p className="text-gray-600 font-light text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                Evaluación completa sin costo
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#C9A85C] mx-auto mb-4 flex items-center justify-center rounded-lg">
                <CheckCircle size={32} className="text-white" />
              </div>
              <h3 className="text-xl mb-3 text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
                Permisos y Licencias
              </h3>
              <p className="text-gray-600 font-light text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                Gestión completa de documentación
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#C9A85C] mx-auto mb-4 flex items-center justify-center rounded-lg">
                <CheckCircle size={32} className="text-white" />
              </div>
              <h3 className="text-xl mb-3 text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
                Supervisión Continua
              </h3>
              <p className="text-gray-600 font-light text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                Monitoreo diario del proyecto
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#C9A85C] mx-auto mb-4 flex items-center justify-center rounded-lg">
                <CheckCircle size={32} className="text-white" />
              </div>
              <h3 className="text-xl mb-3 text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
                Limpieza Final
              </h3>
              <p className="text-gray-600 font-light text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                Entrega impecable lista para usar
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Architectural Design Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div>
              <div className="aspect-[4/3] overflow-hidden rounded-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1646153389640-958d7ba1a864?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3QlMjB3b3JraW5nJTIwbW9kZXJuJTIwb2ZmaWNlJTIwZGVzaWdufGVufDF8fHx8MTc3MjQ5NDg3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Diseño Arquitectónico"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="inline-block px-4 py-1 bg-[#C9A85C] text-white text-xs tracking-wider mb-6 rounded-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
                SERVICIO DESTACADO
              </div>
              <h2 className="text-4xl md:text-5xl mb-6 text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
                Diseñamos antes de construir.
              </h2>
              <div className="w-20 h-0.5 bg-[#C9A85C] mb-6"></div>
              <p className="text-xl text-gray-600 mb-8 font-light leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                Cada proyecto inicia con un diseño arquitectónico estructurado que permite visualizar el resultado antes de ejecutar obra.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle size={24} className="text-[#C9A85C] mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl mb-1 text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
                      Planos detallados
                    </h3>
                    <p className="text-gray-600 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Documentación técnica completa con especificaciones precisas
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle size={24} className="text-[#C9A85C] mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl mb-1 text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
                      Visualización 2D o 3D según plan
                    </h3>
                    <p className="text-gray-600 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Representación clara del resultado final adaptada a tu plan seleccionado
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle size={24} className="text-[#C9A85C] mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl mb-1 text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
                      Definición técnica de materiales
                    </h3>
                    <p className="text-gray-600 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Especificación detallada de acabados y materiales según presupuesto
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle size={24} className="text-[#C9A85C] mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl mb-1 text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
                      Cumplimiento de normativas vigentes
                    </h3>
                    <p className="text-gray-600 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Diseños que cumplen con todas las regulaciones locales aplicables
                    </p>
                  </div>
                </div>
              </div>

              <button
                onClick={onOpenModal}
                className="inline-flex items-center px-8 py-3 bg-[#C9A85C] text-white hover:bg-[#B89644] transition-colors duration-200 text-sm tracking-widest rounded-lg"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                CONSULTAR DISEÑO
                <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            ¿Listo para Comenzar?
          </h2>
          <p className="text-xl mb-8 font-light text-gray-300" style={{ fontFamily: 'Inter, sans-serif' }}>
            Agenda una consulta gratuita y descubre cómo podemos transformar tu espacio
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onOpenModal}
              className="inline-block px-10 py-4 bg-[#C9A85C] text-white hover:bg-[#B89644] transition-colors duration-200 text-sm tracking-widest rounded-lg"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              SOLICITAR CONSULTA
            </button>
            <Link
              to="/proyectos"
              className="inline-flex items-center justify-center px-10 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-colors duration-200 text-sm tracking-widest rounded-lg"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              VER PROYECTOS
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}