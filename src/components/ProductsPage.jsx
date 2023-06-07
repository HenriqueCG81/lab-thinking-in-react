import React, { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [keyword, setKeyword] = useState('');
  const [showInStockOnly, setShowInStockOnly] = useState(false);

  const handleSearchChange = (searchKeyword) => {
    setKeyword(searchKeyword);
    filterProducts(searchKeyword, showInStockOnly);
  };

  const handleToggleInStockOnly = (value) => {
    setShowInStockOnly(value);
    filterProducts(keyword, value);
  };

  const filterProducts = (searchKeyword, inStockOnly) => {
    const filteredProducts = jsonData.filter(
      (product) =>
        product.name.toLowerCase().includes(searchKeyword.toLowerCase()) &&
        (!inStockOnly || product.inStock)
    );
    setProducts(filteredProducts);
  };

  return (
    <div className="app-container">
      <h1 className="app-heading">IronStore</h1>
      <SearchBar
        className="search-bar"
        keyword={keyword}
        onChange={handleSearchChange}
        showInStockOnly={showInStockOnly}
        onToggleInStockOnly={handleToggleInStockOnly}
      />
      <ProductTable className="product-table" products={products} />
    </div>
  );
}

export default ProductsPage;
