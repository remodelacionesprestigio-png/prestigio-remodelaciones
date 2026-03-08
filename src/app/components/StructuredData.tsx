import { useEffect } from 'react';

interface OrganizationData {
  name: string;
  description: string;
  url: string;
  logo: string;
  contactPoint: {
    telephone: string;
    email: string;
    contactType: string;
    areaServed: string;
    availableLanguage: string;
  };
  address: {
    addressCountry: string;
    addressLocality: string;
  };
  sameAs: string[];
}

export function StructuredData() {
  useEffect(() => {
    const organizationData: OrganizationData = {
      "@context": "https://schema.org" as any,
      "@type": "Organization" as any,
      name: "Prestigio Remodelaciones",
      description: "Empresa especializada en construcciones y remodelaciones de lujo en Colombia",
      url: "https://prestigio-remodelaciones.com",
      logo: "https://prestigio-remodelaciones.com/logo.png",
      contactPoint: {
        "@type": "ContactPoint" as any,
        telephone: "+57-300-123-4567",
        email: "noah.horizontes@gmail.com",
        contactType: "customer service",
        areaServed: "CO",
        availableLanguage: "Spanish"
      },
      address: {
        "@type": "PostalAddress" as any,
        addressCountry: "CO",
        addressLocality: "Bogotá"
      },
      sameAs: [
        "https://www.instagram.com/prestigioremodelaciones",
        "https://www.facebook.com/prestigioremodelaciones"
      ]
    };

    const localBusinessData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Prestigio Remodelaciones",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=630&fit=crop",
      "@id": "https://prestigio-remodelaciones.com",
      url: "https://prestigio-remodelaciones.com",
      telephone: "+57-300-123-4567",
      priceRange: "$$$",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bogotá",
        addressCountry: "CO"
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 4.7110,
        longitude: -74.0721
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        opens: "08:00",
        closes: "18:00"
      },
      sameAs: [
        "https://www.instagram.com/prestigioremodelaciones",
        "https://www.facebook.com/prestigioremodelaciones"
      ]
    };

    const serviceData = {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Construcción y Remodelación de Lujo",
      provider: {
        "@type": "Organization",
        name: "Prestigio Remodelaciones"
      },
      areaServed: {
        "@type": "City",
        name: "Bogotá"
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Planes de Remodelación",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Plan Esencia",
              description: "Remodelación completa optimizando elementos existentes"
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Plan Integral",
              description: "Remodelación completa con mayor nivel de especificación"
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Plan Prestigio",
              description: "Remodelación completa con alto nivel de personalización"
            }
          }
        ]
      }
    };

    // Insertar datos estructurados en el head
    const scripts = [
      { id: 'structured-data-organization', data: organizationData },
      { id: 'structured-data-local-business', data: localBusinessData },
      { id: 'structured-data-service', data: serviceData }
    ];

    scripts.forEach(({ id, data }) => {
      let script = document.getElementById(id) as HTMLScriptElement;
      
      if (!script) {
        script = document.createElement('script');
        script.id = id;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      
      script.textContent = JSON.stringify(data);
    });

    // Cleanup
    return () => {
      scripts.forEach(({ id }) => {
        const script = document.getElementById(id);
        if (script) {
          script.remove();
        }
      });
    };
  }, []);

  return null;
}
