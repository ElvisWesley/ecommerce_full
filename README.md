
# E-Commerce Website (PERN Stack)

This is a full-stack e-commerce web application built using the **PERN** stack (PostgreSQL, Express, React, Node.js). Users can browse products, create accounts, log in with third-party services like Google, manage their shopping cart, and complete purchases using **Stripe** as a payment processor. The project is fully deployable on **Render**.

## Features
- **User Authentication**: 
  - Register and log in with email and password.
  - Google OAuth for third-party login.
- **Product Browsing**: 
  - Users can view and search available products.
- **Shopping Cart**: 
  - Users can add/remove products and view their cart.
- **Checkout & Payment**: 
  - Integrated with Stripe for secure payment processing.
- **Order History**: 
  - Users can view their past orders.
- **Fully Responsive**: 
  - Built to work across different devices (mobile, tablet, desktop).

## Tech Stack
- **Backend**: Node.js, Express.js, PostgreSQL, Passport.js (for authentication)
- **Frontend**: React.js, React Router, Axios
- **Database**: PostgreSQL
- **Payment**: Stripe API for payment handling
- **OAuth**: Google OAuth2 for third-party authentication
- **Deployment**: Render (for both frontend and backend)

## Installation and Setup

### Prerequisites
- **Node.js** (v14+)
- **PostgreSQL** (Ensure it's running locally or use a hosted DB)
- **Stripe account** for payment integration
- **Google Developer Console account** for OAuth integration

### 1. Clone the repository:
```bash
git clone https://github.com/yourusername/ecommerce-pern.git
cd ecommerce-pern
```

### 2. Backend Setup
1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with the following environment variables:
   ```env
   PORT=5000
   DATABASE_URL=your_postgres_database_url
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   STRIPE_SECRET_KEY=your_stripe_secret_key
   ```
4. Start the backend server:
   ```bash
   npm start
   ```

### 3. Frontend Setup
1. Navigate to the frontend folder:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with your Stripe public key:
   ```env
   REACT_APP_STRIPE_KEY=your_stripe_publishable_key
   ```
4. Start the React development server:
   ```bash
   npm start
   ```

### 4. Test Locally
- Backend: `http://localhost:5000`
- Frontend: `http://localhost:3000`

### 5. Deploy to Render
- Create a Render account, set up environment variables, and deploy the frontend and backend.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.