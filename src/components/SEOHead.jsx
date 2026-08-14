import React, { useEffect } from 'react';
import { companyInfo } from '../data/company';

const SEOHead = ({ 
  title, 
  description, 
  keywords, 
  path = "/", 
  image = "/assets/logo.png",
  type = "website"
}) => {
  const baseDomain = companyInfo.website || "https://riddhisiddhihealthcare.com.np";
  const canonicalUrl = `${baseDomain}${path === "/" ? "" : path}`;
  const ogImageUrl = image.startsWith("http") ? image : `${baseDomain}${image.startsWith("/") ? "" : "/"}${image}`;

  const fullTitle = title 
    ? `${title} | ${companyInfo.name}`
    : `${companyInfo.name} | Polyclinic & Diagnostic Lab in Gokarneshwor, Kathmandu`;

  const metaDesc = description || `${companyInfo.name} provides professional, patient-focused healthcare support, registered pharmacy services, and diagnostic laboratory testing in Gokarneshwor-5, Nayabasti, Kathmandu.`;
  const metaKeywords = keywords || "Riddhi Siddhi Health Care, Riddhi Siddhi Polyclinic, Gokarneshwor Clinic, Nayabasti Kathmandu, Diagnostic Lab, Pharmacy Nepal, Doctor Consultation";

  useEffect(() => {
    // 1. Update Title
    document.title = fullTitle;
    
    // Helper to set or create meta tag
    const setMetaTag = (attributeName, attributeValue, content) => {
      let meta = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attributeName, attributeValue);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Helper to set link tag (e.g. canonical)
    const setLinkTag = (rel, href) => {
      let link = document.querySelector(`link[rel="${rel}"]`);
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', rel);
        document.head.appendChild(link);
      }
      link.setAttribute('href', href);
    };

    // 2. Primary SEO tags
    setMetaTag('name', 'description', metaDesc);
    setMetaTag('name', 'keywords', metaKeywords);
    setMetaTag('name', 'robots', 'index, follow, max-image-preview:large');
    setLinkTag('canonical', canonicalUrl);

    // 3. Open Graph Tags
    setMetaTag('property', 'og:title', fullTitle);
    setMetaTag('property', 'og:description', metaDesc);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:type', type);
    setMetaTag('property', 'og:image', ogImageUrl);
    setMetaTag('property', 'og:site_name', companyInfo.name);

    // 4. Twitter Card Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', fullTitle);
    setMetaTag('name', 'twitter:description', metaDesc);
    setMetaTag('name', 'twitter:image', ogImageUrl);

    // 5. Dynamic JSON-LD Structured Data Schema
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "MedicalClinic",
      "name": companyInfo.name,
      "alternateName": [companyInfo.polyclinicName, companyInfo.shortName],
      "url": canonicalUrl,
      "logo": `${baseDomain}/assets/logo.png`,
      "image": ogImageUrl,
      "telephone": `+977-${companyInfo.phone}`,
      "email": companyInfo.email,
      "priceRange": "$$",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": companyInfo.phone,
        "contactType": "customer service",
        "areaServed": "Kathmandu, Nepal",
        "availableLanguage": ["Nepali", "English"]
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": companyInfo.address.street,
        "addressLocality": companyInfo.address.municipality,
        "addressRegion": companyInfo.address.city,
        "addressCountry": "NP"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": companyInfo.geo?.latitude || 27.714708,
        "longitude": companyInfo.geo?.longitude || 85.371359
      },
      "openingHours": companyInfo.openingHours || "Mo-Su 06:30-20:00",
      "identifier": [
        {
          "@type": "PropertyValue",
          "name": "PAN",
          "value": companyInfo.pan
        },
        {
          "@type": "PropertyValue",
          "name": "Registration",
          "value": companyInfo.registration
        }
      ]
    };

    let scriptTag = document.getElementById("json-ld-schema-page");
    if (!scriptTag) {
      scriptTag = document.createElement("script");
      scriptTag.id = "json-ld-schema-page";
      scriptTag.type = "application/ld+json";
      document.head.appendChild(scriptTag);
    }
    scriptTag.text = JSON.stringify(jsonLd);
  }, [fullTitle, metaDesc, metaKeywords, canonicalUrl, ogImageUrl, type, baseDomain]);

  return null;
};

export default SEOHead;
