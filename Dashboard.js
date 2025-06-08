import React, { useState, useMemo, useCallback } from 'react';
import SearchBar from './SearchBar';
import SortControls from './SortControls';
import ProductList from './ProductList';

const Dashboard = ({ products }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  // 🧠 useMemo: filter products only when searchQuery or products change
  const filteredProducts = useMemo(() => {
    console.log("🔍 Filtering");
    return products.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [products, searchQuery]);

  // 🧠 useMemo: sort only when filteredProducts or sortOrder change
  const sortedProducts = useMemo(() => {
    console.log("🔃 Sorting");
    return [...filteredProducts].sort((a, b) =>
      sortOrder === 'asc' ? a.price - b.price : b.price - a.price
    );
  }, [filteredProducts, sortOrder]);

  // 🧠 useMemo: calculate average only when sortedProducts change
  const averagePrice = useMemo(() => {
    console.log("📊 Calculating average price");
    if (sortedProducts.length === 0) return 0;
    return sortedProducts.reduce((sum, p) => sum + p.price, 0) / sortedProducts.length;
  }, [sortedProducts]);

  // ✅ useCallback: memoize function to prevent recreation
  const handleSearch = useCallback((query) => {
    setSearchQuery(query);
  }, []);

  const handleSortChange = useCallback((order) => {
    setSortOrder(order);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <SearchBar onSearch={handleSearch} />
      <SortControls onSortChange={handleSortChange} />
      <p><strong>Average Price:</strong> ${averagePrice.toFixed(2)}</p>
      <ProductList products={sortedProducts} />
    </div>
  );
};

export default Dashboard;
