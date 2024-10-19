const express = require('express');
const {
  getProducts,
  getSingleProduct,
  createNewProduct,
  updateExistingProduct,
  deleteExistingProduct,
} = require('../controllers/productController');

const router = express.Router();

// GET all products
router.get('/', getProducts);

// GET a single product by ID
router.get('/:id', getSingleProduct);

// POST create a new product
router.post('/', createNewProduct);

// PUT update an existing product
router.put('/:id', updateExistingProduct);

// DELETE a product
router.delete('/:id', deleteExistingProduct);

module.exports = router;
