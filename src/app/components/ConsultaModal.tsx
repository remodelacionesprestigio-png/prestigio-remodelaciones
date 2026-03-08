import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';

interface ConsultaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type FormInputs = {
  nombre: string;
  email: string;
  telefono: string;
  tipoProyecto: string;
  planInteres: string;
  ubicacion: string;
  areaConstruccion: string;
  tiempoEstimado: string;
  descripcion: string;
}

export function ConsultaModal({ isOpen, onClose }: ConsultaModalProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInputs>();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Watch para el calculador de presupuesto
  const areaConstruccion = watch('areaConstruccion');
  const planInteres = watch('planInteres');

  // Función para calcular el presupuesto aproximado
  const calcularPresupuesto = () => {
    const area = parseFloat(areaConstruccion || '0');
    if (!area || area <= 0 || !planInteres) return null;

    const precios: { [key: string]: number } = {
      'plan-esencia': 1100000,
      'plan-integral': 1300000,
      'plan-prestigio': 1500000
    };

    const precioM2 = precios[planInteres];
    if (!precioM2) return null;

    return area * precioM2;
  };

  const presupuestoAproximado = calcularPresupuesto();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    setIsSubmitting(true);
    try {
      // Preparar datos para enviar al webhook
      const webhookData = {
        nombre: data.nombre,
        email: data.email,
        telefono: data.telefono,
        tipoProyecto: data.tipoProyecto,
        planInteres: data.planInteres,
        ubicacion: data.ubicacion || 'No especificado',
        areaConstruccion: data.areaConstruccion || 'No especificado',
        tiempoEstimado: data.tiempoEstimado || 'No especificado',
        descripcion: data.descripcion || 'Sin descripción',
        presupuestoAproximado: presupuestoAproximado ? `$${presupuestoAproximado.toLocaleString('es-CO')}` : 'No calculado',
        fecha: new Date().toLocaleString('es-CO', { 
          timeZone: 'America/Bogota',
          dateStyle: 'full',
          timeStyle: 'short'
        })
      };

      // Enviar al webhook de Make
      const response = await fetch('https://hook.us2.make.com/ehq1mqil4q9swgkdnrgu7byqkvl3fskg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookData),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        // Cerrar el modal después de 2 segundos
        setTimeout(() => {
          onClose();
          // Resetear estados después de cerrar
          setTimeout(() => {
            setSubmitSuccess(false);
            setIsSubmitting(false);
          }, 300);
        }, 2000);
      } else {
        setIsSubmitting(false);
        console.error('Error al enviar el formulario');
      }
    } catch (error) {
      console.error('Error:', error);
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="relative w-full max-w-3xl bg-white shadow-2xl rounded-lg overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="border-b border-gray-200 px-8 py-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-3xl text-gray-900 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                        Solicita tu Cotización
                      </h2>
                      <p className="text-gray-600 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Cuéntanos sobre tu proyecto y te contactaremos en 24 horas
                      </p>
                    </div>
                    <button
                      onClick={onClose}
                      className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-colors rounded-lg"
                    >
                      <X size={24} className="text-gray-600" />
                    </button>
                  </div>
                </div>

                {/* Form */}
                <form 
                  className="px-8 py-6 max-h-[calc(100vh-200px)] overflow-y-auto"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="space-y-6">
                    {/* Información Personal */}
                    <div>
                      <h3 className="text-xl mb-4 text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
                        Información de Contacto
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Nombre Completo *
                          </label>
                          <input
                            type="text"
                            name="nombre"
                            required
                            {...register('nombre')}
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-[#C9A85C] focus:outline-none transition-colors rounded-lg"
                            placeholder="Tu nombre"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          />
                        </div>
                        <div>
                          <label className="block text-sm text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Email *
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            {...register('email')}
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-[#C9A85C] focus:outline-none transition-colors rounded-lg"
                            placeholder="tu@email.com"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          />
                        </div>
                      </div>
                      <div className="mt-4">
                        <label className="block text-sm text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Teléfono *
                        </label>
                        <input
                          type="tel"
                          name="telefono"
                          required
                          {...register('telefono')}
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-[#C9A85C] focus:outline-none transition-colors"
                          placeholder="+1 (555) 123-4567"
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        />
                      </div>
                    </div>

                    {/* Detalles del Proyecto */}
                    <div>
                      <h3 className="text-xl mb-4 text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
                        Detalles del Proyecto
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Tipo de Proyecto *
                          </label>
                          <select
                            name="tipoProyecto"
                            required
                            {...register('tipoProyecto')}
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-[#C9A85C] focus:outline-none transition-colors rounded-lg"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          >
                            <option value="">Selecciona una opción</option>
                            <option value="construccion">Construcción nueva</option>
                            <option value="remodelacion-completa">Remodelación completa</option>
                            <option value="remodelacion-cocina">Remodelación cocina</option>
                            <option value="remodelacion-bano">Remodelación baño</option>
                            <option value="ampliacion">Ampliación</option>
                            <option value="diseno-interiores">Diseño de interiores</option>
                            <option value="otro">Otro</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Plan de Interés
                          </label>
                          <select
                            name="planInteres"
                            required
                            {...register('planInteres')}
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-[#C9A85C] focus:outline-none transition-colors rounded-lg"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          >
                            <option value="">Selecciona un plan</option>
                            <option value="plan-esencia">Plan Esencia</option>
                            <option value="plan-integral">Plan Integral (Más Popular)</option>
                            <option value="plan-prestigio">Plan Prestigio</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <div>
                          <label className="block text-sm text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Ubicación del Proyecto
                          </label>
                          <input
                            type="text"
                            name="ubicacion"
                            {...register('ubicacion')}
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-[#C9A85C] focus:outline-none transition-colors rounded-lg"
                            placeholder="Ciudad, Estado"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          />
                        </div>
                        <div>
                          <label className="block text-sm text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Área Aproximada (m²)
                          </label>
                          <input
                            type="text"
                            name="areaConstruccion"
                            {...register('areaConstruccion')}
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-[#C9A85C] focus:outline-none transition-colors"
                            placeholder="Ej: 250"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          />
                        </div>
                      </div>

                      {/* Presupuesto Aproximado */}
                      {presupuestoAproximado && (
                        <div className="mt-6 p-6 bg-gradient-to-br from-[#C9A85C]/10 to-[#B89644]/10 border-2 border-[#C9A85C]/30 rounded-lg">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm text-gray-600 mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                                Presupuesto Aproximado
                              </p>
                              <p className="text-3xl text-[#C9A85C]" style={{ fontFamily: 'Playfair Display, serif' }}>
                                ${presupuestoAproximado.toLocaleString('es-CO')}
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="text-xs text-gray-500" style={{ fontFamily: 'Inter, sans-serif' }}>
                                Basado en {areaConstruccion} m²
                              </p>
                              <p className="text-xs text-gray-500 mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                                {planInteres === 'plan-esencia' && 'Plan Esencia - $1,100,000/m²'}
                                {planInteres === 'plan-integral' && 'Plan Integral - $1,300,000/m²'}
                                {planInteres === 'plan-prestigio' && 'Plan Prestigio - $1,500,000/m²'}
                              </p>
                            </div>
                          </div>
                          <p className="text-xs text-gray-600 mt-3 border-t border-[#C9A85C]/20 pt-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                            * Este es un cálculo aproximado. El presupuesto final puede variar según especificaciones del proyecto.
                          </p>
                        </div>
                      )}

                      <div className="mt-4">
                        <label className="block text-sm text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                          ¿Cuándo deseas iniciar?
                        </label>
                        <select
                          name="tiempoEstimado"
                          {...register('tiempoEstimado')}
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-[#C9A85C] focus:outline-none transition-colors rounded-lg"
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                          <option value="">Selecciona un tiempo</option>
                          <option value="inmediato">Inmediatamente</option>
                          <option value="1-3-meses">1-3 meses</option>
                          <option value="3-6-meses">3-6 meses</option>
                          <option value="6-12-meses">6-12 meses</option>
                          <option value="mas-12-meses">Más de 12 meses</option>
                        </select>
                      </div>

                      <div className="mt-4">
                        <label className="block text-sm text-gray-700 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Descripción del Proyecto
                        </label>
                        <textarea
                          name="descripcion"
                          {...register('descripcion')}
                          rows={4}
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-[#C9A85C] focus:outline-none transition-colors resize-none rounded-lg"
                          placeholder="Cuéntanos más detalles sobre tu proyecto..."
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="mt-8 pt-6 border-t border-gray-200 flex gap-4">
                    <button
                      type="button"
                      onClick={onClose}
                      className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors text-sm tracking-wider rounded-lg"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                      disabled={isSubmitting || submitSuccess}
                    >
                      CANCELAR
                    </button>
                    <button
                      type="submit"
                      className={`flex-1 px-6 py-3 transition-colors text-sm tracking-wider rounded-lg ${
                        submitSuccess 
                          ? 'bg-green-600 text-white' 
                          : 'bg-[#C9A85C] text-white hover:bg-[#B89644]'
                      }`}
                      style={{ fontFamily: 'Inter, sans-serif' }}
                      disabled={isSubmitting || submitSuccess}
                    >
                      {submitSuccess 
                        ? '✓ TU CORREO HA SIDO ENVIADO EXITOSAMENTE' 
                        : isSubmitting 
                        ? 'ENVIANDO...' 
                        : 'ENVIAR COTIZACIÓN'}
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}