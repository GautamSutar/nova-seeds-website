import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';

interface SEOProps {
  titleHi: string;
  titleEn: string;
  descriptionHi: string;
  descriptionEn: string;
  ogImage?: string;
  canonical?: string;
}

export default function SEO({ titleHi, titleEn, descriptionHi, descriptionEn, ogImage, canonical }: SEOProps) {
  const { isHindi } = useLanguage();
  const title = isHindi ? titleHi : titleEn;
  const description = isHindi ? descriptionHi : descriptionEn;
  const baseUrl = 'https://novaseeds.in'; // Update with actual domain

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={`${baseUrl}${canonical}`} />}
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {ogImage && <meta property="og:image" content={ogImage} />}
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
