import { Outlet, useOutletContext } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ConsultaModal } from "../components/ConsultaModal";
import { ScrollToTop } from "../components/ScrollToTop";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { StructuredData } from "../components/StructuredData";
import { useState } from "react";

type ContextType = { onOpenModal: () => void };

export function Root() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      <StructuredData />
      <ScrollToTop />
      <Header onOpenModal={openModal} />
      <Outlet context={{ onOpenModal: openModal } satisfies ContextType} />
      <Footer onOpenModal={openModal} />
      <ConsultaModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <WhatsAppButton />
    </div>
  );
}

export function useModal() {
  return useOutletContext<ContextType>();
}