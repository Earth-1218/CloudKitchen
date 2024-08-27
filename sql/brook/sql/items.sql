CREATE TABLE items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category_id INT,
    name VARCHAR(255),
    quantity INT,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
);

-- For PACKAGE 1
-- Drinks
INSERT INTO items (category_id, name, quantity)
VALUES 
(1, 'Welcome Drink', 1),
(1, 'Fresh Juice', 1);

-- Soup
INSERT INTO items (category_id, name, quantity)
VALUES 
(2, 'Soup', 2),
(2, 'Soup Accompaniments', 3);

-- Main Course
INSERT INTO items (category_id, name, quantity)
VALUES 
(3, 'Dal', 1),
(3, 'Rice', 2),
(3, 'Indian Breads', 3),
(3, 'Raita', 1),
(3, 'Papad', 2);

-- Appetizers
INSERT INTO items (category_id, name, quantity)
VALUES 
(4, 'Appetizers', 3),
(4, 'Farsan', 1),
(4, 'Chaat Live', 1),
(4, 'Speciality Live Counter', 1);

-- Salad Bar
INSERT INTO items (category_id, name, quantity)
VALUES 
(5, 'Salad Bar', 4),
(5, 'Pickle', 2);

-- Sweets & Desserts
INSERT INTO items (category_id, name, quantity)
VALUES 
(6, 'Regular Sweet', 1),
(6, 'Premium Sweet', 1),
(6, 'Dessert', 1),
(6, 'Ice Cream', 1);

-- Miscellaneous
INSERT INTO items (category_id, name, quantity)
VALUES 
(7, 'Baked Dish', 1),
(7, 'Bottle Water (200 ml)', 1),
(7, 'Mukhwas', 3);

-- For PACKAGE 2
-- Drinks
INSERT INTO items (category_id, name, quantity)
VALUES 
(8, 'Welcome Drink', 2),
(8, 'Fresh Juice', 1);

-- Soup
INSERT INTO items (category_id, name, quantity)
VALUES 
(9, 'Soup', 2),
(9, 'Soup Accompaniments', 3);

-- Main Course
INSERT INTO items (category_id, name, quantity)
VALUES 
(10, 'Rice', 2),
(10, 'Indian Breads', 4),
(10, 'Raita', 1),
(10, 'Papad', 2);

-- Appetizers
INSERT INTO items (category_id, name, quantity)
VALUES 
(11, 'Appetizers', 4),
(11, 'Farsan', 1),
(11, 'Chaat Live', 2),
(11, 'Speciality Live Counter', 1);

-- Salad Bar
INSERT INTO items (category_id, name, quantity)
VALUES 
(12, 'Salad Bar', 4),
(12, 'Pickle', 2);

-- Sweets & Desserts
INSERT INTO items (category_id, name, quantity)
VALUES 
(13, 'Regular Sweet', 1),
(13, 'Live Sweet', 1),
(13, 'Premium Sweet', 1),
(13, 'Dessert', 1),
(13, 'Ice Cream', 1);

-- Miscellaneous
INSERT INTO items (category_id, name, quantity)
VALUES 
(14, 'Baked Dish', 1),
(14, 'Bottle Water (200 ml)', 1),
(14, 'Mukhwas', 3);

