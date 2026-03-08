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
      title: 'Villa Moderna Beverly Hills',
      category: 'Construcción',
      mainImage: 'https://images.unsplash.com/photo-1622015663319-e97e697503ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2aWxsYSUyMGV4dGVyaW9yJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3MTgzMjYzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gallery: [
        'https://images.unsplash.com/photo-1640109414028-4c7f29f39ad4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBiZWRyb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcxODY5Mzg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        'https://images.unsplash.com/photo-1643034738686-d69e7bc047e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBraXRjaGVuJTIwd2hpdGV8ZW58MXx8fHwxNzcxODgwMTY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        'https://images.unsplash.com/photo-1754788358645-d6e6cca12e25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiYXRocm9vbSUyMHNwYSUyMG1hcmJsZXxlbnwxfHx8fDE3NzE4MjI5NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        'https://images.unsplash.com/photo-1707299231603-6c0a93e0f7fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwbGl2aW5nJTIwcm9vbSUyMGRlc2lnbnxlbnwxfHx8fDE3NzE4ODAwNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        'https://images.unsplash.com/photo-1622015663319-e97e697503ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2aWxsYSUyMGV4dGVyaW9yJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3MTgzMjYzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        'https://images.unsplash.com/photo-1640109414028-4c7f29f39ad4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBiZWRyb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcxODY5Mzg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
      ],
      description: 'Esta espectacular villa moderna en Beverly Hills representa lo mejor de la construcción de lujo contemporánea. Diseñada con una estética minimalista y acabados de la más alta calidad, la propiedad cuenta con amplios espacios abiertos, techos de doble altura y grandes ventanales que maximizan la luz natural. El proyecto integra tecnología smart home de vanguardia manteniendo la elegancia del diseño.'
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