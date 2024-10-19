const pool = require('../config/db');

// Create a new order
const createOrder = (userId, total) => {
  return pool.query(
    'INSERT INTO orders (user_id, total) VALUES ($1, $2) RETURNING *',
    [userId, total]
  );
};

// Create an order item
const createOrderItem = (orderId, productId, quantity, price) => {
  return pool.query(
    'INSERT INTO order_items (order_id, product_id, quantity, price) VALUES ($1, $2, $3, $4) RETURNING *',
    [orderId, productId, quantity, price]
  );
};

// Get all orders for a user
const getOrdersByUserId = (userId) => {
  return pool.query('SELECT * FROM orders WHERE user_id = $1', [userId]);
};

// Get order details by order ID
const getOrderById = (orderId) => {
  return pool.query('SELECT * FROM orders WHERE id = $1', [orderId]);
};

// Get order items by order ID
const getOrderItemsByOrderId = (orderId) => {
  return pool.query('SELECT * FROM order_items WHERE order_id = $1', [orderId]);
};

module.exports = {
  createOrder,
  createOrderItem,
  getOrdersByUserId,
  getOrderById,
  getOrderItemsByOrderId,
};
