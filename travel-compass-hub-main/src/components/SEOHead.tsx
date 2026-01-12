import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: object;
}

const SEOHead = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = 'https://rudrakshsafar.com/og-image.png',
  ogType = 'website',
  structuredData,
}: SEOHeadProps) => {
  const fullTitle = `${title} | Rudraksh Safar`;
  const siteName = 'Rudraksh Safar - Best Travel Agency in Bhilai, Chhattisgarh';
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Canonical URL - Critical for SEO */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Robots Directives */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Site Verification & Publisher */}
      <meta name="author" content="Rudraksh Safar" />
      <meta name="publisher" content="Rudraksh Safar" />
      <meta name="copyright" content="© 2026 Rudraksh Safar. All rights reserved." />
      
      {/* Geo Tags for Local SEO */}
      <meta name="geo.region" content="IN-CT" />
      <meta name="geo.placename" content="Bhilai, Chhattisgarh" />
      <meta name="geo.position" content="21.2094;81.4285" />
      <meta name="ICBM" content="21.2094, 81.4285" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_IN" />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@RudrakshSafar" />
      
      {/* Mobile & Theme */}
      <meta name="theme-color" content="#D4A574" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Rudraksh Safar" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;