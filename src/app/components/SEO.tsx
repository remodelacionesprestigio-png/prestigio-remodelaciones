import { useEffect } from 'react';
import { useLocation } from 'react-router';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  type?: 'website' | 'article';
  author?: string;
  canonical?: string;
}

export function SEO({
  title,
  description,
  keywords = '',
  image = 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=630&fit=crop',
  type = 'website',
  author = 'Prestigio Remodelaciones',
  canonical
}: SEOProps) {
  const location = useLocation();
  const baseUrl = window.location.origin;
  const currentUrl = canonical || `${baseUrl}${location.pathname}`;
  const siteName = 'Prestigio Remodelaciones';
  const fullTitle = `${title} | ${siteName}`;

  useEffect(() => {
    // Title
    document.title = fullTitle;

    // Meta tags básicos
    updateMetaTag('name', 'description', description);
    updateMetaTag('name', 'keywords', keywords);
    updateMetaTag('name', 'author', author);
    updateMetaTag('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

    // Open Graph
    updateMetaTag('property', 'og:title', fullTitle);
    updateMetaTag('property', 'og:description', description);
    updateMetaTag('property', 'og:image', image);
    updateMetaTag('property', 'og:url', currentUrl);
    updateMetaTag('property', 'og:type', type);
    updateMetaTag('property', 'og:site_name', siteName);
    updateMetaTag('property', 'og:locale', 'es_ES');

    // Twitter Card
    updateMetaTag('name', 'twitter:card', 'summary_large_image');
    updateMetaTag('name', 'twitter:title', fullTitle);
    updateMetaTag('name', 'twitter:description', description);
    updateMetaTag('name', 'twitter:image', image);
    updateMetaTag('name', 'twitter:site', '@prestigioremodelaciones');
    updateMetaTag('name', 'twitter:creator', '@prestigioremodelaciones');

    // Canonical URL
    updateLinkTag('canonical', currentUrl);

    // Language
    document.documentElement.lang = 'es';

  }, [title, description, keywords, image, currentUrl, type, author, fullTitle]);

  return null;
}

function updateMetaTag(attr: 'name' | 'property', attrValue: string, content: string) {
  let element = document.querySelector(`meta[${attr}="${attrValue}"]`);
  
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attr, attrValue);
    document.head.appendChild(element);
  }
  
  element.setAttribute('content', content);
}

function updateLinkTag(rel: string, href: string) {
  let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
  
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }
  
  element.href = href;
}
