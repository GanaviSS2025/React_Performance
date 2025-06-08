import React from 'react';

const SortControls = ({ onSortChange }) => {
  return (
    <select onChange={e => onSortChange(e.target.value)} style={{ padding: 8, marginBottom: 10 }}>
      <option value="asc">Sort by Price: Low to High</option>
      <option value="desc">Sort by Price: High to Low</option>
    </select>
  );
};

export default React.memo(SortControls);