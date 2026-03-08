import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router';

export function YourOasis() {
  return (
    <>
      {/* BLOQUE DIFERENCIAL – TRANQUILIDAD Y RESPALDO */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6 text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
              Tu inversión protegida desde el primer día.
            </h2>
            <div className="w-20 h-0.5 bg-[#C9A85C] mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 font-light leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              Cada proyecto es estructurado antes de iniciar obra. Definimos alcance, materiales, tiempos y presupuesto de forma clara para evitar improvisaciones y sobrecostos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <CheckCircle size={32} className="text-[#C9A85C] mb-4" />
              <h3 className="text-xl mb-3 text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
                Póliza de cumplimiento
              </h3>
              <p className="text-gray-600 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                Respaldo legal que garantiza la finalización del proyecto según lo acordado.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <CheckCircle size={32} className="text-[#C9A85C] mb-4" />
              <h3 className="text-xl mb-3 text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
                Póliza de responsabilidad civil
              </h3>
              <p className="text-gray-600 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                Protección completa durante todo el proceso de construcción.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <CheckCircle size={32} className="text-[#C9A85C] mb-4" />
              <h3 className="text-xl mb-3 text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
                Presupuesto definido
              </h3>
              <p className="text-gray-600 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                Costos claros y aprobados antes de iniciar cualquier trabajo.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <CheckCircle size={32} className="text-[#C9A85C] mb-4" />
              <h3 className="text-xl mb-3 text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
                Cronograma
              </h3>
              <p className="text-gray-600 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                Tiempos de ejecución estructurados y compromiso de entrega.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <CheckCircle size={32} className="text-[#C9A85C] mb-4" />
              <h3 className="text-xl mb-3 text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
                Supervisión técnica permanente
              </h3>
              <p className="text-gray-600 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                Control de calidad en cada fase del proyecto.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <CheckCircle size={32} className="text-[#C9A85C] mb-4" />
              <h3 className="text-xl mb-3 text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
                Acta de entrega final
              </h3>
              <p className="text-gray-600 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                Documentación completa y garantías por escrito.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DISEÑO ARQUITECTÓNICO */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="lg:order-2">
              <div className="aspect-[4/3] overflow-hidden rounded-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1646153389640-958d7ba1a864?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3QlMjB3b3JraW5nJTIwbW9kZXJuJTIwb2ZmaWNlJTIwZGVzaWdufGVufDF8fHx8MTc3MjQ5NDg3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Diseño Arquitectónico"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="lg:order-1">
              <h2 className="text-4xl md:text-5xl mb-6 text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
                Diseñamos antes de construir.
              </h2>
              <div className="w-20 h-0.5 bg-[#C9A85C] mb-6"></div>
              <p className="text-xl text-gray-600 mb-8 font-light leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                Cada proyecto inicia con un diseño arquitectónico estructurado que permite visualizar el resultado antes de ejecutar obra.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle size={20} className="text-[#C9A85C] mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Planos detallados
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={20} className="text-[#C9A85C] mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Visualización 2D o 3D según plan
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={20} className="text-[#C9A85C] mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Definición técnica de materiales
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={20} className="text-[#C9A85C] mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Cumplimiento de normativas vigentes
                  </p>
                </div>
              </div>

              <div className="inline-block px-4 py-2 bg-[#C9A85C]/10 text-[#C9A85C] text-sm tracking-wider mb-6 rounded-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
                INCLUIDO EN TODOS NUESTROS PLANES
              </div>

              <div className="mt-6">
                <Link
                  to="/servicios"
                  className="inline-flex items-center text-[#C9A85C] hover:text-[#B89644] transition-colors duration-200 text-sm tracking-wider"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  CONOCER PLANES
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}