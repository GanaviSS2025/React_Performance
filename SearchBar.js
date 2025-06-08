import React from 'react';

const SearchBar = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search products..."
      onChange={e => onSearch(e.target.value)}
      style={{ width: '100%', padding: 8, marginBottom: 10 }}
    />
  );
};

export default React.memo(SearchBar);