import React from 'react';
import { Form } from 'react-bootstrap';

const SearchBar = ({
  keyword,
  onChange,
  showInStockOnly,
  onToggleInStockOnly,
}) => {
  return (
    <Form>
      <Form.Group controlId="searchBar">
        <Form.Control
          type="text"
          placeholder="Search products"
          value={keyword}
          onChange={(e) => onChange(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="inStockOnly" className="mb-0">
        <Form.Check
          type="checkbox"
          label="Show only products in stock"
          checked={showInStockOnly}
          onChange={() => onToggleInStockOnly(!showInStockOnly)}
          inline
        />
      </Form.Group>
    </Form>
  );
};

export default SearchBar;
