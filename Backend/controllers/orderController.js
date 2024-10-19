const {
    createOrder,
    createOrderItem,
    getOrdersByUserId,
    getOrderById,
    getOrderItemsByOrderId,
  } = require('../models/orderModel');
  
  const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const createOrder = async (req, res) => {
  const { items, amount, token } = req.body;

  try {
    // Create a charge using Stripe
    const charge = await stripe.charges.create({
      amount: amount * 100, // Amount in cents
      currency: 'usd',
      source: token.id,
      description: 'E-Commerce Order',
    });

    // Create the order in the database
    const order = await Order.create({
      user: req.user.id,
      items,
      totalAmount: amount,
      paymentStatus: 'Paid',
    });

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: 'Payment failed', error });
  }
};
  // Create a new order
/*  const placeOrder = async (req, res) => {
    const { userId, items, total } = req.body;
  
    try {
      // Create the order
      const orderResult = await createOrder(userId, total);
      const order = orderResult.rows[0];
  
      // Create order items
      for (const item of items) {
        await createOrderItem(order.id, item.productId, item.quantity, item.price);
      }
  
      res.status(201).json({ message: 'Order placed successfully', order });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  };
  */
  // Get orders for a user
  const getUserOrders = async (req, res) => {
    const { userId } = req.params;
  
    try {
      const ordersResult = await getOrdersByUserId(userId);
      const orders = ordersResult.rows;
  
      res.status(200).json(orders);
    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  };
  
  // Get order details (with items)
  const getOrderDetails = async (req, res) => {
    const { orderId } = req.params;
  
    try {
      const orderResult = await getOrderById(orderId);
      const order = orderResult.rows[0];
  
      if (!order) {
        return res.status(404).json({ message: 'Order not found' });
      }
  
      const itemsResult = await getOrderItemsByOrderId(orderId);
      const items = itemsResult.rows;
  
      res.status(200).json({ order, items });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  };
  const getOrderHistory = async (req, res) => {
    try {
      const userId = req.params.userId;
      const orders = await getOrdersByUserId(userId);
      res.json(orders);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching order history' });
    }
  };
  
  module.exports = { placeOrder, getUserOrders, getOrderDetails, getOrderHistory };
  