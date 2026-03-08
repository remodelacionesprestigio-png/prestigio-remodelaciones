import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Calendar, MapPin, Award, ArrowRight, Filter } from 'lucide-react';
import { Link } from 'react-router';
import { useState } from 'react';
import { useModal } from './Root';
import { SEO } from '../components/SEO';

export function ProyectosPage() {
  const { onOpenModal } = useModal();
  const [filter, setFilter] = useState('todos');

  const projects = [
    {
      id: '1',
      image: 'https://res.cloudinary.com/dftx2cezq/image/upload/v1772938481/36adf109-7768-45f1-a0a6-fe81988fe2f5_fgan1o.jpg',
      title: 'Apartamento en Rosales',
      category: 'Remodelación',
      location: 'Rosales, Bogotá',
      year: '2025',
      area: '85 m²',
      award: 'Proyecto Destacado 2025',
      description: 'Redistribución de cocina y renovación total de baños con acabados de alta especificación.'
    },
    {
      id: '2',
      image: 'https://res.cloudinary.com/dftx2cezq/image/upload/v1772938482/6c5454df-8b76-41ce-9d18-75e0f80c0cd1_rrhd0w.jpg',
      title: 'Casa en La Calera',
      category: 'Remodelación',
      location: 'La Calera, Cundinamarca',
      year: '2024',
      area: '120 m²',
      award: 'Mejor Renovación 2024',
      description: 'Renovación completa manteniendo elementos arquitectónicos originales con materiales premium.'
    },
    {
      id: '3',
      image: 'https://res.cloudinary.com/dftx2cezq/image/upload/v1772938482/6edeb301-32ca-4a65-9b82-1ff75f6783d2_hz7fek.jpg',
      title: 'Apartamento en Chicó',
      category: 'Remodelación',
      location: 'Chicó, Bogotá',
      year: '2025',
      area: '95 m²',
      award: 'Excelencia en Diseño 2025',
      description: 'Transformación integral con acabados de alta especificación y diseño contemporáneo.'
    },
    {
      id: '4',
      image: 'https://res.cloudinary.com/dftx2cezq/image/upload/v1772938482/8be69a4a-09a5-4e86-895f-99c0438a67a3_yfm0uf.jpg',
      title: 'Cocina en Usaquén',
      category: 'Remodelación',
      location: 'Usaquén, Bogotá',
      year: '2024',
      area: '35 m²',
      award: 'Diseño Interior 2024',
      description: 'Cocina gourmet con mesones en cuarzo y acabados de especificación superior.'
    },
    {
      id: '5',
      image: 'https://res.cloudinary.com/dftx2cezq/image/upload/v1772938483/68f79043-7730-4010-ac25-1ab906d099e1_k40sld.jpg',
      title: 'Suite Principal en La Cabrera',
      category: 'Diseño',
      location: 'La Cabrera, Bogotá',
      year: '2024',
      area: '45 m²',
      award: 'Mejor Interiorismo 2024',
      description: 'Dormitorio principal con vestidor personalizado y baño tipo spa integrado.'
    },
    {
      id: '6',
      image: 'https://res.cloudinary.com/dftx2cezq/image/upload/v1772938484/58330586-f977-4718-849f-cab9421f9764_nzzrqp.jpg',
      title: 'Baño Principal en Santa Bárbara',
      category: 'Remodelación',
      location: 'Santa Bárbara, Bogotá',
      year: '2024',
      area: '18 m²',
      award: 'Innovación en Diseño 2024',
      description: 'Baño con acabados en mármol, torre ducha premium y sistema de iluminación arquitectónica.'
    }
  ];

  const filteredProjects = filter === 'todos' 
    ? projects 
    : projects.filter(p => p.category.toLowerCase() === filter);

  return (
    <div className="pt-24">
      <SEO
        title="Proyectos de Remodelación y Construcción"
        description="Explora nuestro portafolio de proyectos de construcción y remodelación de lujo en Bogotá. Apartamentos, casas, cocinas y baños con acabados premium y diseño excepcional."
        keywords="proyectos remodelación Bogotá, construcciones lujo Colombia, portafolio remodelaciones, antes y después remodelación, galería proyectos construcción"
        image="https://images.unsplash.com/photo-1759256243437-9c8f7238c42b?w=1200&h=630&fit=crop"
      />
      {/* Hero */}
      <section className="relative py-32 overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1759256243437-9c8f7238c42b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtYW5zaW9uJTIwb3V0ZG9vciUyMHBvb2x8ZW58MXx8fHwxNzcxODkzMjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Luxury projects"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <h1 className="text-6xl md:text-7xl lg:text-8xl mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Nuestros Proyectos
          </h1>
          <div className="w-20 h-0.5 bg-[#C9A85C] mx-auto mb-6"></div>
          <p className="text-xl font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
            Cada proyecto refleja nuestro compromiso con la calidad, precisión y atención al detalle
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div className="flex items-center text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
              <Filter size={20} className="mr-2" />
              Filtrar:
            </div>
            {['todos', 'construcción', 'remodelación', 'diseño'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 text-sm tracking-wide transition-colors duration-200 ${
                  filter === cat 
                    ? 'bg-[#C9A85C] text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                to={`/proyectos/${project.id}`}
                className="group cursor-pointer bg-white border border-gray-200 hover:shadow-xl transition-all duration-300 rounded-lg overflow-hidden"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-[#C9A85C] mb-2 tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {project.category}
                  </div>
                  <h3 className="text-2xl mb-3 text-gray-900 group-hover:text-[#C9A85C] transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 font-light text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {project.description}
                  </p>
                  <div className="space-y-2 mb-4 text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <div className="flex items-center">
                      <MapPin size={14} className="mr-2" />
                      {project.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-2" />
                      {project.year} · {project.area}
                    </div>
                    <div className="flex items-center">
                      <Award size={14} className="mr-2 text-[#C9A85C]" />
                      {project.award}
                    </div>
                  </div>
                  <div className="flex items-center text-[#C9A85C] text-sm group-hover:gap-2 transition-all" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Ver detalles
                    <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
            ¿Listo para tu Proyecto?
          </h2>
          <p className="text-xl text-gray-600 mb-8 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
            Agenda una consulta inicial sin costo para iniciar tu proyecto con claridad
          </p>
          <button
            onClick={onOpenModal}
            className="inline-block px-10 py-4 bg-[#C9A85C] text-white hover:bg-[#B89644] transition-colors duration-200 text-sm tracking-widest rounded-lg"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            SOLICITAR CONSULTA
          </button>
        </div>
      </section>
    </div>
  );
}