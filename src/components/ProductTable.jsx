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

const ProductTable = ({ products }) => {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th style={tableHeaderStyle}>Name</th>
          <th style={tableHeaderStyle}>Price</th>
          <th style={tableHeaderStyle}>Category</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <ProductRow key={index} product={product} />
        ))}
      </tbody>
    </table>
  );
};

const tableHeaderStyle = {
  backgroundColor: '#f2f2f2',
  color: '#333',
  padding: '12px',
  textTransform: 'uppercase',
  fontWeight: 'bold',
  borderBottom: '1px solid #ccc',
};

export default ProductTable;
