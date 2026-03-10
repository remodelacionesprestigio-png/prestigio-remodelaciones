import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import logoImage from 'figma:asset/544b7102126f7a8e553747121d41b9338de1fff6.png';

interface HeaderProps {
  onOpenModal: () => void;
}

export function Header({ onOpenModal }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        // Siempre mostrar el header en la parte superior
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling hacia abajo - ocultar header
        setIsVisible(false);
        setIsMenuOpen(false); // Cerrar menú móvil al hacer scroll
      } else {
        // Scrolling hacia arriba - mostrar header
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlHeader);

    return () => {
      window.removeEventListener('scroll', controlHeader);
    };
  }, [lastScrollY]);

  const menuItems = [
    { label: 'Inicio', href: '/' },
    { label: 'Planes', href: '/planes' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-sm transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center py-3 sm:py-4 lg:py-5">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src={logoImage} 
                alt="PRESTIGIO - Remodelaciones y construcciones S.A.S" 
                className="h-14 sm:h-12 md:h-14 lg:h-16 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`text-sm xl:text-base transition-colors duration-200 font-light tracking-wide ${
                  location.pathname === item.href
                    ? 'text-[#C9A85C]'
                    : 'text-gray-700 hover:text-[#C9A85C]'
                }`}
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <button
              onClick={onOpenModal}
              className="px-6 xl:px-8 py-2.5 xl:py-3 bg-[#C9A85C] text-white text-sm xl:text-base tracking-wider hover:bg-[#B89644] transition-colors duration-200 rounded-lg whitespace-nowrap"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              CONSULTA GRATIS
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-[#C9A85C] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden fixed inset-0 h-screen bg-white z-[60] transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Close Button */}
        <div className="absolute top-0 right-0 p-4 z-10">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 text-gray-700 hover:text-[#C9A85C] transition-colors"
            aria-label="Cerrar menú"
          >
            <X size={28} />
          </button>
        </div>

        {/* Menu Content - Centered */}
        <div className="flex flex-col items-center justify-center h-full px-6 py-20">
          {/* Navigation Links */}
          <nav className="flex flex-col items-center justify-center space-y-8 flex-1">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`text-4xl transition-colors duration-200 ${
                  location.pathname === item.href
                    ? 'text-[#C9A85C]'
                    : 'text-gray-900 hover:text-[#C9A85C]'
                }`}
                onClick={() => setIsMenuOpen(false)}
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button at Bottom */}
          <button
            onClick={() => {
              setIsMenuOpen(false);
              onOpenModal();
            }}
            className="w-full max-w-xs px-8 py-4 bg-[#C9A85C] text-white text-center hover:bg-[#B89644] transition-colors duration-200 rounded-lg text-lg tracking-wider"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            CONSULTA GRATIS
          </button>
        </div>
      </div>
    </header>
  );
}