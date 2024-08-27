CREATE TABLE packages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    price DECIMAL(10, 2),
    currency VARCHAR(10)
);

INSERT INTO packages (name, price, currency)
VALUES 
('PACKAGE 1', 1199, 'INR'),
('PACKAGE 2', 1499, 'INR');
