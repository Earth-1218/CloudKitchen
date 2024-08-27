CREATE TABLE speciality_live_counter_options (
    id INT AUTO_INCREMENT PRIMARY KEY,
    package_id INT,
    option_name VARCHAR(255),
    FOREIGN KEY (package_id) REFERENCES packages(id) ON DELETE CASCADE
);


-- For PACKAGE 1
INSERT INTO speciality_live_counter_options (package_id, option_name)
VALUES 
(1, 'Italian'),
(1, 'Mexican'),
(1, 'Oriental'),
(1, 'South Indian'),
(1, 'Amritsari');

-- For PACKAGE 2
INSERT INTO speciality_live_counter_options (package_id, option_name)
VALUES 
(2, 'Italian'),
(2, 'Mexican'),
(2, 'Oriental'),
(2, 'South Indian'),
(2, 'Amritsari'),
(2, 'Rajasthani');
