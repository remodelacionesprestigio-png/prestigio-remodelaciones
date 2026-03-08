import { ImageWithFallback } from './figma/ImageWithFallback';
import { Calendar, Users, Award } from 'lucide-react';
import { Link } from 'react-router';

export function FeaturedListings() {
  const projects = [
    {
      image: 'https://images.unsplash.com/photo-1622015663319-e97e697503ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2aWxsYSUyMGV4dGVyaW9yJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3MTgzMjYzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Apartamento en Rosales',
      category: 'Remodelación integral – 9 semanas',
      area: '85 m²',
      type: 'Apartamento residencial',
      description: 'Redistribución de cocina y renovación total de baños con acabados de alta especificación.'
    },
    {
      image: 'https://images.unsplash.com/photo-1559329146-807aff9ff1fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBidWlsZGluZyUyMGV4dGVyaW9yfGVufDF8fHx8MTc3MTg0NTA5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Casa en La Calera',
      category: 'Restauración y modernización interior',
      area: '120 m²',
      type: 'Casa residencial',
      description: 'Renovación completa manteniendo elementos arquitectónicos originales con materiales premium.'
    },
    {
      image: 'https://images.unsplash.com/photo-1706808849777-96e0d7be3bb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc3MTg2MDk1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Apartamento en Chicó',
      category: 'Remodelación completa',
      area: '95 m²',
      type: 'Apartamento residencial',
      description: 'Transformación integral con acabados de alta especificación y diseño contemporáneo.'
    }
  ];

  return (
    <section id="proyectos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
            Proyectos ejecutados con planeación y detalle.
          </h2>
          <div className="w-20 h-0.5 bg-[#C9A85C] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
            Cada proyecto refleja nuestro compromiso con la calidad, precisión y atención al detalle.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 rounded-lg">
              <div className="aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-[#C9A85C] mb-3 tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {project.category}
                </div>
                <h3 className="text-2xl mb-3 text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {project.title}
                </h3>
                <div className="space-y-2 mb-4 text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <div className="flex items-center">
                    <Users size={16} className="mr-2" />
                    {project.type}
                  </div>
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2" />
                    {project.area}
                  </div>
                </div>
                <p className="text-sm text-gray-600 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/proyectos"
            className="inline-block px-10 py-4 bg-[#C9A85C] text-white hover:bg-[#B89644] transition-colors duration-200 text-sm tracking-widest rounded-lg"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            VER TODOS LOS PROYECTOS
          </Link>
        </div>
      </div>
    </section>
  );
}