import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ArrowLeft, Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link, useParams } from 'react-router';
import { useModal } from './Root';

export function GuiaDetalle() {
  const { id } = useParams();
  const { onOpenModal } = useModal();

  // En una app real, esto vendría de una API o base de datos
  const guidesData: Record<string, any> = {
    '1': {
      title: 'Tendencias en Construcción de Lujo 2026',
      category: 'Tendencias',
      date: 'Febrero 24, 2026',
      readTime: '8 min',
      author: 'Equipo PRESTIGIO',
      image: 'https://images.unsplash.com/photo-1649663724528-3bd2ce98b6e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob21lJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzcxODY5ODQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      content: `
        <p>El mundo de la construcción de lujo está experimentando una transformación sin precedentes. Las nuevas tecnologías, materiales innovadores y un enfoque renovado en la sostenibilidad están redefiniendo lo que significa construir con verdadero lujo.</p>

        <h2>Materiales Sostenibles de Alta Gama</h2>
        <p>Los materiales ecológicos ya no son una alternativa sino el estándar en construcción de lujo. Maderas certificadas, piedras naturales con bajo impacto ambiental y acabados no tóxicos están ganando protagonismo sin sacrificar estética ni calidad.</p>

        <h2>Integración Tecnológica Invisible</h2>
        <p>La domótica avanzada se está integrando de manera más discreta que nunca. Los sistemas inteligentes de iluminación, clima y seguridad ahora son prácticamente invisibles, manteniendo la pureza del diseño arquitectónico.</p>

        <h2>Espacios Multifuncionales</h2>
        <p>La flexibilidad espacial se ha convertido en un elemento clave. Los espacios que pueden adaptarse a diferentes usos según el momento del día o las necesidades del usuario representan el nuevo estándar del lujo funcional.</p>

        <h2>Conexión con la Naturaleza</h2>
        <p>Los diseños biofílicos que incorporan elementos naturales no solo en la decoración sino en la estructura misma de la construcción están creando espacios que promueven el bienestar y la conexión con el entorno.</p>

        <h2>Minimalismo Cálido</h2>
        <p>El minimalismo evoluciona hacia espacios que mantienen la simplicidad visual pero incorporan texturas ricas, materiales naturales y detalles artesanales que aportan calidez y personalidad.</p>
      `
    },
    '2': {
      title: 'Guía Completa de Remodelación',
      category: 'Guías',
      date: 'Febrero 20, 2026',
      readTime: '10 min',
      author: 'Equipo PRESTIGIO',
      image: 'https://images.unsplash.com/photo-1625579002297-aeebbf69de89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWRyb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcxODkyODU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      content: `
        <p>Embarcarse en un proyecto de remodelación puede ser emocionante y desafiante. Esta guía te ayudará a navegar cada fase del proceso con confianza y claridad.</p>

        <h2>Fase de Planificación</h2>
        <p>La clave del éxito comienza con una planificación meticulosa. Define tus objetivos, establece un presupuesto realista y crea una visión clara de lo que deseas lograr. Considera no solo el presente sino cómo usarás el espacio en los próximos años.</p>

        <h2>Selección del Equipo</h2>
        <p>Elegir profesionales experimentados marca la diferencia entre un proyecto exitoso y uno problemático. Busca arquitectos, diseñadores y contratistas con experiencia comprobada en proyectos similares y referencias verificables.</p>

        <h2>Permisos y Documentación</h2>
        <p>Asegúrate de obtener todos los permisos necesarios antes de comenzar. Este paso, aunque burocrático, te protege legalmente y garantiza que tu remodelación cumpla con todas las normativas locales.</p>

        <h2>Gestión del Proyecto</h2>
        <p>Mantén una comunicación constante con tu equipo. Programa revisiones regulares del avance, documenta cada decisión importante y mantén flexibilidad para ajustes necesarios sin perder de vista tu visión original.</p>

        <h2>Calidad y Detalles Finales</h2>
        <p>Los detalles finales son lo que transforma una buena remodelación en una excepcional. No escatimes en acabados de calidad y asegúrate de que cada elemento esté perfectamente instalado antes de la entrega final.</p>
      `
    },
    '3': {
      title: 'Materiales Premium para tu Hogar',
      category: 'Materiales',
      date: 'Febrero 15, 2026',
      readTime: '7 min',
      author: 'Equipo PRESTIGIO',
      image: 'https://images.unsplash.com/photo-1707299231603-6c0a93e0f7fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwbGl2aW5nJTIwcm9vbSUyMGRlc2lnbnxlbnwxfHx8fDE3NzE4ODAwNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      content: `
        <p>La selección de materiales premium no solo define la estética de tu hogar sino también su durabilidad, funcionalidad y valor a largo plazo.</p>

        <h2>Mármol Natural</h2>
        <p>El mármol sigue siendo uno de los materiales más codiciados en construcción de lujo. Variedades como el Calacatta, Statuario y Emperador ofrecen vetas únicas y una elegancia atemporal. Ideal para baños, cocinas y espacios de representación.</p>

        <h2>Maderas Nobles</h2>
        <p>Roble europeo, nogal americano y teca son opciones premium para pisos y carpintería. Estas maderas no solo son hermosas sino extremadamente duraderas cuando se tratan adecuadamente. Su calidez natural crea ambientes acogedores y sofisticados.</p>

        <h2>Porcelanato de Gran Formato</h2>
        <p>Los porcelanatos de gran formato imitan perfectamente piedras naturales mientras ofrecen mayor durabilidad y menor mantenimiento. Ideales para áreas de alto tráfico sin sacrificar elegancia.</p>

        <h2>Herrajes y Grifería</h2>
        <p>Marcas como Dornbracht, Hansgrohe y Kohler ofrecen piezas que son verdaderas joyas funcionales. Los acabados en níquel cepillado, bronce envejecido o negro mate añaden ese toque distintivo que eleva el diseño.</p>

        <h2>Vidrios y Cristales</h2>
        <p>Los vidrios de alta tecnología con control solar, aislamiento térmico y acústico son inversiones que mejoran el confort mientras mantienen vistas panorámicas y luminosidad natural.</p>
      `
    }
  };

  const guide = guidesData[id || '1'] || guidesData['1'];

  return (
    <div className="pt-24">
      {/* Back Button */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <Link
            to="/guias"
            className="inline-flex items-center text-gray-600 hover:text-[#C9A85C] transition-colors"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            <ArrowLeft size={20} className="mr-2" />
            Volver a Guías
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <section className="relative h-[60vh]">
        <ImageWithFallback
          src={guide.image}
          alt={guide.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Meta Info */}
          <div className="mb-8">
            <div className="text-sm text-[#C9A85C] mb-3 tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>
              {guide.category}
            </div>
            <h1 className="text-5xl md:text-6xl mb-6 text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
              {guide.title}
            </h1>
            <div className="flex items-center gap-6 text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                {guide.date}
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-2" />
                {guide.readTime} lectura
              </div>
              <div>
                Por {guide.author}
              </div>
            </div>
          </div>

          <div className="w-20 h-0.5 bg-[#C9A85C] mb-12"></div>

          {/* Article Body */}
          <div 
            className="prose prose-lg max-w-none"
            style={{ fontFamily: 'Inter, sans-serif' }}
            dangerouslySetInnerHTML={{ __html: guide.content }}
          />

          {/* CTA */}
          <div className="mt-16 p-8 bg-gray-50 rounded-lg text-center">
            <h3 className="text-3xl mb-4 text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
              ¿Listo para Comenzar tu Proyecto?
            </h3>
            <p className="text-gray-600 mb-6 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
              Agenda una consulta gratuita con nuestros expertos
            </p>
            <button
              onClick={onOpenModal}
              className="inline-flex items-center px-10 py-4 bg-[#C9A85C] text-white hover:bg-[#B89644] transition-colors duration-200 text-sm tracking-widest rounded-lg"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              SOLICITAR CONSULTA
              <ArrowRight size={16} className="ml-2" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
