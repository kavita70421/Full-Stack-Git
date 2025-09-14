import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import AddBookForm from './components/AddBookForm';
import BookList from './components/BookList';

const App = () => {
  const [books, setBooks] = useState([
    { title: '1984', author: 'George Orwell' },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleAddBook = (title, author) => {
    const newBook = { title, author };
    setBooks([...books, newBook]);
  };

  const handleRemoveBook = (indexToRemove) => {
    const updated = books.filter((_, index) => index !== indexToRemove);
    setBooks(updated);
  };

  const filteredBooks = books.filter((book) => {
    const term = searchTerm.toLowerCase();
    return (
      book.title.toLowerCase().includes(term) ||
      book.author.toLowerCase().includes(term)
    );
  });

  return (
    <div style={styles.container}>
      <h2>Library Management</h2>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <AddBookForm onAddBook={handleAddBook} />
      <BookList books={filteredBooks} onRemoveBook={handleRemoveBook} />
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '30px auto',
    padding: '20px',
    border: '2px solid #333',
    borderRadius: '8px',
    fontFamily: 'Arial, sans-serif',
  },
};

export default App;
