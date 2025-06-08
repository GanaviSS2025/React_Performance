import React from 'react';
import Dashboard from './Dashboard';
import products from './data';

function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>🛒 Product Dashboard</h1>
      <Dashboard products={products} />
    </div>
  );
}

export default App;
