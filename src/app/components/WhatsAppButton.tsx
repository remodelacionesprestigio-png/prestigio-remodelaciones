import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function WhatsAppButton() {
  const whatsappUrl = 'https://wa.me/573229090149?text=Hola%20quiero%20más%20información';

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group"
      style={{
        background: 'linear-gradient(135deg, #C9A85C 0%, #D4B76E 100%)',
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.5
      }}
      whileHover={{
        boxShadow: '0 20px 40px rgba(201, 168, 92, 0.4)',
      }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle 
        className="w-7 h-7 text-white group-hover:rotate-12 transition-transform duration-300" 
        strokeWidth={2}
      />
      
      {/* Pulse animation */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'rgba(201, 168, 92, 0.6)',
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.7, 0, 0.7],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Tooltip */}
      <motion.div
        className="absolute right-full mr-4 whitespace-nowrap px-4 py-2 rounded-lg text-sm font-medium text-white pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, #C9A85C 0%, #D4B76E 100%)',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        }}
        initial={{ opacity: 0, x: 10 }}
        whileHover={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2 }}
      >
        ¿Necesitas ayuda? Contáctanos
        <div 
          className="absolute top-1/2 -right-1 w-2 h-2 rotate-45"
          style={{
            background: '#C9A85C',
            transform: 'translateY(-50%) rotate(45deg)',
          }}
        />
      </motion.div>
    </motion.a>
  );
}
