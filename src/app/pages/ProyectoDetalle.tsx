import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link, useParams } from 'react-router';
import { useModal } from './Root';

export function ProyectoDetalle() {
  const { id } = useParams();
  const { onOpenModal } = useModal();

  // En una app real, esto vendría de una API o base de datos
  const projectsData: Record<string, any> = {
    '1': {
      title: 'Todos Nuestros Proyectos',
      category: 'Construcción',
      mainImage: 'https://images.unsplash.com/photo-1622015663319-e97e697503ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2aWxsYSUyMGV4dGVyaW9yJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3MTgzMjYzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gallery: [
        'https://res.cloudinary.com/dftx2cezq/image/upload/v1772938489/eeb35f12-ffb0-43b6-a138-70bdd6a0f256_lh1ukg.jpg',
        'https://res.cloudinary.com/dftx2cezq/image/upload/v1772938489/f06bb201-a7f3-4070-a1d5-cef1fa2cfd20_bxh3gi.jpg',
        'https://res.cloudinary.com/dftx2cezq/image/upload/v1772938489/f3bb1431-f8b0-46d7-ae00-a1687c108da0_c7qvew.jpg',
        'https://res.cloudinary.com/dftx2cezq/image/upload/v1772938489/fb88f514-9a6c-444b-a9a3-cfa4da19be45_knchce.jpg',
        'https://res.cloudinary.com/dftx2cezq/image/upload/v1772938489/edf805f4-a0b0-4121-bfdb-677bbb8fa89a_jqkxgq.jpg',
        'https://res.cloudinary.com/dftx2cezq/image/upload/v1772938488/e4012865-1c42-4bd3-bc84-c85c18279d6f_vluxqa.jpg',
        'https://res.cloudinary.com/dftx2cezq/image/upload/v1772938489/dcf29a46-d875-4d57-adcb-312abe357685_dbqvse.jpg',
        'https://res.cloudinary.com/dftx2cezq/image/upload/v1772938486/cb7a909b-047e-4c4e-9e9b-6fdc0ce06954_hhg23l.jpg',
        'https://res.cloudinary.com/dftx2cezq/image/upload/v1772938485/c3757efc-3fbb-4ab7-8179-01403cce9ebb_uag3zo.jpg',
        'https://res.cloudinary.com/dftx2cezq/image/upload/v1772938485/af036623-d36c-49a6-8ca4-fee6fd492f22_acmx6c.jpg'
      ],
      description: 'Galería de nuestros proyectos'
    }
  };

  const project = projectsData[id || '1'] || projectsData['1'];

  return (
    <div className="pt-24">
      {/* Back Button */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
          <Link
            to="/proyectos"
            className="inline-flex items-center text-gray-600 hover:text-[#C9A85C] transition-colors"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            <ArrowLeft size={20} className="mr-2" />
            Volver a Proyectos
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-4">
            <div className="text-sm text-[#C9A85C] mb-2 tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>
              {project.category}
            </div>
            <h1 className="text-5xl md:text-6xl text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              {project.title}
            </h1>
            <div className="w-20 h-0.5 bg-[#C9A85C] mb-8"></div>
            <p className="text-xl text-gray-600 font-light leading-relaxed max-w-4xl" style={{ fontFamily: 'Inter, sans-serif' }}>
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl mb-12 text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
            Galería del Proyecto
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.gallery.map((image: string, idx: number) => (
              <div key={idx} className="aspect-[4/3] overflow-hidden rounded-lg">
                <ImageWithFallback
                  src={image}
                  alt={`${project.title} - Image ${idx + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center bg-gray-50 p-12 rounded-lg">
            <h2 className="text-4xl mb-4 text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
              ¿Listo para tu Proyecto?
            </h2>
            <p className="text-lg text-gray-600 mb-8 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
              Cuéntanos tu visión y la haremos realidad
            </p>
            <button
              onClick={onOpenModal}
              className="inline-flex items-center px-10 py-4 bg-[#C9A85C] text-white hover:bg-[#B89644] transition-colors duration-200 text-sm tracking-widest rounded-lg"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              SOLICITAR COTIZACIÓN
              <ArrowRight size={16} className="ml-2" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}