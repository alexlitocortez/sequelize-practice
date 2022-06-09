
CREATE DATABASE sequelize-practice;

CREATE TABLE customer(
    customer_id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR (255) NOT NULL,
    email VARCHAR(45) NOT NULL UNIQUE
)

CREATE TABLE order(
    order_id PRIMARY KEY
    object_price MONEY
    date_purchased DEFAULT CURRENT DATE
)