import { ImageWithFallback } from './figma/ImageWithFallback';
import { CheckCircle, Clock } from 'lucide-react';

interface AgentSectionProps {
  onOpenModal: () => void;
}

export function AgentSection({ onOpenModal }: AgentSectionProps) {
  const phases = [
    {
      week: 'Semana 1',
      title: 'Diseño y definición',
      description: 'Ajustes finales, selección de materiales y aprobación de cronograma.'
    },
    {
      week: 'Semana 2',
      title: 'Preparación y demoliciones',
      description: 'Retiro de escombros y adecuaciones técnicas.'
    },
    {
      week: 'Semana 3 a 6',
      title: 'Desarrollo de obra',
      description: 'Instalaciones, enchapes, carpintería y acabados principales.'
    },
    {
      week: 'Semana 7 y 8',
      title: 'Instalaciones finales',
      description: 'Griferías, sanitarios, electrodomésticos e iluminación.'
    },
    {
      week: 'Semana 9 y 10',
      title: 'Detalles y entrega',
      description: 'Revisión general, limpieza profunda y acta formal de entrega.'
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
            Un proceso estructurado que garantiza resultados.
          </h2>
          <div className="w-20 h-0.5 bg-[#C9A85C] mx-auto mb-8"></div>
          
          {/* Tiempo estimado */}
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl mb-6 text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
              Tiempo estimado
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start">
                <Clock size={24} className="text-[#C9A85C] mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-600 mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Diseño arquitectónico
                  </p>
                  <p className="text-lg font-medium text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>
                    1 a 2 semanas
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock size={24} className="text-[#C9A85C] mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-600 mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Ejecución de obra
                  </p>
                  <p className="text-lg font-medium text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>
                    8 a 9 semanas
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock size={24} className="text-[#C9A85C] mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-600 mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Duración total
                  </p>
                  <p className="text-lg font-medium text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>
                    hasta 10 semanas
                  </p>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-6 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
              según alcance del proyecto
            </p>
          </div>
        </div>

        {/* Fases del Proyecto */}
        <div className="mb-16">
          <h3 className="text-3xl mb-10 text-gray-900 text-center" style={{ fontFamily: 'Playfair Display, serif' }}>
            Fases del Proyecto
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {phases.map((phase, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="inline-block px-4 py-1 bg-[#C9A85C] text-white text-xs tracking-wider mb-4 rounded-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {phase.week}
                </div>
                <h4 className="text-xl mb-3 text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {phase.title}
                </h4>
                <p className="text-gray-600 font-light leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-white p-12 rounded-xl shadow-sm">
          <button
            onClick={onOpenModal}
            className="inline-block px-10 py-4 bg-[#C9A85C] text-white hover:bg-[#B89644] transition-colors duration-200 text-sm tracking-widest rounded-lg"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            INICIAR MI PROYECTO
          </button>
        </div>
      </div>
    </section>
  );
}