import React, { useEffect } from 'react';
import { companyInfo } from '../data/company';

const SEOHead = ({ title, description, path = "/" }) => {
  const fullTitle = title 
    ? `${title} | ${companyInfo.name}`
    : `${companyInfo.name} | Kathmandu, Nepal`;

  const metaDesc = description || `${companyInfo.name} provides professional, patient-focused healthcare support, pharmacy services, and laboratory testing in Gokarneshwor-5, Nayabasti, Kathmandu.`;

  useEffect(() => {
    document.title = fullTitle;
    
    // Update Meta Description
    let descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) {
      descMeta.setAttribute("content", metaDesc);
    }

    // Add Structured Data (JSON-LD)
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "MedicalOrganization",
      "name": companyInfo.name,
      "alternateName": companyInfo.shortName,
      "url": window.location.origin + path,
      "logo": window.location.origin + "/assets/logo.png",
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
        "addressLocality": companyInfo.address.ward,
        "addressRegion": companyInfo.address.city,
        "addressCountry": companyInfo.address.country
      },
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

    let scriptTag = document.getElementById("json-ld-schema");
    if (!scriptTag) {
      scriptTag = document.createElement("script");
      scriptTag.id = "json-ld-schema";
      scriptTag.type = "application/ld+json";
      document.head.appendChild(scriptTag);
    }
    scriptTag.text = JSON.stringify(jsonLd);
  }, [fullTitle, metaDesc, path]);

  return null;
};

export default SEOHead;
