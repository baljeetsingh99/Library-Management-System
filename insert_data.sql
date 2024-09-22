-- Create the users table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE
);

-- Create the book table
CREATE TABLE book (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    status VARCHAR(50) NOT NULL, -- Example: 'available', 'issued'
    book_quantity BIGINT NOT NULL CHECK (book_quantity >= 0)
);

-- Insert sample data into the users table
INSERT INTO users (name, email) VALUES
('John Doe', 'johndoe@example.com'),
('Jane Smith', 'janesmith@example.com'),
('Mark Smith', 'marksmith@example.com'),
('Musk Nolan', 'musknolan@example.com'),
('Chris Hemsworth', 'chrishems@example.com');

-- Insert sample data into the book table
INSERT INTO book (title, author, status, book_quantity) VALUES
('Catcher', 'J.D. Salinger', 'Available', 5),
('Mockingbird', 'Harper Lee', 'Available', 3),
('Elon Musk', 'George Orwell', 'Available', 4),
('Harry Potter', 'J.K. Rowling', 'Available', 5),
('American Pie', 'Marks Orwell', 'Available', 8);