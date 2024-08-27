CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    package_id INT,
    name VARCHAR(255),
    FOREIGN KEY (package_id) REFERENCES packages(id) ON DELETE CASCADE
);

-- For PACKAGE 1
INSERT INTO categories (package_id, name)
VALUES 
(1, 'Drinks'),
(1, 'Soup'),
(1, 'Main Course'),
(1, 'Appetizers'),
(1, 'Salad Bar'),
(1, 'Sweets & Desserts'),
(1, 'Miscellaneous');

-- For PACKAGE 2
INSERT INTO categories (package_id, name)
VALUES 
(2, 'Drinks'),
(2, 'Soup'),
(2, 'Main Course'),
(2, 'Appetizers'),
(2, 'Salad Bar'),
(2, 'Sweets & Desserts'),
(2, 'Miscellaneous');


