import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: '¿Cuánto tiempo toma un proyecto de construcción completo?',
      answer: 'El tiempo varía según el tamaño y complejidad del proyecto. Una residencia de lujo puede tomar entre 12 a 18 meses desde el diseño hasta la finalización. Te proporcionamos un cronograma detallado en la consulta inicial.'
    },
    {
      question: '¿Ofrecen servicios de diseño arquitectónico?',
      answer: 'Sí, contamos con arquitectos internos que crean diseños personalizados. También trabajamos con tus arquitectos preferidos si ya tienes planos. Nuestro objetivo es hacer realidad tu visión con la máxima calidad.'
    },
    {
      question: '¿Qué garantías ofrecen en sus proyectos?',
      answer: 'Ofrecemos garantías estructurales de 10 años y garantías en acabados de 2 años. Todos nuestros proyectos cumplen con los más altos estándares de calidad y están respaldados por certificaciones profesionales.'
    },
    {
      question: '¿Puedo remodelar solo una parte de mi propiedad?',
      answer: 'Absolutamente. Realizamos desde remodelaciones de una sola habitación hasta renovaciones completas. Ya sea una cocina, baño, o ampliación, cada proyecto recibe nuestra atención completa y profesional.'
    }
  ];

  return (
    <section id="proceso" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
            Preguntas Frecuentes
          </h2>
          <div className="w-20 h-0.5 bg-[#C9A85C] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
            Respuestas a las preguntas más comunes sobre construcción y remodelación
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-xl text-gray-900 pr-8" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {faq.question}
                </h3>
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center border border-gray-300 rounded-lg">
                  {openIndex === index ? (
                    <Minus size={16} className="text-[#C9A85C]" />
                  ) : (
                    <Plus size={16} className="text-gray-600" />
                  )}
                </div>
              </button>
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}