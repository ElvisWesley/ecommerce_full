import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import API from '../utils/api';

const CheckoutPage = () => {
  const { items } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const totalAmount = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handlePayment = async (token) => {
    try {
      const orderData = {
        items,
        amount: totalAmount,
        token,
      };

      await API.post('/orders', orderData); // Sends order and payment to the backend
      navigate('/order-success'); // Redirect to success page after payment
    } catch (error) {
      console.error('Payment error:', error);
    }
  };

  return (
    <div>
      <h1>Checkout</h1>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <h2>Order Summary</h2>
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                {item.name} - {item.quantity} x ${item.price}
              </li>
            ))}
          </ul>
          <h3>Total: ${totalAmount}</h3>
          <StripeCheckout
            stripeKey={process.env.REACT_APP_STRIPE_KEY}
            token={handlePayment}
            amount={totalAmount * 100} // Stripe uses cents
            name="E-Commerce App"
            billingAddress
            shippingAddress
          />
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
