import React from 'react';

const ProductRow = ({ product }) => {
  const { name, price, category, inStock } = product;
  const textColor = inStock ? 'black' : 'red';

  return (
    <tr>
      <td style={{ color: textColor }}>{name}</td>
      <td>{price}</td>
      <td>{category}</td>
    </tr>
  );
};

export default ProductRow;
