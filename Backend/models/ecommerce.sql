-- Create the database if it does not exist
CREATE DATABASE IF NOT EXISTS ecommerce;

-- Use the ecommerce database
USE ecommerce;

-- Create the users table
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  city VARCHAR(255) NOT NULL,
  state VARCHAR(255) NOT NULL,
  zip VARCHAR(255) NOT NULL,
  country VARCHAR(255) NOT NULL,
  phone VARCHAR(255) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Create triggers for the users table
CREATE TRIGGER set_created_at_users
BEFORE INSERT ON users
FOR EACH ROW
SET NEW.created_at = CURRENT_TIMESTAMP;

CREATE TRIGGER set_updated_at_users
BEFORE UPDATE ON users
FOR EACH ROW
SET NEW.updated_at = CURRENT_TIMESTAMP;

-- Create the products table
CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  image_url VARCHAR(255) NOT NULL,
  category VARCHAR(255) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Create triggers for the products table
CREATE TRIGGER set_created_at_products
BEFORE INSERT ON products
FOR EACH ROW
SET NEW.created_at = CURRENT_TIMESTAMP;

CREATE TRIGGER set_updated_at_products
BEFORE UPDATE ON products
FOR EACH ROW
SET NEW.updated_at = CURRENT_TIMESTAMP;

-- Create the orders table
CREATE TABLE IF NOT EXISTS orders (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL,
  total DECIMAL(10, 2) NOT NULL,
  status VARCHAR(255) NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Create triggers for the orders table
CREATE TRIGGER set_created_at_orders
BEFORE INSERT ON orders
FOR EACH ROW
SET NEW.created_at = CURRENT_TIMESTAMP;

CREATE TRIGGER set_updated_at_orders
BEFORE UPDATE ON orders
FOR EACH ROW
SET NEW.updated_at = CURRENT_TIMESTAMP;

-- Create the order_items table
CREATE TABLE IF NOT EXISTS order_items (
  id SERIAL PRIMARY KEY,
  order_id INTEGER NOT NULL,
  product_id INTEGER NOT NULL,
  quantity INTEGER NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (order_id) REFERENCES orders(id),
  FOREIGN KEY (product_id) REFERENCES products(id)
);

-- Create triggers for the order_items table
CREATE TRIGGER set_created_at_order_items
BEFORE INSERT ON order_items
FOR EACH ROW
SET NEW.created_at = CURRENT_TIMESTAMP;

CREATE TRIGGER set_updated_at_order_items
BEFORE UPDATE ON order_items
FOR EACH ROW
SET NEW.updated_at = CURRENT_TIMESTAMP;

-- Create the payments table
CREATE TABLE IF NOT EXISTS payments (
  id SERIAL PRIMARY KEY,
  order_id INTEGER NOT NULL,
  payment_method VARCHAR(255) NOT NULL,
  payment_status VARCHAR(255) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (order_id) REFERENCES orders(id)
);

-- Create triggers for the payments table
CREATE TRIGGER set_created_at_payments
BEFORE INSERT ON payments
FOR EACH ROW
SET NEW.created_at = CURRENT_TIMESTAMP;

CREATE TRIGGER set_updated_at_payments
BEFORE UPDATE ON payments
FOR EACH ROW
SET NEW.updated_at = CURRENT_TIMESTAMP;