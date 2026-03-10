import { CheckCircle } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { PortfolioCard } from './PortfolioCard';
import cocina1 from 'figma:asset/14a2ddc305c2d02231ce0b5c51d9206c37b373df.png';
import cocina2 from 'figma:asset/bb6e63176f0c866154ceb3f1d7d5e3e99571cab9.png';
import cocina3 from 'figma:asset/6b768ba9243a74604f3e4009557f41244c7e6006.png';
import cocina4 from 'figma:asset/fb23228a26a4e8c01927611c63e5a67a1624fb74.png';
import bano1 from 'figma:asset/0b7249bd3bb458abff57029688834c029475f96e.png';
import bano2 from 'figma:asset/c174b22678718598744c493aa090d6a943ccb0dc.png';
import bano3 from 'figma:asset/ffd2878ddcd808c1f5af97f11b071b8bad1eefe9.png';
import bano4 from 'figma:asset/6f387a99656274e6271fa40d286675155f51b925.png';
import bano5 from 'figma:asset/1ce8ca972d5cd9012018279d181a124579eda9bf.png';
import bano6 from 'figma:asset/6864605e4818dac927f1f0fff50832f2d4c4c12c.png';

export function PortfolioRemodelaciones() {
  const whatsappNumber = '573123456789'; // Actualizar con tu número real
  const whatsappMessage = encodeURIComponent('Hola, me gustaría cotizar mi remodelación');

  // Arrays de imágenes - Cambia estas URLs fácilmente
  const cocinaImages = [cocina1, cocina2, cocina3, cocina4];
  
  const banoImages = [bano1, bano2, bano3, bano4, bano5, bano6];
  
  const salaImages = [
    'https://images.unsplash.com/photo-1767800765630-f5603a47df68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBsaXZpbmclMjByb29tJTIwTEVEJTIwbGlnaHRpbmclMjBkZXNpZ258ZW58MXx8fHwxNzczMTEwMzQwfDA&ixlib=rb-4.1.0&q=80&w=1080'
  ];
  
  const habitacionImages = [
    'https://images.unsplash.com/photo-1765434669956-afcd50058d69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwbWFzdGVyJTIwYmVkcm9vbSUyMGNvbnRlbXBvcmFyeSUyMGludGVyaW9yfGVufDF8fHx8MTc3MzExMDM0MXww&ixlib=rb-4.1.0&q=80&w=1080'
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl mb-6 text-gray-900" 
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Portafolio de remodelaciones realizadas Bogotá
          </h2>
          <div className="w-20 h-0.5 bg-[#C9A85C] mx-auto mb-8"></div>
          <p 
            className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto mb-12"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Más de 13 años de experiencia en proyectos de remodelación exitosos en Suba, Usaquén, Chicó, Santa Bárbara y toda la zona norte de Bogotá
          </p>

          {/* Checkpoints */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <div className="flex items-center gap-3">
              <CheckCircle size={24} className="text-[#C9A85C] flex-shrink-0" />
              <span 
                className="text-gray-700 font-medium text-lg"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Manejamos cotizaciones fijas no modificables
              </span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle size={24} className="text-[#C9A85C] flex-shrink-0" />
              <span 
                className="text-gray-700 font-medium text-lg"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Cumplimos con tiempos de entrega
              </span>
            </div>
          </div>
        </div>

        {/* Grid de Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <PortfolioCard
            images={cocinaImages}
            category="Cocinas"
            title="Remodelación integral"
            description="Diseños modernos y funcionales"
          />

          <PortfolioCard
            images={banoImages}
            category="Baños"
            title="Baños spa de lujo"
            description="Acabados premium y confort"
          />

          <PortfolioCard
            images={salaImages}
            category="Salas"
            title="Diseños contemporáneos"
            description="Iluminación LED arquitectónica"
          />

          <PortfolioCard
            images={habitacionImages}
            category="Habitaciones"
            title="Espacios de descanso"
            description="Ambientes elegantes y acogedores"
          />
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <p 
            className="text-2xl text-gray-600 mb-8 font-light"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            ¿Te inspiró algún proyecto? Agenda tu visita técnica gratuita
          </p>
          
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-teal-700 hover:bg-teal-800 text-white text-lg font-medium rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            <svg 
              className="w-7 h-7" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Cotizar mi remodelación
          </a>
        </div>
      </div>

      {/* Custom Slider Styles */}
      <style>{`
        .slick-slider {
          height: 100%;
        }
        .slick-list,
        .slick-track {
          height: 100%;
        }
        .slick-slide > div {
          height: 100%;
        }
        .slick-slide > div > div {
          height: 100%;
        }
      `}</style>
    </section>
  );
}