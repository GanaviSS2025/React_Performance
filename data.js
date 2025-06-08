const products = Array.from({ length: 200 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  price: Math.floor(Math.random() * 500) + 50,
}));

export default products;