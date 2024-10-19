const {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
  } = require('../models/productModel');
  
  // Get all products
  const getProducts = async (req, res) => {
    try {
      const result = await getAllProducts();
      res.status(200).json(result.rows);
    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  };
  
  // Get a single product by ID
  const getSingleProduct = async (req, res) => {
    const { id } = req.params;
    try {
      const result = await getProductById(id);
      if (result.rows.length === 0) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.status(200).json(result.rows[0]);
    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  };
  
  // Create a new product
  const createNewProduct = async (req, res) => {
    const { name, description, price, imageUrl, category } = req.body;
    try {
      const result = await createProduct(name, description, price, imageUrl, category);
      res.status(201).json(result.rows[0]);
    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  };
  
  // Update an existing product
  const updateExistingProduct = async (req, res) => {
    const { id } = req.params;
    const { name, description, price, imageUrl, category } = req.body;
    try {
      const result = await updateProduct(id, name, description, price, imageUrl, category);
      if (result.rows.length === 0) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.status(200).json(result.rows[0]);
    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  };
  
  // Delete a product
  const deleteExistingProduct = async (req, res) => {
    const { id } = req.params;
    try {
      const result = await deleteProduct(id);
      if (result.rowCount === 0) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  };
  
  module.exports = {
    getProducts,
    getSingleProduct,
    createNewProduct,
    updateExistingProduct,
    deleteExistingProduct,
  };
  