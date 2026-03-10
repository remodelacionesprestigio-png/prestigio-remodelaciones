import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router';
import logoImage from '../../assets/544b7102126f7a8e553747121d41b9338de1fff6.png';

interface FooterProps {
  onOpenModal: () => void;
}

export function Footer({ onOpenModal }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img 
                src={logoImage} 
                alt="PRESTIGIO - Remodelaciones y construcciones S.A.S" 
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-gray-400 font-light leading-relaxed mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              Construimos espacios con orden, respaldo y alto nivel de detalle. Remodelaciones y construcciones profesionales para espacios residenciales y comerciales.
            </p>
            <button
              onClick={onOpenModal}
              className="px-8 py-3 bg-[#C9A85C] text-white hover:bg-[#B89644] transition-colors duration-200 text-sm tracking-wider rounded-lg"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              CONSULTA GRATIS
            </button>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Enlaces</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-[#C9A85C] transition-colors text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/proyectos" className="text-gray-400 hover:text-[#C9A85C] transition-colors text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Proyectos
                </Link>
              </li>
              <li>
                <Link to="/planes" className="text-gray-400 hover:text-[#C9A85C] transition-colors text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Planes
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Contacto</h3>
            <ul className="space-y-3 text-sm text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>
              <li>+1 (555) 123-4567</li>
              <li>info@prestigio.com</li>
              <li>9000 Sunset Boulevard<br />West Hollywood, CA 90069</li>
            </ul>
            <div className="mt-6 flex space-x-3">
              <a href="#" className="w-10 h-10 border border-gray-700 hover:border-[#C9A85C] hover:bg-[#C9A85C] flex items-center justify-center transition-colors duration-200 rounded-lg">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-gray-700 hover:border-[#C9A85C] hover:bg-[#C9A85C] flex items-center justify-center transition-colors duration-200 rounded-lg">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-gray-700 hover:border-[#C9A85C] hover:bg-[#C9A85C] flex items-center justify-center transition-colors duration-200 rounded-lg">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0" style={{ fontFamily: 'Inter, sans-serif' }}>
            © 2026 Prestigio Construcciones. Todos los derechos reservados.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-[#C9A85C] transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
              Privacidad
            </a>
            <a href="#" className="text-gray-400 hover:text-[#C9A85C] transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}