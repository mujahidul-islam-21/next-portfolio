'use client';
import BannerSection from '@/components/Front-site/filterproducts/Filterpagebanner';
import ProductGrid from '@/components/Front-site/filterproducts/Filterproductpage';
import React from 'react';

export default function FilterProductsPage() {
  return (
    <div>
      <BannerSection />
      <ProductGrid />
    </div>
  );
}
