import React from 'react';
import { NewsletterConfig } from '@/components/newsletter/NewsletterConfig';
import { SEOHead } from '@/components/SEOHead';

const NewsletterConfigPage = () => {
  return (
    <>
      <SEOHead />
      <div className="min-h-screen bg-background">
        <NewsletterConfig />
      </div>
    </>
  );
};

export default NewsletterConfigPage;