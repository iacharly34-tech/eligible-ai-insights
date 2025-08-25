import React from 'react';
import { NewsletterAdmin } from '@/components/newsletter/NewsletterAdmin';
import { SEOHead } from '@/components/SEOHead';

const Newsletter = () => {
  return (
    <>
      <SEOHead />
      <div className="min-h-screen bg-background">
        <NewsletterAdmin />
      </div>
    </>
  );
};

export default Newsletter;