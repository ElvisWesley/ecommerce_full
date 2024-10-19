const express = require('express');
const {
  getCart,
  addItem,
  updateItemQuantity,
  removeItem,
} = require('../controllers/cartController');
const router = express.Router();

// GET the cart for a user
router.get('/:userId', getCart);

// POST add an item to the cart
router.post('/:userId', addItem);

// PUT update item quantity in the cart
router.put('/item/:cartItemId', updateItemQuantity);

// DELETE remove an item from the cart
router.delete('/item/:cartItemId', removeItem);

module.exports = router;
