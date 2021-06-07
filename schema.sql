DROP DATABASE IF EXISTS AddressBook;
CREATE DATABASE AddressBook;
USE AddressBook;

CREATE TABLE contacts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  firstName VARCHAR(50),
  lastName VARCHAR(50),
  email VARCHAR(100),
  street VARCHAR(100),
  city VARCHAR(100),
  notes VARCHAR(500)
);