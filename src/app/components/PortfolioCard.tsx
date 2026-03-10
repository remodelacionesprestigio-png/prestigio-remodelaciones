import { ChevronLeft, ChevronRight } from 'lucide-react';
import Slider from 'react-slick';
import { useRef } from 'react';

interface PortfolioCardProps {
  images: string[];
  category: string;
  title: string;
  description: string;
}

export function PortfolioCard({ images, category, title, description }: PortfolioCardProps) {
  const sliderRef = useRef<Slider>(null);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    fade: true,
    cssEase: 'ease-in-out'
  };

  return (
    <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl cursor-pointer shadow-lg">
      {/* Slider interno */}
      <div className="absolute inset-0">
        <Slider ref={sliderRef} {...sliderSettings}>
          {images.map((image, index) => (
            <div key={index} className="relative w-full h-full">
              <img
                src={image}
                alt={`${category} ${index + 1}`}
                className="w-full h-full object-cover"
                style={{ height: '100%' }}
              />
            </div>
          ))}
        </Slider>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
      </div>

      {/* Flechas de navegación */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          sliderRef.current?.slickPrev();
        }}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-white/80 backdrop-blur-sm hover:bg-white shadow-lg rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100"
        aria-label="Anterior"
      >
        <ChevronLeft className="text-gray-700" size={18} />
      </button>
      
      <button
        onClick={(e) => {
          e.stopPropagation();
          sliderRef.current?.slickNext();
        }}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-white/80 backdrop-blur-sm hover:bg-white shadow-lg rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100"
        aria-label="Siguiente"
      >
        <ChevronRight className="text-gray-700" size={18} />
      </button>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
        <div className="inline-block self-start mb-2">
          <div 
            className="px-3 py-1 bg-teal-600/90 backdrop-blur-sm text-white rounded-full text-xs font-medium tracking-wide uppercase"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {category}
          </div>
        </div>
        <h3 
          className="text-white text-lg leading-tight mb-1"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          {title}
        </h3>
        <p 
          className="text-white/80 text-xs font-light"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {description}
        </p>
      </div>

      <div className="absolute inset-0 rounded-2xl border-2 transition-all duration-300 pointer-events-none border-transparent group-hover:border-[#C9A85C] group-hover:opacity-100 opacity-0"></div>
    </div>
  );
}
