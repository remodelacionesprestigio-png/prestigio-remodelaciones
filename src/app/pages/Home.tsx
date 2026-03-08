import { Hero } from '../components/Hero';
import { ExploreSelections } from '../components/ExploreSelections';
import { YourOasis } from '../components/YourOasis';
import { AgentSection } from '../components/AgentSection';
import { FeaturedListings } from '../components/FeaturedListings';
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
        description="Prestigio Remodelaciones - Especialistas en construcciones y remodelaciones de lujo en Colombia. Diseño elegante, materiales premium y acabados excepcionales. Consulta gratis."
        keywords="remodelaciones de lujo, construcciones premium, remodelación Colombia, diseño de interiores, construcción residencial, remodelación cocina, remodelación baño, ampliación casa, arquitectura de lujo"
        image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=630&fit=crop"
      />
      <Hero onOpenModal={onOpenModal} />
      <ExploreSelections />
      <YourOasis />
      <AgentSection onOpenModal={onOpenModal} />
      <FeaturedListings />
      <ExpertAdvice />
      <FAQ />
      <CTASection onOpenModal={onOpenModal} />
    </>
  );
}