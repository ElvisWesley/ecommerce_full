const express = require('express');
const { placeOrder, getUserOrders, getOrderDetails, getOrderHistory } = require('../controllers/orderController');
const router = express.Router();
const authenticate = require('../middleware/authMiddleware');

// POST create a new order
router.post('/', authenticate, placeOrder);

// GET all orders for a user
router.get('/user/:userId', authenticate, getUserOrders);

// GET order details (with items) by order ID
router.get('/:orderId', authenticate, getOrderDetails);



module.exports = router;
