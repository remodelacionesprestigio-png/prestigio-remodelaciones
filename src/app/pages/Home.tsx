import { Hero } from '../components/Hero';
import { ExploreSelections } from '../components/ExploreSelections';
import { YourOasis } from '../components/YourOasis';
import { AgentSection } from '../components/AgentSection';
import { PortfolioRemodelaciones } from '../components/PortfolioRemodelaciones';
import { ExpertAdvice } from '../components/ExpertAdvice';
import { FAQ } from '../components/FAQ';
import { CTASection } from '../components/CTASection';
import { useModal } from './Root';
import { SEO } from '../components/SEO';

export function Home() {
  const { onOpenModal } = useModal();

  return (
    <>
      <SEO
        title="Construcciones y Remodelaciones de Lujo"
        description="Prestigio Remodelaciones - Más de 13 años de experiencia en remodelaciones de cocinas, baños, salas y habitaciones en Bogotá. Cotizaciones fijas, tiempos garantizados. Consulta gratis."
        keywords="remodelaciones de lujo, remodelación cocinas Bogotá, remodelación baños modernos, diseño salas LED, remodelación habitaciones, construcción zona norte Bogotá, Usaquén, Chicó, Suba, Santa Bárbara"
        image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=630&fit=crop"
      />
      <Hero onOpenModal={onOpenModal} />
      <ExploreSelections />
      <YourOasis />
      <AgentSection onOpenModal={onOpenModal} />
      <PortfolioRemodelaciones />
      <ExpertAdvice />
      <FAQ />
      <CTASection onOpenModal={onOpenModal} />
    </>
  );
}