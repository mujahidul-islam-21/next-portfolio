import ProductTabs from '@/components/Front-site/productdtails/ProductDescription';
import ProductDetails from '@/components/Front-site/productdtails/Productimg';
import RelatedProducts from '@/components/Front-site/productdtails/RelatedProducts';
import React from 'react';

function Onproduct() {
  return (
    <div>
      <ProductDetails />
      <ProductTabs />
      <RelatedProducts />
    </div>
  );
}

export default Onproduct;
