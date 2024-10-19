const pool = require('../config/db');

// Get all products
const getAllProducts = () => {
  return pool.query('SELECT * FROM products');
};

// Get a product by ID
const getProductById = (id) => {
  return pool.query('SELECT * FROM products WHERE id = $1', [id]);
};

// Create a new product
const createProduct = (name, description, price, imageUrl, category) => {
  return pool.query(
    'INSERT INTO products (name, description, price, image_url, category) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [name, description, price, imageUrl, category]
  );
};

// Update an existing product
const updateProduct = (id, name, description, price, imageUrl, category) => {
  return pool.query(
    'UPDATE products SET name = $1, description = $2, price = $3, image_url = $4, category = $5 WHERE id = $6 RETURNING *',
    [name, description, price, imageUrl, category, id]
  );
};

// Delete a product
const deleteProduct = (id) => {
  return pool.query('DELETE FROM products WHERE id = $1', [id]);
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
