function getPopularCategories(products) {
    const filtered = products.filter(product => product.sales > 5);
  
    const sorted = filtered.sort((a, b) => b.sales - a.sales);
  
    const categories = sorted.map(product => product.category);
  
    return [...new Set(categories)];
  }
  

// Приклад використання:
const products = [
  { name: 'Phone', category: 'Electronics', sales: 10 },
  { name: 'Tablet', category: 'Electronics', sales: 3 },
  { name: 'Shirt', category: 'Clothing', sales: 8 },
  { name: 'Laptop', category: 'Electronics', sales: 12 },
  { name: 'Jacket', category: 'Clothing', sales: 2 },
  { name: 'Shoes', category: 'Footwear', sales: 6 },
  { name: 'Watch', category: 'Electronics', sales: 7 }
];

console.log(getPopularCategories(products)); // ['Electronics', 'Clothing', 'Footwear']
module.exports = getPopularCategories;