import React from 'react';

const ProductCard = ({ product }) => {
  const discountedPrice = product.price * 0.9;

  return (
    <div style={{ border: '1px solid #ccc', padding: 15, borderRadius: 8 }}>
      <h4>{product.name}</h4>
      <p>Original Price: ${product.price}</p>
      <p>Discounted: ${discountedPrice.toFixed(2)}</p>
    </div>
  );
};

export default React.memo(ProductCard);